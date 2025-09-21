import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

const LunchInvitation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [showCustomTime, setShowCustomTime] = useState(false);
  const [customTimeInput, setCustomTimeInput] = useState('');
  const [mood, setMood] = useState('😊');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const captureRef = useRef(null);

  const timeSlots = [
    { time: '11:30', label: 'Sớm một chút', emoji: '🌅' },
    { time: '12:00', label: 'Đúng giờ ăn trưa', emoji: '🕐' },
    { time: '12:30', label: 'Muộn một tí cũng được', emoji: '🕜' },
    { time: 'custom', label: 'Tự chọn giờ', emoji: '⏰' }
  ];

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


  const moods = ['😊', '🥰', '😍', '🤗', '😋', '🎉'];

  useEffect(() => {
    const interval = setInterval(() => {
      setMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCustomTimeSubmit = () => {
    // Troll mode: Dù nhập gì cũng ra 12:00 =))
    const trollMessages = [
      '12:00 (hệ thống thông minh đã tối ưu hóa 🤖)',
      '12:00 (đã được AI phân tích là giờ tốt nhất 🧠)',
      '12:00 (theo khuyến nghị của chuyên gia dinh dưỡng 👨‍⚕️)',
      '12:00 (phù hợp nhất với lịch sinh học 🔬)',
      '12:00 (đã qua xử lý thuật toán tình yêu 💕)'
    ];
    
    const randomMessage = trollMessages[Math.floor(Math.random() * trollMessages.length)];
    setSelectedTime(randomMessage);
    setShowCustomTime(false);
    setCustomTimeInput('');
  };

  const captureScreenshot = async () => {
    setIsCapturing(true);
    
    try {
      // Capture the main invitation card
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      // Create a new canvas for composite image
      const compositeCanvas = document.createElement('canvas');
      const ctx = compositeCanvas.getContext('2d');
      
      // Set canvas size
      compositeCanvas.width = canvas.width + 200; // Extra space for avatars
      compositeCanvas.height = canvas.height + 150;
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, compositeCanvas.width, compositeCanvas.height);
      gradient.addColorStop(0, '#fdf2f8');
      gradient.addColorStop(0.5, '#fce7f3'); 
      gradient.addColorStop(1, '#f3e8ff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, compositeCanvas.width, compositeCanvas.height);

      // Draw main screenshot
      ctx.drawImage(canvas, 100, 75);

      // Add title
      ctx.fillStyle = '#ec4899';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🍽️ Lunch Date Invitation 🍽️', compositeCanvas.width / 2, 40);

      // Add date stamp
      ctx.fillStyle = '#6b7280';
      ctx.font = '16px Arial';
      ctx.fillText(`Tạo ngày: ${new Date().toLocaleDateString('vi-VN')}`, compositeCanvas.width / 2, compositeCanvas.height - 20);

      // Load and draw avatars
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        // Draw avatars if they load successfully
        const avatar1 = await loadImage(`${process.env.PUBLIC_URL}/assets/profile/me.jpg`);
        const avatar2 = await loadImage(`${process.env.PUBLIC_URL}/assets/profile/mylove.jpg`);
        
        // Draw circular avatars
        const drawCircularImage = (img, x, y, radius) => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.clip();
          ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
          ctx.restore();
        };

        drawCircularImage(avatar1, 100, compositeCanvas.height - 120, 70);
        drawCircularImage(avatar2, compositeCanvas.width - 100, compositeCanvas.height - 120, 70);
        
        // Heart between avatars
        ctx.fillStyle = '#ef4444';
        ctx.font = '60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('💖', compositeCanvas.width / 2, compositeCanvas.height - 80);
        
      } catch (avatarError) {
        console.log('Could not load avatars, proceeding without them');
        // Draw emoji avatars as fallback
        ctx.fillStyle = '#3b82f6';
        ctx.font = '100px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('👨', 100, compositeCanvas.height - 80);
        ctx.fillText('👩', compositeCanvas.width - 100, compositeCanvas.height - 80);
        ctx.fillText('💖', compositeCanvas.width / 2, compositeCanvas.height - 80);
      }

      // Download the composite image
      const link = document.createElement('a');
      link.download = `lunch-invitation-${new Date().toISOString().split('T')[0]}.png`;
      link.href = compositeCanvas.toDataURL();
      link.click();

    } catch (error) {
      console.error('Screenshot failed:', error);
      alert('Không thể chụp màn hình. Vui lòng thử lại!');
    }
    
    setIsCapturing(false);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setShowConfetti(true);
      captureScreenshot(); // Tự động chụp màn hình
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const steps = [
    {
      title: "💌 Lời Mời Đặc Biệt",
      content: (
        <div className="text-center space-y-6">
          <div className="text-8xl animate-bounce">{mood}</div>
          <h2 className="text-3xl font-bold text-purple-800">
            Hẹn Ăn Trưa Cùng Nhau!
          </h2>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
            <p className="text-lg text-gray-700 mb-4">
              Vại tương lơ của tôi ơi! 💕
            </p>
            <p className="text-gray-600">
              Anh muốn mời em đi ăn trưa cùng nhau vào hôm nay. 
              Chúng ta sẽ có một buổi ăn thật vui vẻ và ngon miệng!
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-yellow-200 rounded-full px-4 py-2">
              <span className="text-lg">📅 22/09/2025</span>
            </div>
            <div className="bg-blue-200 rounded-full px-4 py-2">
              <span className="text-lg">📍 Tại trường NCU (G14) </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "⏰ Chọn Giờ Phù Hợp",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Em muốn ăn lúc mấy giờ?
            </h3>
          </div>
          <div className="grid gap-4">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => {
                  if (slot.time === 'custom') {
                    setShowCustomTime(true);
                  } else {
                    setSelectedTime(slot.time);
                  }
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedTime === slot.time
                    ? 'border-pink-500 bg-pink-50 scale-105'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{slot.emoji}</span>
                  <div className="text-left">
                    <div className="font-bold text-lg">
                      {slot.time === 'custom' ? 'Tự chọn' : slot.time}
                    </div>
                    <div className="text-gray-600">{slot.label}</div>
                  </div>
                  {((selectedTime === slot.time) || (slot.time === 'custom' && selectedTime.includes('12:00 ('))) && (
                    <span className="ml-auto text-2xl">✅</span>
                  )}
                </div>
              </button>
            ))}
            
            {/* Custom Time Input Modal */}
            {showCustomTime && (
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-300">
                <h4 className="font-bold mb-3 text-center">Nhập giờ yêu thích:</h4>
                <input
                  type="text"
                  value={customTimeInput}
                  onChange={(e) => setCustomTimeInput(e.target.value)}
                  placeholder="VD: 13:30, 2:00 PM, bất cứ giờ nào..."
                  className="w-full p-3 rounded-lg border border-gray-300 text-center"
                />
                <div className="flex space-x-2 mt-3">
                  <button
                    onClick={handleCustomTimeSubmit}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
                  >
                    Xác nhận ⏰
                  </button>
                  <button
                    onClick={() => setShowCustomTime(false)}
                    className="px-4 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                  >
                    Hủy
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
               
                </p>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "🍽️ Hôm Nay Ăn Gì?",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              Chọn món yêu thích nhé! 😋
            </h3>
          </div>
          <div className="grid gap-3">
            {foodOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedFood(option)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                  selectedFood === option
                    ? 'border-orange-500 bg-orange-50 scale-105'
                    : 'border-gray-200 bg-white hover:border-orange-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{option}</span>
                  {selectedFood === option && (
                    <span className="text-2xl">✅</span>
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              "Dù em chọn gì, anh cũng sẽ cố gắng thực hiện!" 💕
            </p>
          </div>
        </div>
      )
    },
    {
      title: "💖 Xác Nhận Buổi Hẹn",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl animate-pulse">🎉</div>
          <h3 className="text-2xl font-bold text-pink-800">
            Hoàn Tất Kế Hoạch!
          </h3>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">⏰</span>
              <span className="font-semibold">
                {selectedTime || 'Chưa chọn giờ'}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">📍</span>
              <span className="font-semibold">
                Quán ăn quanh trường NCU
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🍽️</span>
              <span className="font-semibold">
                {selectedFood || 'Chưa chọn món ăn'}
              </span>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-lg font-medium text-purple-800">
                "Chỉ cần có em bên cạnh, bữa cơm nào cũng ngon! 💕"
              </p>
            </div>
          </div>
          
          {/* Mini checklist */}
          <div className="bg-yellow-50 rounded-xl p-4">
            <h4 className="font-bold mb-3">📝 Nhớ chuẩn bị:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>✓ Skill nhạo đêi 🥢</div>
              <div>✓ Tâm trạng vui vẻ 😊</div>
              <div>✓ Mang theo nụ cười 😁</div>
              <div>✓ Bụng đói no tầm 30% 🤤</div>
              <div>✓ Sẵn sàng selfie 🤳</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-3xl animate-float opacity-30">🍜</div>
        <div className="absolute top-20 right-20 text-2xl animate-float opacity-30" style={{animationDelay: '1s'}}>🍚</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-float opacity-30" style={{animationDelay: '2s'}}>🥢</div>
        <div className="absolute bottom-10 right-10 text-2xl animate-float opacity-30" style={{animationDelay: '3s'}}>🍽️</div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's'
              }}
            >
              {['🎉', '💕', '🍽️', '✨'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-lg w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Bước {currentStep + 1} / {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Card */}
        <div 
          ref={captureRef}
          className={`bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
            isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
          }`}
        >
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {steps[currentStep].title}
            </h1>
          </div>

          <div className="mb-8">
            {steps[currentStep].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-500 text-white hover:bg-gray-600 transform hover:scale-105'
              }`}
            >
              ← Quay lại
            </button>

            <button
              onClick={nextStep}
              disabled={isCapturing}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isCapturing
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
              }`}
            >
              {isCapturing 
                ? '📸 Đang chụp...' 
                : currentStep === steps.length - 1 
                  ? '🎉 Hoàn tất!' 
                  : 'Tiếp theo →'
              }
            </button>
          </div>
        </div>

        {/* Cute Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Gửi với tình yêu từ anh 💕
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-red-500 animate-pulse text-xl">💖</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold">
              E
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LunchInvitation;