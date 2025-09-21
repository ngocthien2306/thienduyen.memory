import React from 'react';

const Profiles = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-dancing text-6xl text-gradient-pink font-bold mb-4">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our love story, profiles, and the journey we've shared together.
        </p>
      </div>

      {/* Couple Profiles */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Her Profile */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-white overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile/mylove2.jpg`} 
                  alt="Beautiful Duyên"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 hidden items-center justify-center text-white text-5xl">
                  👩
                </div>
              </div>
              <div className="absolute -top-2 -right-2 text-3xl">👑</div>
            </div>
            <h2 className="font-dancing text-3xl text-gradient-pink font-bold mb-2">
              Ngô Thị Minh Duyên
            </h2>
            <p className="text-gray-600 italic">Công chúa của tôi 👑</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl">✨</span>
              <span className="text-gray-700">Absolutely gorgeous and charming</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">😊</span>
              <span className="text-gray-700">Always brings joy and laughter</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">🎯</span>
              <span className="text-gray-700">Smart and focused on her goals</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">💕</span>
              <span className="text-gray-700">The love of my life</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-pink-50/50 rounded-xl">
            <p className="text-gray-700 italic text-center">
              "Every moment with you is a treasure I hold dear"
            </p>
          </div>
        </div>

        {/* His Profile */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
          <div className="text-center mb-6">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-white overflow-hidden">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/profile/me2.jpg`} 
                alt="Loving Boyfriend"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 hidden items-center justify-center text-white text-5xl">
                🧑
              </div>
            </div>
            <h2 className="font-dancing text-3xl text-gradient-blue font-bold mb-2">
              Nguyễn Ngọc Thiện
            </h2>
            <p className="text-gray-600 italic">Your Devoted Partner</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl">❤️</span>
              <span className="text-gray-700">Completely devoted to you</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">🍳</span>
              <span className="text-gray-700">Loves cooking for you</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">🎮</span>
              <span className="text-gray-700">Creates fun games and experiences</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">🌟</span>
              <span className="text-gray-700">Tries to make every day special</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50/50 rounded-xl">
            <p className="text-gray-700 italic text-center">
              "My mission is to make you smile every single day"
            </p>
          </div>
        </div>
      </div>

      {/* Our Love Story */}
      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 mb-16">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          Our Love Story
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              1
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center space-x-2">
                <span>💕</span>
                <span>First Meeting</span>
              </h3>
              <p className="text-gray-600">
                Ngày đầu gặp nhau ở Louisa NCU (23/4/2025), thật ra đây không phải là lần đầu nhưng mà là khoảnh khắc đánh dấu trái tim anh thật sự rung rinh khi gặp em. 
                Anh đã trộm nhìn em khi mà có cơ hội, ở em vừa toát lên sự xinh đẹp tuyệt mỹ mà còn là toát lên vẻ đẹp tri thức, điều đó đã khiến anh đứng ngồi không yên 
                và quyết định ngay tối đó về nhắn tin làm quen ... Đánh dấu cột mốc ta bắt đầu biết nhau.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center space-x-2">
                <span>🚌</span>
                <span>First Date</span>
              </h3>
              <p className="text-gray-600">
                Ngày 22/6/2025 ta đã có chuyến đi chơi riêng cùng nhau, anh đã bồi hồi cả đêm để làm chiếc thiệp mời. Trông sao trời sáng thật nhanh để được có buổi hẹn 
                thật ý nghĩa cùng em. Trên chuyến xe bus xuống ZhongLi đó, lần đầu tiên anh được ngồi kế em, khiến tim anh khá bồi hồi và loạn nhịp (đứng gần đã loạn và lộn tên), không biết lần này sao. 
                Nhưng mà anh chưa từng đánh rơi nhịp nào cả, mọi giây phút ngày hôm đó đều có ý nghĩa đặc biệt với anh ... Đánh dấu cột mốc ta đi chơi cùng nhau.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center space-x-2">
                <span>❤️</span>
                <span>Official Relationship</span>
              </h3>
              <p className="text-gray-600">
                Ngày khai màng cho tình yêu của đôi ta (12/07/2025), thật ra là trước đó có khác gì người yêu đâu =)) Hehe có biết là anh đã chờ ngày này lâu lắm rồi không. Anh là người đàn ông "tham danh phận" =))
                Không biết kể làm sao nhưng mà những ngày đi chơi đó rất là ... ... haha. Đến bây giờ vẫn còn đọng lại trong anh rất nhiều và anh đã rất hạnh phúc.
                ... Đánh dấu cột mốc bắt đầu yêu nhau và ...
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              4
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center space-x-2">
                <span>🌱</span>
                <span>Growing Together</span>
              </h3>
              <p className="text-gray-600">
                Sau đó thì chúng ta đã trải qua khá nhiều điều tươi đẹp, nào là những buổi đi chơi, buổi ăn ngon, tạo nên những kỷ niệm đẹp. Những lúc xa nhau nhớ chèo không nổi (trời ơi vừa gặp đó thôi mà đã nhớ hơn 3, 7, 10 ngày) nên những lúc gặp được nhau thật là hạnh phúc.
                Những lúc đèo nhau trên con xe và băng khắp phố phường, những lúc đó anh thật sự rất vui, những điều đơn giản thôi cũng khiến mình hạnh phúc mà em nhỉ!!
                Tình yêu mà chúng ta cũng không tránh được những lúc buồn rầu, anh đang cố gắng là dần càng hoàn thiện hơn. Hy vọng mọi thứ tốt đẹp sẽ đến với tình yêu này của chúng ta.
                Cảm ơn em đã đến bên anh, người con gái anh thương nhất trên đời.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">❤️</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">First Meeting</div>
          <div className="text-gray-600">April 23, 2025</div>
          <div className="text-xs text-gray-500 mt-1">Louisa NCU</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">💕</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Official Date</div>
          <div className="text-gray-600">July 12, 2025</div>
          <div className="text-xs text-gray-500 mt-1">Our Love Story Began</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">🍽️</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">19+</div>
          <div className="text-gray-600">Dining Adventures</div>
          <div className="text-xs text-gray-500 mt-1">And Counting...</div>
        </div>
      </div>

      {/* Memory Gallery */}
      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 mt-16 ">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          📸 Our Memory Collection
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Những khoảnh khắc đẹp nhất của chúng ta được lưu giữ trong ký ức và trong những bức ảnh này.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({length: 17}, (_, i) => i + 1).map((num) => (
            <div 
              key={num}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/memory/${num}.jpg`}
                alt={`Memory ${num}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 hidden items-center justify-center text-4xl">
                💕
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            "Mỗi bức ảnh là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm đáng trân trọng" 💖
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 text-3xl text-pink-300/30 animate-float">💕</div>
        <div className="absolute top-1/2 right-16 text-2xl text-purple-300/30 animate-float" style={{ animationDelay: '1s' }}>👫</div>
        <div className="absolute bottom-1/3 left-20 text-3xl text-blue-300/30 animate-float" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute bottom-1/4 right-10 text-2xl text-pink-300/30 animate-float" style={{ animationDelay: '3s' }}>✨</div>
      </div>
    </div>
  );
};

export default Profiles;