import React, { useState } from 'react';
import ChatAgent from '../components/ChatAgent';
import LoveDayCounter from '../components/LoveDayCounter';

const LoveDayCounterPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <div>
      <LoveDayCounter />
      
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

export default LoveDayCounterPage;