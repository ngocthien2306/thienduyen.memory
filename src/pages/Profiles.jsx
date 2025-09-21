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
                  src="/assets/profile/mylove2.jpg" 
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
              Ngô Thị Minh Duyen
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
                src="/assets/profile/me2.jpg" 
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
              Loving Boyfriend
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
              <h3 className="font-bold text-lg text-gray-800 mb-2">First Meeting</h3>
              <p className="text-gray-600">
                Our journey began when we first met and instantly connected. There was something special about that moment that we both felt.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">First Date</h3>
              <p className="text-gray-600">
                Our first official date was magical. We talked for hours, laughed together, and knew this was the beginning of something beautiful.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Growing Together</h3>
              <p className="text-gray-600">
                Since then, we've been on countless adventures, shared many meals, and created beautiful memories together. Every day is a new chapter in our love story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">💕</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">First Date</div>
          <div className="text-gray-600">July 7, 2025</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">🍽️</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">19+</div>
          <div className="text-gray-600">Dining Adventures</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">📅</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">2+</div>
          <div className="text-gray-600">Months Together</div>
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