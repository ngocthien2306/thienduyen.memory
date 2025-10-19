import React, { useState } from 'react';
import ChatAgent from '../components/ChatAgent';
import MemorySlideshow from '../components/MemorySlideshow';

const MemoryGallery = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSlideshow, setShowSlideshow] = useState(false);

  // Real image data from your folder structure
  const memoryDates = [
    { date: '19-10-2025', title: 'xiaolongbaooo hen 好吃 😋', icon: '🥟', images: [`${process.env.PUBLIC_URL}/images/19-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/19-10-2025/2.jpg`, `${process.env.PUBLIC_URL}/images/19-10-2025/3.jpg`] },
    { date: '18-10-2025', title: 'Trưa mì kay, tối trứng chiên 🍳✨', icon: '🍜', images: [`${process.env.PUBLIC_URL}/images/18-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/18-10-2025/2.jpg`, `${process.env.PUBLIC_URL}/images/18-10-2025/3.jpg`, `${process.env.PUBLIC_URL}/images/18-10-2025/4.jpg`, `${process.env.PUBLIC_URL}/images/18-10-2025/5.jpg`] },
    { date: '17-10-2025', title: 'Bún thịt nướng, ngon nhứt nách 😆🔥', icon: '🍲', images: [`${process.env.PUBLIC_URL}/images/17-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/17-10-2025/2.jpg`, `${process.env.PUBLIC_URL}/images/17-10-2025/3.jpg`, `${process.env.PUBLIC_URL}/images/17-10-2025/4.jpg`] },
    { date: '15-10-2025', title: 'Cuốn cuốn cuốn cuốn cuốn cuốn 🌀😄', icon: '🌯', images: [`${process.env.PUBLIC_URL}/images/15-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/15-10-2025/2.jpg`] },
    { date: '14-10-2025', title: 'Miến này cũng ngon, tôm ngon 😋', icon: '🦐', images: [`${process.env.PUBLIC_URL}/images/14-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/14-10-2025/2.jpg`] },
    { date: '13-10-2025', title: 'Cháo gì mà không coá hành 😂🥲', icon: '🥣', images: [`${process.env.PUBLIC_URL}/images/13-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/13-10-2025/2.jpg`] },
    { date: '6-10-2025', title: 'Cũng không tệ nhỉ cục dàng? 🤔💕', icon: '🍱', images: [`${process.env.PUBLIC_URL}/images/6-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/6-10-2025/2.jpg`] },
    { date: '5-10-2025', title: 'Ăn mừng trung thu đầu tiên bên nhau hẹ hẹ 🌕🥰', icon: '🥮', images: [`${process.env.PUBLIC_URL}/images/5-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/5-10-2025/2.jpg`, `${process.env.PUBLIC_URL}/images/5-10-2025/3.jpg`, `${process.env.PUBLIC_URL}/images/5-10-2025/4.jpg`] },
    { date: '2-10-2025', title: 'Đem cơm qua bên khoa của người đẹp nè, nghêu hấp cũng ngon hen 😊💖', icon: '🍚', images: [`${process.env.PUBLIC_URL}/images/2-10-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/2-10-2025/2.jpg`] },
    { date: '17-9-2025', title: '小籠包真好吃 😍🥢', icon: '🥟', images: [`${process.env.PUBLIC_URL}/images/17-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/17-9-2025/2.jpg`] },
    { date: '14-9-2025', title: 'Ai cuốn chả mà đẹp thía, nấu ăn cùng nhau vui ghiaaa 🥰👨‍🍳', icon: '🌯', images: [`${process.env.PUBLIC_URL}/images/14-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/14-9-2025/2.jpg`] },
    { date: '13-9-2025', title: 'Mì udon 3 phút nhưng nấu 30 phút vì thích làm màu 😂✨', icon: '🍜', images: [`${process.env.PUBLIC_URL}/images/13-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/13-9-2025/2.jpg`] },
    { date: '12-9-2025', title: 'Chứng chiên tôm với cà chua, không biết ngon không nhưng mà quất cũng gần hết 😅🍴', icon: '🍅', images: [`${process.env.PUBLIC_URL}/images/12-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/12-9-2025/2.jpg`] },
    { date: '11-9-2025', title: 'Màu nui không đẹp lắm, nhưng mà bia ngon 🍻😋', icon: '🍺', images: [`${process.env.PUBLIC_URL}/images/11-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/11-9-2025/2.jpg`] },
    { date: '10-9-2025', title: 'Lúc nào mua cũng sợ ăn không đủ 😂 nhưng cái kết là ăn hết 💪', icon: '🍽️', images: [`${process.env.PUBLIC_URL}/images/10-9-2025/1.jpg`] },
    { date: '9-9-2025', title: 'Nước sốt chấm rau muống ngon nha 😋 ai cắt gọt hoa quả giỏi ghia 🔪✨', icon: '🥗', images: [`${process.env.PUBLIC_URL}/images/9-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/9-9-2025/2.jpg`] },
    { date: '7-9-2025', title: 'Hẹ hẹ, tầm này mở quán đi bán được rồi 😎🏆', icon: '👨‍🍳', images: [`${process.env.PUBLIC_URL}/images/7-9-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/7-9-2025/2.jpg`] },
    { date: '6-9-2025', title: 'Dưa leo ngon 😌🥒', icon: '🥒', images: [`${process.env.PUBLIC_URL}/images/6-9-2025/1.jpg`] },
    { date: '3-9-2025', title: 'Ngày đầu tiên nấu cho công chúa của tôi ăn!! cũng tranh thủ rồi 👸💕', icon: '💖', images: [`${process.env.PUBLIC_URL}/images/3-9-2025/1.jpg`] },
    { date: '25-7-2025', title: 'Ý là ăn chưa đủ no nên ra đây kêu ít dị đó 😂🍜', icon: '🍴', images: [`${process.env.PUBLIC_URL}/images/25-7-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/25-7-2025/2.jpg`, `${process.env.PUBLIC_URL}/images/25-7-2025/3.jpg`, `${process.env.PUBLIC_URL}/images/25-7-2025/4.jpg`] },
    { date: '24-7-2025', title: 'Quán này ngon tuyệt dời ⭐🤩', icon: '⭐', images: [`${process.env.PUBLIC_URL}/images/24-7-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/24-7-2025/2.jpg`] },
    { date: '18-7-2025', title: 'Không ngon nhưng mà quan trọng là ăn hết 😅💪', icon: '😅', images: [`${process.env.PUBLIC_URL}/images/18-7-2025/1.jpg`] },
    { date: '13-7-2025', title: 'Mẹc này nhìn ngon nhưng mà có người ăn nước tương 😂🤦', icon: '🍝', images: [`${process.env.PUBLIC_URL}/images/13-7-2025/1.jpg`, `${process.env.PUBLIC_URL}/images/13-7-2025/2.jpg`] },
    { date: '12-7-2025', title: 'Ý là dô gọi món khí thế hết 🎉😄', icon: '🎉', images: [`${process.env.PUBLIC_URL}/images/12-7-2025/1.jpg`] },
    { date: '11-7-2025', title: 'Sạch tô 😋✨', icon: '🍜', images: [`${process.env.PUBLIC_URL}/images/11-7-2025/1.jpg`] },
    { date: '9-7-2025', title: 'Nhạo đêi, ước mơ nho nhỏ là có dợ biết nhạo hí hí 😄🍖', icon: '🍖', images: [`${process.env.PUBLIC_URL}/images/9-7-2025/1.jpg`] },
    { date: '7-7-2025', title: 'Gà ngonnnnnnn 🍗😍', icon: '🍗', images: [`${process.env.PUBLIC_URL}/images/7-7-2025/1.jpg`] }
  ];

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-dancing text-6xl text-gradient-pink font-bold mb-4">
          Memory Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A timeline of our dining adventures and special moments together. Every photo captures a beautiful memory we've created.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
            <span>{memoryDates.length} total dates</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            <span>{memoryDates.reduce((sum, date) => sum + date.images.length, 0)} photos</span>
          </span>
        </div>

        {/* Slideshow Toggle Button */}
        <div className="mt-8">
          <button
            onClick={() => setShowSlideshow(!showSlideshow)}
            className={`px-8 py-4 rounded-full font-semibold text-white shadow-xl transition-all duration-300 transform hover:scale-105 ${
              showSlideshow
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : 'bg-gradient-to-r from-pink-400 to-purple-500'
            }`}
          >
            {showSlideshow ? '📋 View Timeline' : '🎬 Start Slideshow'}
          </button>
        </div>
      </div>

      {/* Slideshow Section */}
      {showSlideshow && (
        <div className="mb-16">
          <MemorySlideshow
            memoryDates={memoryDates.map(m => ({
              date: m.date,
              title: m.title,
              icon: m.icon,
              folder: m.date
            }))}
          />
        </div>
      )}

      {/* Timeline */}
      {!showSlideshow && (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400"></div>

        {/* Memory cards */}
        <div className="space-y-8">
          {memoryDates.map((memory, index) => (
            <div key={memory.date} className="relative flex items-start space-x-8">
              {/* Timeline dot */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xl">
                  {memory.icon}
                </div>
              </div>

              {/* Memory card */}
              <div
                className={`flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 cursor-pointer hover:-translate-y-1 ${
                  index % 2 === 0 ? 'mr-0 md:mr-32' : 'ml-0 md:ml-32'
                }`}
                onClick={() => setSelectedDate(selectedDate === memory.date ? null : memory.date)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{memory.icon}</span>
                    <h3 className="font-bold text-xl text-gray-800">{memory.title}</h3>
                  </div>
                  <span className="text-sm text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                    {getTimeAgo(memory.date)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 font-medium">{formatDate(memory.date)}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>📸</span>
                    <span>{memory.images.length} photo{memory.images.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Photo grid preview */}
                <div className={`grid gap-3 ${memory.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} ${memory.images.length > 2 ? 'md:grid-cols-3' : ''}`}>
                  {memory.images.map((imagePath, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200 shadow-lg"
                    >
                      <img 
                        src={imagePath} 
                        alt={`${memory.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl hidden items-center justify-center text-4xl"
                      >
                        📷
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expanded view */}
                {selectedDate === memory.date && (
                  <div className="mt-6 p-4 bg-white/40 rounded-xl border border-white/30">
                    <p className="text-gray-700 mb-4 italic">
                      "Another wonderful dining experience together. The food was amazing and the company even better! 💕"
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>📍 Location details would go here</span>
                      <span>❤️ Loved this moment</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">🗓️</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">{memoryDates.length}</div>
          <div className="text-gray-600">Total Dates</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">📸</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            {memoryDates.reduce((sum, date) => sum + date.images.length, 0)}
          </div>
          <div className="text-gray-600">Photos Captured</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50">
          <div className="text-4xl mb-3">💕</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">∞</div>
          <div className="text-gray-600">Memories Made</div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-10 text-2xl text-pink-300/30 animate-float">📸</div>
        <div className="absolute top-1/2 left-16 text-3xl text-purple-300/30 animate-float" style={{ animationDelay: '2s' }}>💫</div>
        <div className="absolute bottom-1/3 right-20 text-2xl text-blue-300/30 animate-float" style={{ animationDelay: '4s' }}>✨</div>
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

export default MemoryGallery;