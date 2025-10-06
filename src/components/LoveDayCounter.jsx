import React, { useState, useEffect, useMemo } from 'react';

const LoveDayCounter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [heartClickCount, setHeartClickCount] = useState(0);
  const [showWeddingSection, setShowWeddingSection] = useState(false);
  const [isProposalAccepted, setIsProposalAccepted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ngày bắt đầu yêu nhau - 12/7/2025
  const startDate = useMemo(() => new Date('2025-07-12T00:00:00'), []);

  // Background images
  const backgroundImages = [
    `${process.env.PUBLIC_URL}/assets/background/1.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/2.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/3.jpg`,
    `${process.env.PUBLIC_URL}/assets/background/4.jpg`
  ];

  const milestones = [
    { days: 1, emoji: '🥰', text: 'First day of our love!', special: true },
    { days: 7, emoji: '🌈', text: '1 week of sweet love!' },
    { days: 14, emoji: '💎', text: '2 weeks - Love getting stronger!' },
    { days: 30, emoji: '🌙', text: '1 month - Moon witnesses our love!' },
    { days: 50, emoji: '🌸', text: '50 days - Love blooms!' },
    { days: 100, emoji: '💯', text: '100 days - Century of Love!' },
    { days: 200, emoji: '🏰', text: '200 days - Building love castle!' },
    { days: 365, emoji: '🎂', text: '1 year - Happy Anniversary!' },
    { days: 500, emoji: '👑', text: '500 days - Love royalty!' },
    { days: 730, emoji: '💍', text: '2 years - Ready for engagement!', special: true },
    { days: 1000, emoji: '🚀', text: '1000 days - Love to the universe!' },
    { days: 1095, emoji: '💒', text: '3 years - Planning our future!', special: true }
  ];

  // Unused for now
  // const loveMessages = [
  //   "This love is as strong as a tsunami! 🌊💕",
  //   "Heart is doing its own private show! 💓🎭",
  //   "Love loading... 99.9% complete! 💖⏳",
  //   "Love level: LEGENDARY! 🌟💕",
  //   "You're the main character in my story! 📖💖",
  //   "This love is copyrighted! ©️💕",
  //   "Warning: Sweetness level exceeds limit! ⚠️🍯",
  //   "Achievement unlocked: Perfect Love! 🏆💖"
  // ];

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const timeDiff = now - startDate;
      
      const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    const interval = setInterval(updateCounter, 1000);
    updateCounter();

    return () => clearInterval(interval);
  }, [startDate]);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const createFloatingHeart = () => {
      const heartsContainer = document.getElementById('floating-hearts');
      if (!heartsContainer) return;

      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = ['💕', '💖', '💗', '💝', '💞', '💘', '❤️', '💙'][Math.floor(Math.random() * 8)];
      heart.style.left = Math.random() * 100 + 'vw';
      heartsContainer.appendChild(heart);
      
      setTimeout(() => heart.remove(), 12000);
    };

    const heartInterval = setInterval(createFloatingHeart, 3000);
    return () => clearInterval(heartInterval);
  }, []);

  const handleHeartClick = (e) => {
    setHeartClickCount(prev => prev + 1);
    
    const heart = e.currentTarget;
    const rect = heart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Animation effect
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
      heart.style.transform = 'scale(1)';
    }, 200);

    // Create explosion effect
    for (let i = 0; i < 15; i++) {
      const explosionHeart = document.createElement('div');
      explosionHeart.innerHTML = ['💖', '💕', '💗', '💝', '💞'][Math.floor(Math.random() * 5)];
      explosionHeart.style.position = 'fixed';
      explosionHeart.style.left = centerX + 'px';
      explosionHeart.style.top = centerY + 'px';
      explosionHeart.style.fontSize = '2rem';
      explosionHeart.style.pointerEvents = 'none';
      explosionHeart.style.zIndex = '1000';
      explosionHeart.style.color = '#ff6b9d';
      
      const angle = (i / 15) * Math.PI * 2;
      const distance = 100 + Math.random() * 50;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      
      explosionHeart.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      });
      
      document.body.appendChild(explosionHeart);
      setTimeout(() => explosionHeart.remove(), 1000);
    }

    if (heartClickCount >= 100 && !showWeddingSection) {
      setShowWeddingSection(true);
    }
  };

  const handleProposal = () => {
    setIsProposalAccepted(true);
    setShowWeddingSection(true);
    
    // Celebration effect
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const emoji = document.createElement('div');
        emoji.innerHTML = ['💍', '💎', '👰', '🤵', '💒', '🎊'][Math.floor(Math.random() * 6)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '-50px';
        emoji.style.fontSize = '3rem';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '1000';
        emoji.style.animation = 'fall 4s linear forwards';
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 4000);
      }, i * 100);
    }
  };

  const getSpecialMessage = () => {
    if (days === 0) {
      return '🌟 Today is the first day of our love! Welcome to paradise! 🌟';
    } else if (days < 7) {
      return `💕 ${days} wonderful days! Each day is a gift! 💕`;
    } else if (days < 30) {
      return `🌈 ${days} happy days! Love like a rainbow after rain! 🌈`;
    } else if (days < 100) {
      return `🌸 ${days} sweet days! Love blooms like spring! 🌸`;
    } else {
      return `👑 ${days} royal days! We are the king and queen of love! 👑`;
    }
  };

  const weddingDate = new Date('2028-12-08T00:00:00');
  const getWeddingCountdown = () => {
    const now = new Date();
    const timeDiff = weddingDate - now;
    const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysUntil;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Images */}
      <div className="fixed inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-pink-100/50 to-purple-100/40"></div>
      </div>
      
      {/* Floating Hearts Container */}
      <div id="floating-hearts" className="fixed inset-0 pointer-events-none z-10"></div>
      
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-dancing text-gradient-pink font-bold mb-6 text-center animate-pulse">
          💕 Love Day Counter 💕
        </h1>
        
        {/* Start Date */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-4 mb-8 shadow-2xl">
          <p className="text-xl md:text-2xl text-pink-600 font-semibold text-center">
            🌟 Our love started from: July 12, 2025 🌟
          </p>
        </div>

        {/* Couple Avatars */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="text-center">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile/me.jpg`} 
                  alt="Nguyễn Ngọc Thiện"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 hidden items-center justify-center text-white text-4xl">
                  🧑
                </div>
              </div>
            </div>
            <p className="mt-3 text-lg font-bold text-gray-800">Nguyễn Ngọc Thiện</p>
            <p className="text-sm text-gray-600 italic">Your devoted partner</p>
          </div>
          
          <div className="text-6xl animate-heartbeat">💖</div>
          
          <div className="text-center">
            <div className="relative">
              <div className="absolute -top-3 -right-3 text-3xl">👑</div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile/mylove.jpg`} 
                  alt="Ngô Thị Minh Duyen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-500 hidden items-center justify-center text-white text-4xl">
                  👩
                </div>
              </div>
            </div>
            <p className="mt-3 text-lg font-bold text-gray-800">Ngô Thị Minh Duyen</p>
            <p className="text-sm text-gray-600 italic">Công chúa của tôi 👑</p>
          </div>
        </div>

        {/* Main Heart */}
        <div 
          className="relative w-64 h-64 md:w-80 md:h-80 mb-8 cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={handleHeartClick}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-heartbeat shadow-2xl flex items-center justify-center">
            <div className="text-center text-white font-bold">
              <div className="text-6xl mb-2">💖</div>
              <div className="text-lg">{days} days in love!</div>
              <div className="text-sm opacity-80">{heartClickCount}/100 clicks</div>
            </div>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl max-w-4xl w-full">
          <h2 className="text-3xl font-dancing text-gradient-pink text-center mb-6">
            ⏰ We've Been In Love For ⏰
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-6 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold mb-2">{days}</div>
              <div className="text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-6 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold mb-2">{hours}</div>
              <div className="text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold mb-2">{minutes}</div>
              <div className="text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-blue-500 text-white p-6 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold mb-2">{seconds}</div>
              <div className="text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl text-center">
            <p className="text-lg">{getSpecialMessage()}</p>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl max-w-4xl w-full">
          <h3 className="text-3xl font-dancing text-gradient-pink text-center mb-6">
            🏆 Love Milestones 🏆
          </h3>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const isAchieved = days >= milestone.days;
              const daysDiff = milestone.days - days;
              const progressPercentage = isAchieved ? 100 : Math.min(100, (days / milestone.days) * 100);
              
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isAchieved 
                      ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg' 
                      : 'bg-gradient-to-r from-orange-200 to-pink-200 text-gray-800 shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className="text-4xl mr-4">{milestone.emoji}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{milestone.text}</div>
                      <div className="text-sm opacity-80">
                        {isAchieved ? '✅ Achieved!' : `📅 ${daysDiff} days left`}
                      </div>
                    </div>
                    {milestone.special && (
                      <div className="text-2xl ml-2">⭐</div>
                    )}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        isAchieved 
                          ? 'bg-gradient-to-r from-white/80 to-white/60' 
                          : 'bg-gradient-to-r from-pink-500 to-purple-600'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="h-full bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 text-xs opacity-70">
                    <span>{days} days</span>
                    <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
                    <span>{milestone.days} days</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            onClick={() => alert('🎉 Celebrating our love! 💕')}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            🎉 Celebrate Our Love! 🎉
          </button>
          
          <button 
            onClick={() => alert('💌 I love you more than all the days we\'ve counted! 💌')}
            className="px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            💌 Send Love 💌
          </button>
          
          <button 
            onClick={handleProposal}
            className={`px-6 py-3 ${
              isProposalAccepted 
                ? 'bg-gradient-to-r from-green-400 to-green-500' 
                : 'bg-gradient-to-r from-red-500 to-pink-600'
            } text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 animate-pulse`}
          >
            {isProposalAccepted ? '💚 Yes! Accepted! 💎' : '💍 Marry Me? 💍'}
          </button>
        </div>

        {/* Wedding Section */}
        {showWeddingSection && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-4xl w-full">
            <h3 className="text-3xl font-dancing text-gradient-pink text-center mb-6">
              💎✨ Our Future Wedding ✨💎
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-2xl">
                <div className="text-4xl mb-4">📅</div>
                <h4 className="text-xl font-bold text-pink-600 mb-2">Wedding Date</h4>
                <p className="text-gray-700">December 8, 2028</p>
                <p className="text-sm text-gray-600">Lucky number 8 for prosperity!</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-200 to-teal-200 p-6 rounded-2xl">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-xl font-bold text-teal-600 mb-2">Countdown</h4>
                <p className="text-gray-700">{getWeddingCountdown()} days left</p>
                <p className="text-sm text-gray-600">Until our special day!</p>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
              <p className="text-lg">
                💰 "Number 8 brings prosperity and eternal happiness!" 💎
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .floating-heart {
          position: absolute;
          font-size: 2rem;
          color: rgba(255, 107, 157, 0.8);
          animation: floatUp 8s linear infinite;
          pointer-events: none;
        }
        
        @keyframes floatUp {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoveDayCounter;