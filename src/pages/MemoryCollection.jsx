import React, { useState } from 'react';
import ChatAgent from '../components/ChatAgent';

const MemoryCollection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const memoryCategories = [
    {
      title: "Special Occasions",
      description: "Celebrating important moments together",
      icon: "🎉",
      color: "from-pink-400 to-rose-500",
      memories: 5
    },
    {
      title: "Romantic Moments", 
      description: "Sweet and tender moments we've shared",
      icon: "💕",
      color: "from-red-400 to-pink-500",
      memories: 8
    },
    {
      title: "Adventure Days",
      description: "Exploring new places and experiences",
      icon: "🌟",
      color: "from-purple-400 to-pink-500",
      memories: 6
    },
    {
      title: "Cozy Times",
      description: "Quiet, peaceful moments together",
      icon: "🏠",
      color: "from-blue-400 to-purple-500",
      memories: 4
    },
    {
      title: "Funny Memories",
      description: "Moments that made us laugh together",
      icon: "😂",
      color: "from-yellow-400 to-orange-500",
      memories: 7
    },
    {
      title: "Milestones",
      description: "Important achievements and firsts",
      icon: "🏆",
      color: "from-green-400 to-teal-500",
      memories: 3
    }
  ];

  const featuredMemories = [
    {
      title: "Mid-Autumn Festival in Taiwan",
      date: "October 6, 2025",
      description: "Celebrating Mid-Autumn Festival together in Taiwan. A magical moment exploring new traditions and creating beautiful memories in a special place.",
      category: "Special Occasions",
      featured: true,
      image: `${process.env.PUBLIC_URL}/assets/memory/trung_thu_19.jpg`
    },
    {
      title: "Our First Photo Together",
      date: "July 12, 2025",
      description: "The very first picture we took as a couple. Looking back, we can see the beginning of our beautiful journey.",
      category: "Milestones",
      featured: true,
      image: `${process.env.PUBLIC_URL}/assets/memory/1.jpg`
    },
    {
      title: "Sweet Moments",
      date: "July 24, 2025", 
      description: "Capturing beautiful moments together. Every photo tells a story of our growing love and happiness.",
      category: "Romantic Moments",
      featured: true,
      image: `${process.env.PUBLIC_URL}/assets/memory/5.jpg`
    },
    {
      title: "Adventure Together",
      date: "July 24, 2025",
      description: "Exploring new places and creating unforgettable memories. These moments make our bond even stronger.",
      category: "Special Occasions",
      featured: true,
      image: `${process.env.PUBLIC_URL}/assets/memory/10.jpg`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-dancing text-6xl text-gradient-pink font-bold mb-4">
          Special Moments
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A curated collection of our most precious memories, organized by the special moments that define our relationship.
        </p>
      </div>

      {/* Featured Memories */}
      <div className="mb-16">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          Featured Memories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredMemories.map((memory, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-2"
            >
              <div className="aspect-square rounded-xl mb-4 overflow-hidden shadow-lg">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl hidden items-center justify-center text-4xl">
                  📷
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 mb-2">{memory.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{memory.date}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {memory.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                  {memory.category}
                </span>
                <span className="text-lg">⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Categories */}
      <div className="mb-16">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          Memory Categories
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-2 cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                {category.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.memories} memories
                </span>
                <div className="flex items-center text-pink-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Stats */}
      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 mb-16">
        <h2 className="font-dancing text-4xl text-gradient-pink text-center mb-8">
          Our Memory Journey
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {memoryCategories.reduce((sum, cat) => sum + cat.memories, 0)}
            </div>
            <div className="text-gray-600 text-sm">Total Memories</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">🗂️</div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{memoryCategories.length}</div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{featuredMemories.length}</div>
            <div className="text-gray-600 text-sm">Featured</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">💕</div>
            <div className="text-2xl font-bold text-gray-800 mb-1">∞</div>
            <div className="text-gray-600 text-sm">Love</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "Every memory we create together becomes a treasure that lasts forever"
          </p>
        </div>
      </div>

      {/* Add New Memory */}
      <div className="text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 border-dashed">
          <div className="text-6xl mb-4">💎</div>
          <h3 className="font-dancing text-3xl text-gradient-pink mb-4">
            Creating New Memories
          </h3>
          <p className="text-gray-600 mb-6">
            Every day with you brings new moments to treasure and add to our special collection.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full font-semibold opacity-75">
            <span className="mr-2">✨</span>
            More memories coming soon...
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-10 text-3xl text-pink-300/30 animate-float">💎</div>
        <div className="absolute top-1/2 left-16 text-2xl text-purple-300/30 animate-float" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-1/3 right-20 text-3xl text-blue-300/30 animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-1/4 left-10 text-2xl text-pink-300/30 animate-float" style={{ animationDelay: '3s' }}>💕</div>
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

      {/* Chat Agent Modal */}
      <ChatAgent 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default MemoryCollection;