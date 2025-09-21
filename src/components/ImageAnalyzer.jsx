import React, { useState } from 'react';
import OpenAI from 'openai';
import { getRelationshipContext } from '../data/personalData';

const ImageAnalyzer = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const getOpenAIKey = () => {
    // Check if OpenAI is disabled for safe build
    if (process.env.REACT_APP_DISABLE_OPENAI === 'true') {
      return null;
    }
    
    // For production build, try environment variable first
    if (process.env.REACT_APP_OPENAI_API_KEY) {
      return process.env.REACT_APP_OPENAI_API_KEY;
    }
    
    // For development or when env var not available, use fallback
    if (process.env.NODE_ENV === 'development') {
      return 'your-development-api-key-here';
    }
    
    // For production without env var, return null to disable image analysis
    return null;
  };

  const apiKey = getOpenAIKey();
  const openai = apiKey ? new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  }) : null;

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setAnalysis('');

    try {
      if (!openai) {
        throw new Error('OpenAI not configured - missing API key in production build');
      }
      
      // Convert image to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result;
        
        const response = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `Bạn là trợ lý AI phân tích hình ảnh cho cặp đôi Thiện và Duyên. Hãy phân tích hình ảnh trong bối cảnh mối quan hệ của họ:

${getRelationshipContext()}

Hãy phân tích hình ảnh và đưa ra:
1. Mô tả chi tiết những gì bạn thấy
2. Phân tích cảm xúc và không khí trong ảnh
3. Liên kết với các hoạt động yêu thích của họ (đặc biệt là ăn uống, nấu ăn)
4. Gợi ý cách tạo ra những kỷ niệm tương tự
5. Nhận xét về sự phát triển của mối quan hệ qua ảnh

Hãy trả lời bằng tiếng Việt một cách ấm áp và cá nhân hóa.`
            },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Hãy phân tích hình ảnh này trong bối cảnh mối quan hệ của Thiện và Duyên:'
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: base64Image
                  }
                }
              ]
            }
          ],
          max_tokens: 1000
        });

        setAnalysis(response.choices[0].message.content);
      };
      
      reader.readAsDataURL(selectedImage);
    } catch (error) {
      console.error('Image analysis error:', error);
      let errorMessage = 'Xin lỗi, tôi gặp vấn đề khi phân tích hình ảnh. Có thể là do hình ảnh quá lớn hoặc API gặp vấn đề. Bạn thử lại với hình ảnh khác nhé! 😅';
      
      if (error.message.includes('missing API key')) {
        errorMessage = 'Tính năng phân tích hình ảnh hiện chưa được cấu hình trên production. Vui lòng liên hệ admin để kích hoạt! 📸💕';
      }
      
      setAnalysis(errorMessage);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              📸
            </div>
            <div>
              <h2 className="text-xl font-bold">Phân tích hình ảnh AI</h2>
              <p className="text-purple-100 text-sm">Hiểu rõ hơn về kỷ niệm của bạn</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6 h-full">
            {/* Image Upload Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Chọn hình ảnh để phân tích</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <div className="text-4xl mb-4">📁</div>
                  <p className="text-gray-600 mb-2">Click để chọn hình ảnh</p>
                  <p className="text-sm text-gray-500">Hỗ trợ JPG, PNG, GIF</p>
                </label>
              </div>

              {imagePreview && (
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang phân tích...</span>
                      </div>
                    ) : (
                      '🔍 Phân tích hình ảnh'
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Analysis Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Kết quả phân tích</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 min-h-[400px] max-h-[500px] overflow-y-auto">
                {analysis ? (
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {analysis}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🤖</div>
                      <p>Chọn hình ảnh và nhấn "Phân tích" để bắt đầu!</p>
                      <p className="text-sm mt-2">AI sẽ phân tích hình ảnh trong bối cảnh mối quan hệ của bạn</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;