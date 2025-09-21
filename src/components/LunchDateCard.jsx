import React, { useState, useEffect } from 'react';

const LunchDateCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFood, setSelectedFood] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Food options for lunch
  const lunchOptions = [
    "🍜 Bún bò Huế (cay cay thơm thơm)",
    "🍲 Lẩu Thái (ăn chung ngọt ngào)", 
    "🥘 Cơm tấm (đậm đà Sài Gòn)",
    "🍝 Mì Ý (romantic style)",
    "🥟 Bánh bao (nhỏ xinh như em)",
    "🍛 Cơm chiên dương châu",
    "🥪 Bánh mì (nhanh gọn lẹ)",
    "🍕 Pizza (share together)",
    "🍱 Dosirak Hàn Quốc",
    "🥗 Salad (healthy choice)"
  ];

  const preparations = [
    "📱 Chuẩn bị điện thoại để chụp ảnh đẹp",
    "💧 Uống nước đầy đủ trước khi đi",
    "👔 Mặc đồ đẹp để gây ấn tượng", 
    "🎵 Tạo playlist nhạc cho chuyến đi",
    "💰 Chuẩn bị tiền và thẻ thanh toán",
    "🌂 Kiểm tra thời tiết mang dù",
    "😊 Tâm trạng vui vẻ và hạnh phúc",
    "🚗 Check phương tiện di chuyển"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const spinWheel = () => {
    setShowSparkles(true);
    const randomIndex = Math.floor(Math.random() * lunchOptions.length);
    setSelectedFood(lunchOptions[randomIndex]);
    
    setTimeout(() => {
      setShowSparkles(false);
    }, 2000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Animated Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-dancing text-gradient-pink font-bold mb-2 animate-bounce">
            🍽️ Lunch Date Invitation 🍽️
          </h1>
          <div className="bg-yellow-100 rounded-full px-4 py-2 inline-block">
            <span className="text-orange-600 font-semibold">
              ⏰ {formatTime(currentTime)}
            </span>
          </div>
        </div>

        {/* Flip Card */}
        <div 
          className={`relative w-full h-96 perspective-1000 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of Card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 shadow-2xl transform-style-preserve-3d">
            <div className="p-8 h-full flex flex-col justify-between text-white">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🌮</div>
                <h2 className="text-2xl font-bold mb-2">Hẹn Ăn Trưa Cùng Nhau!</h2>
                <p className="text-lg opacity-90">Vài tương lơ của tôi ơi!</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span>📅</span>
                  <span className="font-semibold">22 Tháng 9, 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>📍</span>
                  <span>Gặp nhau tại G14 - NCU</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🕐</span>
                  <span>Giờ ăn trưa (11:30 - 12:30)</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm opacity-75 mb-2">👆 Chạm để xem chi tiết</p>
                <div className="flex justify-center space-x-2">
                  <span className="animate-bounce">✨</span>
                  <span className="animate-bounce delay-75">💖</span>
                  <span className="animate-bounce delay-150">✨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 shadow-2xl transform-style-preserve-3d rotateY-180">
            <div className="p-6 h-full overflow-y-auto text-white">
              <h3 className="text-xl font-bold mb-4 text-center">📋 Chi Tiết Buổi Hẹn</h3>
              
              {/* Activity Plan */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">🎯</span>
                  Kế Hoạch Hoạt Động
                </h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• 11:30 - Gặp nhau tại G14</li>
                  <li>• 11:45 - Khám phá quán ăn quanh trường</li>
                  <li>• 12:00 - Thưởng thức bữa trưa ngon</li>
                  <li>• 12:30 - Đi dạo và chụp ảnh</li>
                  <li>• 13:00 - Uống trà sữa hoặc café</li>
                </ul>
              </div>

              {/* What to Bring */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">🎒</span>
                  Nên Chuẩn Bị
                </h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {preparations.slice(0, 6).map((prep, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-1">•</span>
                      <span>{prep.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Note */}
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-sm font-medium">
                  💝 "Chỉ cần có em bên cạnh, bữa cơm nào cũng ngon!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Selector */}
        <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
            🎲 Hôm Nay Ăn Gì Nhỉ?
          </h3>
          
          <button
            onClick={spinWheel}
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 mb-4 ${
              showSparkles 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-105' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {showSparkles ? '🎉 Đang chọn... 🎉' : '🎯 Quay May Mắn!'}
          </button>

          {selectedFood && (
            <div className="text-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                ✨ Hôm nay chúng ta ăn:
              </p>
              <p className="text-xl text-green-600 font-bold">
                {selectedFood}
              </p>
            </div>
          )}
        </div>

        {/* Response Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
            💚 Đồng Ý Ngay!
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
            ❤️ Yêu Ý Tưởng Này!
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Gửi với tất cả tình yêu từ người luôn yêu em 💕
          </p>
          <div className="flex justify-center items-center mt-2 space-x-2">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/profile/me.jpg`}
              alt="From Me"
              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="hidden w-8 h-8 rounded-full bg-blue-500 items-center justify-center text-white text-xs">👨</span>
            <span className="text-red-500 animate-heartbeat">💖</span>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/profile/mylove.jpg`}
              alt="To You"
              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span className="hidden w-8 h-8 rounded-full bg-pink-500 items-center justify-center text-white text-xs">👩</span>
          </div>
        </div>
      </div>

      {/* CSS for flip animation */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .flipped .backface-hidden:first-child {
          transform: rotateY(180deg);
        }
        .flipped .backface-hidden:last-child {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
};

export default LunchDateCard;