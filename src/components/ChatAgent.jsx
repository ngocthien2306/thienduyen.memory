import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import { getRelationshipContext } from '../data/personalData';
import ImageAnalyzer from './ImageAnalyzer';

const ChatAgent = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Xin chào Thiện! 👋 Tôi là trợ lý AI cá nhân đã biết về mối quan hệ giữa bạn và Duyên rồi đấy! Tôi có thể giúp bạn với những ý tưởng hẹn hò, phân tích kỷ niệm của hai bạn, hoặc tư vấn về quà tặng phù hợp. Bạn muốn nói chuyện về điều gì nào? 💕',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showImageAnalyzer, setShowImageAnalyzer] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const openai = new OpenAI({
    apiKey: 'your-development-api-key-here',
    dangerouslyAllowBrowser: true
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const personalizedPrompt = `Bạn là một trợ lý AI cá nhân hóa cho cặp đôi Thiên và Duyên. Bạn đã biết rõ về mối quan hệ của họ và có thể phân tích dữ liệu cá nhân để đưa ra lời khuyên phù hợp.

${getRelationshipContext()}

Hãy sử dụng thông tin này để:
- Đưa ra ý tưởng hẹn hò phù hợp với sở thích của họ
- Gợi ý quà tặng dựa trên tính cách và sở thích
- Phân tích kỷ niệm và đưa ra nhận xét
- Tư vấn cách cải thiện mối quan hệ
- Tạo ra những lời nhắn ngọt ngào phù hợp với cách họ gọi nhau
- Đề xuất hoạt động dựa trên lịch sử hẹn hò

Hãy trả lời một cách cá nhân hóa, ấm áp và thân thiện. Sử dụng tên thật và những chi tiết cụ thể về mối quan hệ của họ.`;

  const suggestedQuestions = [
    "💕 Thiện và Duyên yêu nhau được bao lâu rồi?",
    "📅 Chúng ta bắt đầu yêu nhau từ khi nào?",
    "🌟 Kỷ niệm đáng nhớ nhất của hai bạn là gì?",
    "💝 Gợi ý quà tặng phù hợp với Duyên",
    "🍽️ Phân tích thói quen ăn uống của hai bạn",
    "💌 Viết lời nhắn ngọt ngào cho em",
    "📸 Kể về những kỷ niệm nấu ăn cùng nhau",
    "🎂 Có kế hoạch gì cho dịp kỷ niệm không?",
    "☕ Địa điểm hẹn hò mới quanh NCU"
  ];

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
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: personalizedPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.8
      });

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Xin lỗi, tôi gặp chút vấn đề kỹ thuật. Bạn có thể thử lại sau được không? 😅',
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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl h-[600px] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              💕
            </div>
            <div>
              <h2 className="text-xl font-bold">Trợ lý AI cá nhân</h2>
              <p className="text-pink-100 text-sm">Chuyên gia tình yêu & hẹn hò</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
          >
            ✕
          </button>
        </div>

        {/* Suggested Questions */}
        <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-b">
          <p className="text-sm text-gray-600 mb-3 font-medium">💡 Gợi ý câu hỏi:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="bg-white hover:bg-gray-50 text-sm text-gray-700 px-3 py-2 rounded-full border border-gray-200 transition-all hover:border-pink-300 hover:text-pink-600"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ maxHeight: '400px' }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex items-start space-x-3 max-w-[80%]">
                {message.type === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                    💕
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                    👤
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                  💕
                </div>
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* More Suggested Questions */}
        <div className="px-4 py-2 bg-gray-50 border-t">
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(4).map((question, index) => (
              <button
                key={index + 4}
                onClick={() => handleSuggestedQuestion(question)}
                className="bg-white hover:bg-gray-100 text-xs text-gray-600 px-3 py-1 rounded-full border border-gray-200 transition-all hover:border-pink-300 hover:text-pink-600"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex space-x-3">
            <button
              onClick={() => setShowImageAnalyzer(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center w-12 h-12"
              title="Phân tích hình ảnh"
            >
              📸
            </button>
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1 p-3 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
              rows="1"
              style={{ minHeight: '44px', maxHeight: '100px' }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-12 h-12"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  );
};

export default ChatAgent;