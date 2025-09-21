import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatAgent from '../components/ChatAgent';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const features = [
    {
      title: "Memory Gallery",
      description: "Timeline of our dining adventures",
      icon: "📸",
      path: "/gallery",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      title: "Date Cards",
      description: "Collection of our sweet invitations",
      icon: "💌",
      path: "/date-cards",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "About Us",
      description: "Our love story and profiles",
      icon: "👫",
      path: "/profiles",
      gradient: "from-blue-400 to-teal-500"
    },
    {
      title: "Special Moments",
      description: "Curated collection of memories",
      icon: "💎",
      path: "/memory-collection",
      gradient: "from-teal-400 to-green-500"
    },
    {
      title: "Fun & Games",
      description: "Interactive games and activities",
      icon: "🎮",
      path: "/mini-games",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Love Counter",
      description: "Count every moment of our love",
      icon: "⏰",
      path: "/love-counter",
      gradient: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h1 className="font-dancing text-7xl md:text-8xl text-gradient-pink font-bold mb-4">
            Our Love Story
          </h1>
          <div className="absolute -top-4 -right-4 text-4xl animate-float">✨</div>
          <div className="absolute -bottom-2 -left-4 text-3xl animate-float" style={{ animationDelay: '1s' }}>💖</div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A beautiful collection of our dating memories, adventures, and special moments together. 
          Every photo tells a story, every date card holds a promise, and every memory is treasured forever.
        </p>
        
        <div className="mt-8 flex items-center justify-center space-x-6">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/profile/mylove.jpg`} 
              alt="My Love"
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
          <div className="text-5xl text-pink-400 animate-heartbeat">💖</div>
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/profile/me.jpg`} 
              alt="Me"
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
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="group block"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-4 flex items-center text-pink-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Memories Section */}
      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          Recent Memories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: '17-9-2025', image: `${process.env.PUBLIC_URL}/images/17-9-2025/1.jpg` },
            { date: '14-9-2025', image: `${process.env.PUBLIC_URL}/images/14-9-2025/1.jpg` },
            { date: '13-9-2025', image: `${process.env.PUBLIC_URL}/images/13-9-2025/1.jpg` }
          ].map((memory, index) => (
            <div key={index} className="bg-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square rounded-xl mb-4 overflow-hidden shadow-lg">
                <img 
                  src={memory.image} 
                  alt={`Dining Date ${memory.date}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl hidden items-center justify-center text-4xl">
                  📸
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Dining Date</h4>
              <p className="text-sm text-gray-600">{memory.date}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            View All Memories 📸
          </Link>
        </div>
      </div>

      {/* Chat Agent Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 group"
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💕</span>
            <span className="hidden group-hover:block font-semibold text-sm whitespace-nowrap">
              Chat với AI
            </span>
          </div>
        </button>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 text-2xl text-pink-300/50 animate-float">🌸</div>
        <div className="absolute top-1/2 right-20 text-3xl text-blue-300/50 animate-float" style={{ animationDelay: '2s' }}>💫</div>
        <div className="absolute bottom-1/4 left-1/4 text-2xl text-purple-300/50 animate-float" style={{ animationDelay: '4s' }}>✨</div>
        <div className="absolute top-3/4 right-10 text-2xl text-pink-300/50 animate-float" style={{ animationDelay: '3s' }}>🌺</div>
      </div>

      {/* Chat Agent Modal */}
      <ChatAgent 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default Home;