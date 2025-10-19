import React, { useState } from 'react';
import DateCard from '../components/DateCard';
import LunchInvitation from '../components/LunchInvitation';
import ChatAgent from '../components/ChatAgent';

const DateCards = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const dateCards = [
    {
      id: 1,
      date: "20 tháng 10, 2025",
      title: "Lời Mời Đặc Biệt Ngày Phụ Nữ Việt Nam 20/10",
      subtitle: "Gửi Công Chúa Minh Duyên - Người Phụ Nữ Tuyệt Vời Nhất",
      message: "Nhân dịp 20/10 - Ngày Phụ Nữ Việt Nam, anh xin được vinh dự mời Công Chúa đến căn phòng nhỏ của anh! Anh đã chuẩn bị những món ăn được nấu bằng cả trái tim, cùng với những món quà xinh xinh đang háo hức chờ đón nàng công chúa của anh. Đây không chỉ là một bữa ăn, mà là cơ hội để anh tỏ lòng biết ơn và trân trọng đối với người phụ nữ đặc biệt nhất trong cuộc đời anh. Em có chấp nhận lời mời này không nào?",
      location: "Tại căn phòng ấm áp của anh",
      showMiniGame: true,
      miniGameType: "giftbox",
      showAcceptButton: true,
      myLoveImage: "mylove2.jpg",
      myImage: "me2.jpg",
      content: "Thực đơn đặc biệt do anh tự tay chuẩn bị với tất cả tình yêu thương, những món quà xinh xắn được chọn lựa kỹ càng, và một không gian ấm cúng để chúng ta tận hưởng khoảnh khắc riêng tư bên nhau. Mọi chi tiết đều được chuẩn bị chu đáo để công chúa của anh có một ngày 20/10 thật đáng nhớ!",
      preparation: "Em chỉ cần mang theo nụ cười rạng rỡ của mình là đủ! 💖 Còn lại để anh lo tất cả nhé. Anh đã chuẩn bị mọi thứ để đón tiếp công chúa của anh một cách hoàn hảo nhất! 👸✨🎁"
    },
    {
      id: 2,
      date: "22 tháng 09, 2025",
      title: "Hẹn ăn trưa cùng nhau!",
      subtitle: "Gửi vại tương lơ xinh đẹp của anh",
      message: "Ngày mai chúng ta có một buổi ăn trưa cùng nhau nha! Chúng ta có thể thử những quán ăn quanh trường và tận hưởng thời gian bên nhau. Anh rất háo hức được dành thời gian chất lượng với em và ngày càng thấu hiểu nhau hơn",
      location: "Gặp nhau tại G14, NCU",
      showMiniGame: true,
      content: "Ăn ngon, trò chuyện vui vẻ và cười đùa cùng nhau! Chúng ta có thể khám phá các quán ăn quanh trường và tận hưởng thời gian bên nhau.",
      preparation: "Mang theo tinh thần vui tươi 😊 và dạ dày đói để ăn ngon nha! 🍽️😄 Em cứ chuẩn bị bộ đồ thoải mái nhất nhé 👗✨ vì em mặc gì cũng đẹp hết! 💕"
    },
    {
      id: 3,
      date: "22 tháng 06, 2025",
      title: "Một chiếc đi chơi!",
      subtitle: "Gửi chị Duyên xinh đẹp",
      message: "Ngày mai chúng ta có 1 chiếc đi chơi cùng nhau, anh xin gửi em thông tin lịch hẹn ngày mai nhaaaa! Cùng nhau trên chuyến xe tới Zhongli, sau đó dùng bữa thật ngon và trò chuyện trên trời dưới biển cùng nhau =)) Sau khi dùng bữa xong có thể đi dạo hóng mát, chill chill hoặc làm bất cứ thứ gì mà em thích.",
      location: "ZHONGLI TAIWAN",
      showMiniGame: false,
      content: "Khám phá Zhongli, thưởng thức ẩm thực địa phương và có những cuộc trò chuyện sâu sắc bên nhau! Chúng ta có thể dạo quanh thành phố, chụp ảnh kỷ niệm và tạo ra những kí ức đẹp.",
      preparation: "Mang theo máy ảnh, tinh thần phiêu lưu và sẵn sàng khám phá những điều mới mẻ! 📸✈️"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-dancing text-6xl text-gradient-pink font-bold mb-4">
          Date Cards Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of our sweet date invitations and romantic plans. Each card represents a special moment we've shared or are about to share together.
        </p>
      </div>

      {/* Date Cards Grid */}
      <div className="space-y-16">
        {/* Traditional Date Cards */}
        <div className="space-y-12">
          <div className="text-center mb-8">
            <h2 className="font-dancing text-4xl text-gradient-pink font-bold mb-2">
              💌 Classic Date Cards 💌
            </h2>
            <p className="text-gray-600">
              Những thiệp mời truyền thống và đặc biệt
            </p>
          </div>

          {dateCards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <div className="transform hover:scale-105 transition-all duration-300">
                <DateCard
                  date={card.date}
                  title={card.title}
                  subtitle={card.subtitle}
                  message={card.message}
                  location={card.location}
                  showMiniGame={card.showMiniGame}
                  miniGameType={card.miniGameType}
                  showAcceptButton={card.showAcceptButton}
                  myLoveImage={card.myLoveImage}
                  myImage={card.myImage}
                  content={card.content}
                  preparation={card.preparation}
                />
              </div>
            </div>
          ))}
        </div>

        {/* New Interactive Lunch Invitation */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-dancing text-4xl text-gradient-purple font-bold mb-2">
              ✨ Interactive Invitation ✨
            </h2>
            {/* <p className="text-gray-600">
              Thiết kế mới với trải nghiệm tương tác đặc biệt
            </p> */}
          </div>
          <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 rounded-3xl p-8 shadow-xl">
            <LunchInvitation />
          </div>
        </div>
      </div>

      {/* Add New Card Section */}
      <div className="mt-16 text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 border-dashed">
          <div className="text-6xl mb-4">💌</div>
          <h3 className="font-dancing text-3xl text-gradient-pink mb-4">
            More Cards Coming Soon
          </h3>
          <p className="text-gray-600 mb-6">
            Our collection of date cards will keep growing with each new adventure we plan together.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white rounded-full font-semibold opacity-75 cursor-not-allowed">
            <span className="mr-2">✨</span>
            New Cards Coming Soon
          </div>
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

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 text-3xl text-pink-300/30 animate-float">💖</div>
        <div className="absolute top-40 right-16 text-2xl text-red-300/30 animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute bottom-40 left-20 text-3xl text-pink-300/30 animate-float" style={{ animationDelay: '2s' }}>💗</div>
        <div className="absolute bottom-60 right-10 text-2xl text-red-300/30 animate-float" style={{ animationDelay: '3s' }}>💓</div>
      </div>

      {/* Chat Agent Modal */}
      <ChatAgent 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default DateCards;