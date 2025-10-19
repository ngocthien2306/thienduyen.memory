import React, { useState } from 'react';

const GiftBoxGame = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const gifts = [
    { id: 1, emoji: '🎁', name: 'Món quà bí mật 1', message: 'Một món quà xinh xinh đang chờ em!' },
    { id: 2, emoji: '💝', name: 'Món quà bí mật 2', message: 'Món quà đặc biệt dành riêng cho công chúa!' },
    { id: 3, emoji: '🎀', name: 'Món quà bí mật 3', message: 'Điều bất ngờ đang đợi em ở nhà anh!' },
    { id: 4, emoji: '💐', name: 'Hoa tươi', message: 'Hoa tươi thắm để tôn vinh vẻ đẹp của em!' },
    { id: 5, emoji: '🍰', name: 'Món quà ngọt ngào', message: 'Ngọt ngào như tình yêu anh dành cho em!' },
    { id: 6, emoji: '💍', name: 'Điều đặc biệt', message: 'Một điều đặc biệt... hãy đến để khám phá!' }
  ];

  const handleBoxClick = (gift) => {
    if (!hasPlayed) {
      setSelectedBox(gift);
      setHasPlayed(true);
    }
  };

  const resetGame = () => {
    setSelectedBox(null);
    setHasPlayed(false);
  };

  return (
    <div className="text-center mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
      <h4 className="font-dancing text-xl text-pink-600 mb-4">
        🎁 Chọn một hộp quà để khám phá!
      </h4>

      {!selectedBox ? (
        <div className="grid grid-cols-3 gap-3 mb-4">
          {gifts.map((gift) => (
            <button
              key={gift.id}
              onClick={() => handleBoxClick(gift)}
              className={`
                relative p-4 rounded-xl transition-all duration-300 transform
                ${!hasPlayed ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed'}
                ${hasPlayed && selectedBox?.id !== gift.id ? 'opacity-50' : ''}
                bg-gradient-to-br from-pink-300 to-purple-300 shadow-lg
                hover:shadow-xl active:scale-95
              `}
              disabled={hasPlayed}
            >
              <div className="text-4xl mb-2">{gift.emoji}</div>
              <div className="text-xs text-white font-semibold">Hộp {gift.id}</div>
            </button>
          ))}
        </div>
      ) : (
        <div className="mb-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 shadow-inner mb-4">
            <div className="text-6xl mb-3 animate-bounce">{selectedBox.emoji}</div>
            <h5 className="font-dancing text-2xl text-pink-600 mb-2">{selectedBox.name}</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{selectedBox.message}</p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">✨ Lưu ý:</span> Tất cả các món quà đều có thật và đang chờ em ở nhà anh!
              Hãy đến để nhận tất cả những điều bất ngờ này nhé! 💕
            </p>
          </div>
        </div>
      )}

      {hasPlayed && (
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Chơi lại 🔄
        </button>
      )}

      {!hasPlayed && (
        <p className="text-xs text-gray-500 italic">
          Nhấn vào một hộp quà để xem điều bất ngờ! 🎉
        </p>
      )}
    </div>
  );
};

export default GiftBoxGame;
