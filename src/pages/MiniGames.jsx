import React, { useState } from 'react';

const MiniGames = () => {
  const [wheelResult, setWheelResult] = useState("Click to spin!");
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [rpsResult, setRpsResult] = useState("Choose your move!");
  const [loveLevel, setLoveLevel] = useState(100);

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

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const randomRotation = wheelRotation + 1440 + Math.random() * 1440;
    setWheelRotation(randomRotation);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foodOptions.length);
      setWheelResult(foodOptions[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  const playRPS = (playerChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let outcome = '';
    if (playerChoice === computerChoice) {
      outcome = 'It\'s a tie! We think alike! 🤝';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      outcome = '🎉 You win! You\'re amazing! 💕';
      setLoveLevel(prev => Math.min(100, prev + 5));
    } else {
      outcome = '😄 I win this round! But you\'re still my winner! ❤️';
      setLoveLevel(prev => Math.max(0, prev - 2));
    }
    
    setRpsResult(`You: ${emojis[playerChoice]} vs Me: ${emojis[computerChoice]} - ${outcome}`);
  };

  const generateLovePrediction = () => {
    const predictions = [
      "💕 Your love will grow stronger every day!",
      "✨ A romantic surprise is coming your way!",
      "🌟 Your relationship is blessed by the stars!",
      "💖 Eternal happiness awaits you both!",
      "🎀 You're destined to be together forever!",
      "🌸 Your love story will inspire others!",
      "💝 A special moment will happen soon!",
      "🦋 Your bond is unbreakable and beautiful!"
    ];
    
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    return randomPrediction;
  };

  const [currentPrediction, setCurrentPrediction] = useState(generateLovePrediction());

  const games = [
    {
      title: "Bánh xe đồ ăn",
      description: "Không biết ăn gì? Để bánh xe quyết định giúp bạn!",
      icon: "🎡",
      component: "wheel"
    },
    {
      title: "Kéo Búa Bao",
      description: "Trò chơi kinh điển với twist lãng mạn!",
      icon: "✂️",
      component: "rps"
    },
    {
      title: "Thước đo tình yêu",
      description: "Kiểm tra mức độ tương thích tình yêu của chúng ta!",
      icon: "💕",
      component: "love-meter"
    },
    {
      title: "Bói tình yêu",
      description: "Nhận dự đoán lãng mạn về tương lai của chúng ta!",
      icon: "🔮",
      component: "fortune"
    }
  ];

  const [selectedGame, setSelectedGame] = useState("wheel");

  const renderGame = () => {
    switch (selectedGame) {
      case "wheel":
        return (
          <div className="text-center">
            <h3 className="font-dancing text-3xl text-gradient-pink mb-6">
              🎡 Bánh xe quyết định đồ ăn
            </h3>
            <div className="relative mx-auto w-40 h-40 mb-6">
              <div 
                className={`w-full h-full rounded-full border-4 border-pink-400 relative cursor-pointer transition-transform duration-2000 ease-out`}
                style={{ transform: `rotate(${wheelRotation}deg)` }}
                onClick={spinWheel}
              >
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
                            top: '20%',
                            left: '12%',
                            transform: `rotate(${sectionAngle / 2}deg)`,
                            fontSize: '9px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                            width: '40%'
                          }}
                        >
                          {option.replace(/👨‍🍳|🍚|😊|🛵|💕|🥰|👑|🧋/g, '').trim()}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg" />
              </div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-b-6 border-transparent border-b-gray-800" />
            </div>
            
            <div className="min-h-[3rem] mb-6">
              <p className="text-lg font-medium text-gray-700">
                {wheelResult}
              </p>
            </div>
            
            <button
              onClick={spinWheel}
              disabled={isSpinning}
              className="px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSpinning ? "Spinning..." : "Spin the Wheel! 🎲"}
            </button>
          </div>
        );

      case "rps":
        return (
          <div className="text-center">
            <h3 className="font-dancing text-3xl text-gradient-pink mb-6">
              ✂️ Rock Paper Scissors
            </h3>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Choose your move and let's play!</p>
              
              <div className="flex justify-center gap-6 mb-6">
                {[
                  { choice: 'rock', emoji: '✊', label: 'Rock' },
                  { choice: 'paper', emoji: '✋', label: 'Paper' },
                  { choice: 'scissors', emoji: '✌️', label: 'Scissors' }
                ].map((move) => (
                  <button
                    key={move.choice}
                    onClick={() => playRPS(move.choice)}
                    className="w-20 h-20 bg-white border-4 border-pink-400 rounded-full text-4xl hover:bg-pink-50 hover:scale-110 transition-all duration-200 shadow-lg"
                    title={move.label}
                  >
                    {move.emoji}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[4rem] p-4 bg-white/40 rounded-xl">
                <p className="text-gray-700">{rpsResult}</p>
              </div>
            </div>
          </div>
        );

      case "love-meter":
        return (
          <div className="text-center">
            <h3 className="font-dancing text-3xl text-gradient-pink mb-6">
              💕 Love Compatibility Meter
            </h3>
            
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-8 mb-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                  style={{ width: `${loveLevel}%` }}
                >
                  <span className="text-white font-bold text-sm">
                    {loveLevel}%
                  </span>
                </div>
              </div>
              
              <p className="text-2xl font-bold text-gray-800 mb-2">
                {loveLevel >= 90 ? "Perfect Match! 💕" :
                 loveLevel >= 70 ? "Great Compatibility! 💖" :
                 loveLevel >= 50 ? "Good Chemistry! 💗" :
                 "Growing Love! 💓"}
              </p>
              
              <p className="text-gray-600 mb-6">
                {loveLevel >= 90 ? "You two are absolutely perfect for each other!" :
                 loveLevel >= 70 ? "Your love is strong and beautiful!" :
                 loveLevel >= 50 ? "Your relationship has great potential!" :
                 "Every day your love grows stronger!"}
              </p>
              
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setLoveLevel(prev => Math.min(100, prev + 10))}
                  className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  💕 Add Love
                </button>
                <button
                  onClick={() => setLoveLevel(100)}
                  className="px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  ✨ Max Love
                </button>
              </div>
            </div>
          </div>
        );

      case "fortune":
        return (
          <div className="text-center">
            <h3 className="font-dancing text-3xl text-gradient-pink mb-6">
              🔮 Love Fortune Teller
            </h3>
            
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-lg animate-float">
                🔮
              </div>
              
              <div className="p-6 bg-white/40 rounded-xl mb-6">
                <p className="text-lg text-gray-700 font-medium">
                  {currentPrediction}
                </p>
              </div>
              
              <button
                onClick={() => setCurrentPrediction(generateLovePrediction())}
                className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                🔮 Get New Fortune
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-dancing text-6xl text-gradient-pink font-bold mb-4">
          Fun & Games
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Interactive games and activities to make our relationship even more fun and playful!
        </p>
      </div>

      {/* Game Selection */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {games.map((game, index) => (
          <button
            key={index}
            onClick={() => setSelectedGame(game.component)}
            className={`p-4 rounded-2xl border transition-all duration-200 ${
              selectedGame === game.component
                ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white border-pink-500 shadow-lg'
                : 'bg-white/60 backdrop-blur-sm text-gray-700 border-white/50 hover:bg-pink-50'
            }`}
          >
            <div className="text-3xl mb-2">{game.icon}</div>
            <h3 className="font-bold text-sm mb-1">{game.title}</h3>
          </button>
        ))}
      </div>

      {/* Game Area */}
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 min-h-[500px] flex items-center justify-center">
        {renderGame()}
      </div>

      {/* Game Info */}
      <div className="mt-8 text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <p className="text-gray-600 italic">
            "Playing together, loving together, growing together - that's what makes us special! 💕"
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-10 text-3xl text-pink-300/30 animate-float">🎮</div>
        <div className="absolute top-1/2 left-16 text-2xl text-purple-300/30 animate-float" style={{ animationDelay: '1s' }}>🎲</div>
        <div className="absolute bottom-1/3 right-20 text-3xl text-blue-300/30 animate-float" style={{ animationDelay: '2s' }}>🎯</div>
        <div className="absolute bottom-1/4 left-10 text-2xl text-pink-300/30 animate-float" style={{ animationDelay: '3s' }}>🎊</div>
      </div>
    </div>
  );
};

export default MiniGames;