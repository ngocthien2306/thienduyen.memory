import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import { getRelationshipContext } from '../data/personalData';
import ImageAnalyzer from './ImageAnalyzer';

const ChatAgent = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Xin chào! 👋 Tôi là AI trợ lý biết về câu chuyện tình yêu của Thiện và Duyên. Bạn có thể hỏi tôi về mối quan hệ của họ, những kỷ niệm đặc biệt, hay tìm hiểu thêm về cuộc sống và tính cách của cả hai. Hãy đặt câu hỏi để khám phá câu chuyện tình yêu này nhé! 💕',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showImageAnalyzer, setShowImageAnalyzer] = useState(false);
  const [currentQuestionSet, setCurrentQuestionSet] = useState(0);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const getOpenAIKey = () => {
    return process.env.REACT_APP_OPENAI_API_KEY;
  };

  const apiKey = getOpenAIKey();
  const openai = apiKey ? new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  }) : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle mobile keyboard visibility
  useEffect(() => {
    const handleResize = () => {
      // On mobile, scroll to bottom when keyboard appears/disappears
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          scrollToBottom();
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const questionSets = [
    {
      title: "💕 Tình yêu",
      questions: [
        "💕 Thiện và Duyên yêu nhau được bao lâu rồi?",
        "📅 Câu chuyện gặp nhau lần đầu tại NCU như thế nào?",
        "💬 Cách nói lời yêu thương theo phong cách Việt Nam",
        "🎉 Ý tưởng kỷ niệm ngày đầu nhắn tin LinkedIn"
      ]
    },
    {
      title: "🍜 Ẩm thực",
      questions: [
        "🌟 Kỷ niệm đáng nhớ nhất về việc nấu ăn cùng nhau",
        "🍜 Món ăn Việt Nam nào phù hợp nấu ở Đài Loan?",
        "🍲 Món ăn nào làm Duyên vui khi buồn?",
        "☕ Địa điểm hẹn hò mới quanh NCU phù hợp budget sinh viên"
      ]
    },
    {
      title: "🎁 Quà tặng",
      questions: [
        "💝 Gợi ý quà tặng sinh nhật cho Duyên tháng 5",
        "🎁 Quà tặng ý nghĩa cho anh kỹ sư AI",
        "💌 Viết tin nhắn động viên khi Duyên stress vì MBA"
      ]
    },
    {
      title: "🎯 Tương lai",
      questions: [
        "📚 Cách hỗ trợ nhau trong việc học tập và nghiên cứu",
        "🎯 Kế hoạch tương lai sau khi tốt nghiệp ở Đài Loan",
        "🏠 Cách đối phó với nỗi nhớ nhà khi ở xa Phan Thiết",
        "💪 Gợi ý hoạt động giúp giảm stress học tập",
        "🌸 Kế hoạch du lịch trong Taiwan cùng nhau",
        "📱 Cách duy trì mối quan hệ khi bận học tập",
        "📸 Ý tưởng chụp ảnh kỷ niệm trên campus NCU"
      ]
    }
  ];

  // Function to clean and format response text
  const formatBotResponse = (text) => {
    // Handle special characters and formatting
    let formattedText = text
      // Fix backslash issues
      .replace(/\\\\/g, '\\')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      // Ensure proper Vietnamese text encoding
      .replace(/â€™/g, "'")
      .replace(/â€œ/g, '"')
      .replace(/â€/g, '"')
      .replace(/â€\u009d/g, '"')
      // Remove unwanted formatting prefixes
      .replace(/^Dưới đây là phiên bản đã được format lại.*?:\s*/i, '')
      .replace(/^Hy vọng bạn thích phiên bản này\.?\s*$/im, '')
      .replace(/^---\s*/gm, '')
      .replace(/\s*---\s*$/gm, '')
      // Handle bold text - convert **text** to text without ** 
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Handle markdown headers ### to just text
      .replace(/^#{1,6}\s*/gm, '');

    // Just return the cleaned text without adding emojis
    return formattedText;
  };

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user', 
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      if (!openai) {
        throw new Error('OpenAI not configured - missing API key in production build');
      }

      // Create personalized system prompt
      const relationshipContext = getRelationshipContext();
      const personalizedPrompt = `Bạn là AI trợ lý biết rõ về câu chuyện tình yêu của Thiện và Duyên. 

THÔNG TIN CƠ BẢN:
${relationshipContext}

HƯỚNG DẪN TRẢ LỜI:
- Luôn trả lời bằng tiếng Việt thân thiện và ấm áp
- Sử dụng emoji một cách tự nhiên và vừa phải khi phù hợp
- Tham chiếu đến thông tin cụ thể về Thiện và Duyên khi có thể
- Đưa ra lời khuyên thiết thực và phù hợp với tình cảnh của họ
- Tôn trọng văn hóa Việt Nam và môi trường học tập tại Đài Loan
- Khi nói về tình yêu, hãy nhẹ nhàng và không quá phô trương
- Luôn kết thúc câu trả lời với tinh thần tích cực và hỗ trợ
- Đảm bảo văn bản không có kí tự đặc biệt lỗi như \\, \\", â€™
- Format văn bản rõ ràng, dễ đọc và có cấu trúc logic`;
      
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: personalizedPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 2000,
        temperature: 0.8
      });

      let rawContent = response.choices[0].message.content;

      // Additional formatting step - ask ChatGPT to clean up the response
      if (rawContent.includes('\\') || rawContent.includes('â€')) {
        const formatResponse = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: 'Bạn là trợ lý format văn bản. Chỉ trả về nội dung đã được format, KHÔNG thêm bất kỳ lời giới thiệu hay kết luận nào. Chỉ làm sạch văn bản và sửa lỗi encoding.' 
            },
            { 
              role: 'user', 
              content: `${rawContent}` 
            }
          ],
          max_tokens: 2000,
          temperature: 0.3
        });
        rawContent = formatResponse.choices[0].message.content;
      }

      const formattedContent = formatBotResponse(rawContent);

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: formattedContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      let errorContent = 'Xin lỗi, tôi gặp chút vấn đề kỹ thuật. Bạn có thể thử lại sau được không? 😅';
      
      if (error.message.includes('missing API key')) {
        errorContent = 'Chat AI hiện chưa được cấu hình trên production. Vui lòng liên hệ admin để kích hoạt! 🤖💕';
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: errorContent,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    const cleanQuestion = question.replace(/^[^\w\s]+\s*/, ''); // Remove emoji prefix
    handleSendMessage(cleanQuestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-0 md:p-4">
      <div className="bg-white rounded-none md:rounded-3xl w-full max-w-2xl h-[100vh] md:h-[800px] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl md:text-2xl">
              💕
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">Trợ lý AI cá nhân</h2>
              <p className="text-pink-100 text-xs md:text-sm">Chuyên gia tình yêu & hẹn hò</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all text-sm md:text-base"
          >
            ✕
          </button>
        </div>

        {/* Suggested Questions */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-b">
          {/* Question Category Tabs */}
          <div className="px-3 md:px-4 pt-3 md:pt-4">
            <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">💡 Gợi ý câu hỏi:</p>
            <div className="flex space-x-1 mb-3">
              {questionSets.map((set, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionSet(index)}
                  className={`px-2 md:px-3 py-1 rounded-full text-xs transition-all ${
                    currentQuestionSet === index 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-pink-100'
                  }`}
                >
                  {set.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Current Question Set */}
          <div className="px-3 md:px-4 pb-3 md:pb-4">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {questionSets[currentQuestionSet].questions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="bg-white hover:bg-gray-50 text-xs md:text-sm text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-full border border-gray-200 transition-all hover:border-pink-300 hover:text-pink-600"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4"
          style={{ 
            maxHeight: '800px', 
            height: 'calc(100vh - 280px)',
            minHeight: '300px'
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex items-start space-x-2 md:space-x-3 max-w-[85%] md:max-w-[80%]">
                {message.type === 'bot' && (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">
                    💕
                  </div>
                )}
                <div
                  className={`p-2 md:p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className={`text-xs mt-1 md:mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs md:text-sm flex-shrink-0">
                    👤
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 md:space-x-3 max-w-[85%] md:max-w-[80%]">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm">
                  💕
                </div>
                <div className="bg-gray-100 p-2 md:p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Additional Questions from Current Set */}
        {questionSets[currentQuestionSet].questions.length > 3 && (
          <div className="px-3 md:px-4 py-2 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {questionSets[currentQuestionSet].questions.slice(3).map((question, index) => (
                <button
                  key={index + 3}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="bg-white hover:bg-gray-100 text-xs text-gray-600 px-2 md:px-3 py-1 rounded-full border border-gray-200 transition-all hover:border-pink-300 hover:text-pink-600"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-3 md:p-4 border-t bg-white safe-area-bottom">
          <div className="flex space-x-2 md:space-x-3 items-end">
            <button
              onClick={() => setShowImageAnalyzer(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 md:p-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-sm md:text-base flex-shrink-0"
              title="Phân tích hình ảnh"
            >
              📸
            </button>
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => {
                // Scroll to bottom when focusing input on mobile
                if (window.innerWidth <= 768) {
                  setTimeout(() => scrollToBottom(), 300);
                }
              }}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1 p-3 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all text-sm md:text-base min-h-[44px]"
              rows="1"
              style={{ 
                minHeight: '44px', 
                maxHeight: '120px',
                lineHeight: '1.4'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 md:p-3 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Image Analyzer Modal */}
        {showImageAnalyzer && (
          <ImageAnalyzer onClose={() => setShowImageAnalyzer(false)} />
        )}
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .safe-area-bottom {
            padding-bottom: max(12px, env(safe-area-inset-bottom));
          }
          
          /* Fix iOS safari 100vh issue */
          .h-\\[100vh\\] {
            height: -webkit-fill-available;
            height: 100vh;
          }
          
          /* Prevent zoom on input focus */
          input[type="text"], textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatAgent;