import React, { useState } from 'react';
import GiftBoxGame from './GiftBoxGame';

const DateCard = ({
  date = "22 tháng 09, 2025",
  title = "Hẹn ăn trưa cùng nhau!",
  subtitle = "Gửi vại tương lơ xinh đẹp của anh",
  message = "Ngày mai chúng ta có một buổi ăn trưa cùng nhau nha! Chúng ta có thể thử những quán ăn quanh trường và tận hưởng thời gian bên nhau.",
  location = "Gặp nhau tại G14, NCU",
  showMiniGame = true,
  miniGameType = "wheel", // "wheel" hoặc "giftbox"
  showAcceptButton = false,
  content = "Ăn ngon, trò chuyện vui vẻ và cười đùa cùng nhau! Chúng ta có thể khám phá các quán ăn quanh trường và tận hưởng thời gian bên nhau.",
  preparation = "Mang theo tinh thần vui tươi và dạ dày đói để ăn ngon nha! 😄",
  myLoveImage = "mylove.jpg",
  myImage = "me.jpg"
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [heartBreakCount, setHeartBreakCount] = useState(0);
  const [wheelResult, setWheelResult] = useState("Nhấn để quay bánh xe!");
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const foodOptions = [
    "Ăn đồ anh nấu 👨‍🍳",
    "Ăn cơm bò 🍚",
    "Ăn gì cũng được 😊", 
    "Đặt uber =)) 🛵",
    "Theo ý em 💕",
    "Thích gì anh dẫn ăn đó 🥰",
    "Chiều em tấtt 👑",
    "Đi uống trà sữa 🧋"
  ];

  const breakHeart = () => {
    setHeartBreakCount(prev => prev + 1);
    setShowPopup(true);
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomRotation = wheelRotation + 1440 + Math.random() * 1440; // 4-8 full rotations
    setWheelRotation(randomRotation);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foodOptions.length);
      setWheelResult(foodOptions[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  const handleAcceptInvitation = async () => {
    if (isSendingEmail || emailSent) return;

    setIsSendingEmail(true);

    // Get API URL from environment variable, fallback to localhost
    const apiUrl = 'https://unagitated-uncompletable-cami.ngrok-free.dev';

    try {
      const response = await fetch(`${apiUrl}/api/send-acceptance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
        alert('🎉 Thành công! Email xác nhận đã được gửi đi! 💕');
      } else {
        alert('❌ Có lỗi xảy ra khi gửi email. Vui lòng thử lại!');
        console.error('Error:', data);
      }
    } catch (error) {
      alert('❌ Không thể kết nối đến server. Vui lòng đảm bảo server đang chạy!');
      console.error('Error:', error);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const FloatingElements = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-6 left-6 text-4xl animate-float">
        <span className="text-pink-400">✿</span>
      </div>
      <div className="absolute top-8 left-16 text-3xl animate-float" style={{ animationDelay: '0.8s' }}>
        <span className="text-teal-400">❀</span>
      </div>
      <div className="absolute top-14 left-4 text-3xl animate-float" style={{ animationDelay: '1.6s' }}>
        <span className="text-blue-400">✾</span>
      </div>
      
      {/* Sparkles */}
      <div className="absolute top-20 right-8 text-yellow-400 animate-sparkle">✨</div>
      <div className="absolute top-32 right-16 text-pink-300 animate-sparkle" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-20 left-8 text-purple-300 animate-sparkle" style={{ animationDelay: '2s' }}>⭐</div>
    </div>
  );

  const MiniGameWheel = () => (
    <div className="text-center mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
      <h4 className="font-dancing text-xl text-pink-600 mb-4">🎮 Bánh xe quyết định đồ ăn</h4>
      <div className="relative mx-auto w-32 h-32 mb-4">
        <div 
          className={`w-full h-full rounded-full border-4 border-pink-400 relative cursor-pointer transition-transform duration-2000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
          style={{ transform: `rotate(${wheelRotation}deg)` }}
          onClick={spinWheel}
        >
          {/* Wheel sections */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {foodOptions.map((option, i) => {
              const angle = (360 / foodOptions.length) * i;
              const sectionAngle = 360 / foodOptions.length;
              const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#ffd700', '#ff8fb3', '#87ceeb', '#dda0dd', '#98fb98'];
              
              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'center'
                  }}
                >
                  <div
                    className="absolute w-1/2 h-1/2 origin-bottom-right"
                    style={{
                      background: colors[i % colors.length],
                      clipPath: `polygon(0 0, ${100 * Math.cos((Math.PI * sectionAngle) / 360)}% ${100 * Math.sin((Math.PI * sectionAngle) / 360)}%, 0 100%)`
                    }}
                  />
                  <div 
                    className="absolute text-xs font-bold text-white text-center leading-tight"
                    style={{
                      top: '25%',
                      left: '15%',
                      transform: `rotate(${sectionAngle / 2}deg)`,
                      fontSize: '7px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                      width: '35%'
                    }}
                  >
                    {option.replace(/👨‍🍳|🍚|😊|🛵|💕|🥰|👑|🧋/g, '').trim()}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg" />
        </div>
        
        {/* Pointer */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-gray-800" />
      </div>
      
      <div className="text-sm text-gray-600 min-h-[2rem] font-medium">
        {wheelResult}
      </div>
      
      {!isSpinning && (
        <button
          onClick={spinWheel}
          className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Quay lại! 🎲
        </button>
      )}
    </div>
  );

  const GamePopup = () => {
    if (!showPopup) return null;
    
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-white via-pink-50 to-blue-50 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/30">
          <div className="text-center">
            <h3 className="font-dancing text-3xl text-pink-600 mb-3">Ôi không! 💔</h3>
            <p className="text-gray-600 mb-6">
              Đây là lần thứ {heartBreakCount} em làm vỡ trái tim anh...
            </p>
            
            <MiniGameWheel />
            
            <div className="flex gap-3 justify-center mt-6">
              <button
                onClick={() => {
                  setWheelResult("Click to spin the wheel!");
                  setWheelRotation(0);
                }}
                className="px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Chơi lại 🔄
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Đóng nha 😅
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative">
        <FloatingElements />
        
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-20 flex items-center justify-between px-6 relative">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-all">
            ✕
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-all">
            ⋯
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gradient-romantic relative">
          {/* Decorative stripes */}
          <div className="absolute top-8 right-6 space-y-2">
            <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
            <div className="w-6 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
            <div className="w-7 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8 mt-12">
            <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-3">
              CHÚNG MÌNH CÓ
            </div>
            <h1 className="font-dancing text-5xl text-gradient-pink font-bold mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <span className="text-sm font-medium">{subtitle}</span>
              <div className="w-8 h-8 border-2 border-pink-400 rounded-full flex items-center justify-center text-lg animate-heartbeat">
                💖
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-gray-700 leading-relaxed mb-6 text-sm">
            {message}
            
            <div className="inline-block bg-pink-100 border border-pink-200 rounded-2xl px-6 py-3 my-4 mx-auto">
              <div className="flex items-center justify-center text-pink-700 font-semibold">
                📍 {location}
              </div>
            </div>

            <p className="mt-4">
              <strong>Nội dung:</strong> {content}
            </p>
            
            <p className="mt-4">
              <strong>Chuẩn bị:</strong> {preparation}
            </p>
          </div>

          {/* Date */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
            <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-2">
              NGÀY GIỜ HẸN
            </div>
            <div className="text-lg text-gray-700 font-playfair font-medium">
              {date}
            </div>
          </div>

          {/* Photos */}
          <div className="flex justify-between items-center mb-6 px-4">
            <div className="text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">👑</div>
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/profile/${myLoveImage}`}
                  alt="My Love"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-500 hidden items-center justify-center text-white text-2xl">
                  👩
                </div>
              </div>
              <div className="flex justify-center mt-2 gap-1">
                <span className="text-sm">🌸</span>
                <span className="text-sm">🌺</span>
                <span className="text-sm">🌼</span>
              </div>
            </div>

            <div className="text-3xl text-pink-400 animate-heartbeat">
              💖
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/profile/${myImage}`}
                  alt="Me"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 hidden items-center justify-center text-white text-2xl">
                  🧑
                </div>
              </div>
              <div 
                className="mt-2 cursor-pointer hover:bg-pink-100 rounded-lg p-2 transition-all duration-200"
                onClick={breakHeart}
              >
                <div className="flex justify-center">
                  <span className="text-lg animate-heartbeat">💖</span>
                </div>
                <div className="text-xs text-gray-500 italic">
                  nhấn vào đây
                </div>
              </div>
            </div>
          </div>

          {/* Mini Game Preview */}
          {showMiniGame && (
            miniGameType === "giftbox" ? <GiftBoxGame /> : <MiniGameWheel />
          )}

          {/* Romantic Message */}
          <div className="text-center font-dancing text-2xl text-gradient-pink mt-6">
            Hy vọng chúng ta có buổi hẹn thật vui! ✨
          </div>

          {/* Accept Button */}
          {showAcceptButton && (
            <div className="mt-8">
              <button
                onClick={handleAcceptInvitation}
                disabled={isSendingEmail || emailSent}
                className={`
                  w-full py-4 px-6 rounded-full font-bold text-lg
                  transition-all duration-300 transform
                  ${emailSent
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-white cursor-not-allowed'
                    : isSendingEmail
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-wait'
                    : 'bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 text-white hover:shadow-2xl hover:scale-105 active:scale-95'
                  }
                  shadow-lg
                `}
              >
                {emailSent ? (
                  <span className="flex items-center justify-center gap-2">
                    <span>✅</span>
                    <span>Đã Chấp Nhận! Email Đã Được Gửi</span>
                    <span>💕</span>
                  </span>
                ) : isSendingEmail ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    <span>Đang gửi email...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>💖</span>
                    <span>Em Chấp Nhận Lời Mời!</span>
                    <span>💖</span>
                  </span>
                )}
              </button>
              {!emailSent && (
                <p className="text-xs text-gray-500 text-center mt-3 italic">
                  Click vào nút để gửi email xác nhận cho anh nhé! 💌
                </p>
              )}
            </div>
          )}

          {/* Wave decoration */}
          <div className="text-center text-2xl text-gradient-blue mt-6 opacity-80">
            ～～～ ～～～ ～～～
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-pink-200/80 via-blue-200/80 to-purple-200/80 backdrop-blur-sm p-6 text-center border-t border-white/30">
          <div className="font-dancing text-lg text-gray-700 mb-3">
            Mong chờ buổi hẹn với em! 💕
          </div>
          <div className="flex justify-center gap-4 text-2xl">
            <span className="animate-float">🌸</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>💖</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>✨</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎀</span>
            <span className="animate-float" style={{ animationDelay: '2s' }}>🌺</span>
          </div>
        </div>
      </div>

      <GamePopup />
    </>
  );
};

export default DateCard;