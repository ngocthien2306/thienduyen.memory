// Personal relationship data for AI context
export const relationshipData = {
  // Basic Information
  couple: {
    user: {
      name: "Thiện", 
      nickname: "Anh",
      age: 24, // Fill in your age
      interests: ["cooking", "technology", "photography"],
      personality: "caring, romantic, thoughtful",
      favoriteFood: [],
      hobbies: []
    },
    partner: {
      name: "Duyên",
      nickname: "Em", 
      age: 25, // Fill in partner's age
      interests: ["food", "cute things", "spending time together"],
      personality: "sweet, lovely, adorable",
      favoriteFood: ["xiaolongbao", "various cuisines"],
      hobbies: []
    }
  },

  // Relationship Timeline
  relationship: {
    startDate: "2025-07-12", // Update with actual start date
    daysTogether: null, // Will be calculated
    currentStatus: "dating",
    location: "NCU Campus, Taiwan",
    
    // Important Milestones
    milestones: [
      {
        date: "2025-07-12",
        title: "First Meeting",
        description: "When we first met",
        significance: "high"
      },
      // Add more milestones as needed
    ],

    // Special Dates
    specialDates: [
      {
        date: "2025-09-22",
        event: "Lunch Date",
        location: "NCU G14",
        description: "Our lunch date invitation"
      }
    ]
  },

  // Dating History & Memories
  datingHistory: [
    {
      date: "2025-09-17",
      title: "小籠包真好吃",
      type: "food",
      location: "Restaurant",
      photos: ["17-9-2025/1.jpg", "17-9-2025/2.jpg"],
      description: "Enjoyed delicious xiaolongbao together",
      mood: "happy"
    },
    {
      date: "2025-09-14", 
      title: "Ai cuốn chả mà đẹp thía, nấu ăn cùng nhau vui ghiaaa",
      type: "cooking",
      location: "Home",
      photos: ["14-9-2025/1.jpg", "14-9-2025/2.jpg"],
      description: "Cooking together, making spring rolls",
      mood: "fun"
    },
    {
      date: "2025-09-13",
      title: "Mì udon 3 phút nhưng nấu 30 phút vì thích làm màu =))",
      type: "cooking",
      location: "Home", 
      photos: ["13-9-2025/1.jpg", "13-9-2025/2.jpg"],
      description: "Making udon noodles, took longer than expected but had fun",
      mood: "playful"
    },
    {
      date: "2025-09-12",
      title: "Chứng chiên tôm với cà chua, không biết ngon không nhưng mà quất cũng gần hết",
      type: "cooking",
      location: "Home",
      photos: ["12-9-2025/1.jpg", "12-9-2025/2.jpg"], 
      description: "Cooking shrimp with tomatoes, finished most of it",
      mood: "satisfied"
    }
  ],

  // Preferences & Habits
  preferences: {
    dateTypes: ["cooking together", "trying new restaurants", "casual dining"],
    favoriteActivities: ["eating", "cooking", "taking photos", "chatting"],
    commonInterests: ["food", "spending quality time together"],
    communicationStyle: "sweet, playful, caring",
    
    // Food preferences
    foodPreferences: {
      cuisines: ["Asian", "Vietnamese", "Chinese", "Taiwanese"],
      dislikes: [],
      allergies: []
    }
  },

  // Relationship Dynamics
  dynamics: {
    petNames: {
      userCallsPartner: ["em", "vại tương lơ", "chị Duyên xinh đẹp"],
      partnerCallsUser: ["anh"]
    },
    loveLanguage: {
      user: ["acts of service", "quality time", "words of affirmation"],
      partner: ["quality time", "receiving care", "food sharing"]
    },
    commonRoutines: ["cooking together", "trying new food", "taking photos of meals"],
    specialTraditions: ["date cards", "food adventures", "memory collection"]
  },

  // Goals & Future Plans
  future: {
    shortTerm: ["more lunch dates", "cooking more dishes together", "exploring campus food"],
    longTerm: ["building more memories", "strengthening relationship"],
    dreamDates: ["traveling together", "trying famous restaurants", "cooking classes"]
  }
};

// Helper function to calculate days together
export const calculateDaysTogether = () => {
  const startDate = new Date(relationshipData.relationship.startDate);
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  relationshipData.relationship.daysTogether = diffDays;
  return diffDays;
};

// Function to get recent memories
export const getRecentMemories = (count = 5) => {
  return relationshipData.datingHistory
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// Function to get memories by type
export const getMemoriesByType = (type) => {
  return relationshipData.datingHistory.filter(memory => memory.type === type);
};

// Function to format relationship context for AI
export const getRelationshipContext = () => {
  const daysTogether = calculateDaysTogether();
  const recentMemories = getRecentMemories(3);
  
  return `
Thông tin về cặp đôi:
- ${relationshipData.couple.user.name} (${relationshipData.couple.user.nickname}) và ${relationshipData.couple.partner.name} (${relationshipData.couple.partner.nickname})
- Đã quen nhau ${daysTogether} ngày (từ ${relationshipData.relationship.startDate})
- Hiện tại đang hẹn hò tại ${relationshipData.relationship.location}

Tính cách và sở thích:
- ${relationshipData.couple.user.name}: ${relationshipData.couple.user.personality}, thích ${relationshipData.couple.user.interests.join(', ')}
- ${relationshipData.couple.partner.name}: ${relationshipData.couple.partner.personality}, thích ${relationshipData.couple.partner.interests.join(', ')}

Hoạt động yêu thích: ${relationshipData.preferences.favoriteActivities.join(', ')}
Loại hẹn hò thường xuyên: ${relationshipData.preferences.dateTypes.join(', ')}

Những kỷ niệm gần đây:
${recentMemories.map(memory => 
  `- ${memory.date}: ${memory.title} (${memory.type})`
).join('\n')}

Cách gọi nhau: ${relationshipData.couple.user.name} gọi ${relationshipData.couple.partner.name} là "${relationshipData.dynamics.petNames.userCallsPartner.join('", "')}"
`;
};