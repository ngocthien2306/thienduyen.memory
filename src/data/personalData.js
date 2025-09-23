// Personal relationship data for AI context
export const relationshipData = {
  // Basic Information
  couple: {
    user: {
      name: "Thiện", 
      fullName: "Nguyễn Ngọc Thiện",
      nickname: "Anh",
      age: 24,
      birthDate: "2001-06-23", // Based on Facebook posts about birthday
      education: {
        current: "Master's in Computer Science and Information Engineering at National Central University (NCU), Taiwan",
        previous: "Bachelor's in Information Technology at HCMC University of Technology and Education",
        gpa: "3.9/4.0 (Master's), 7.77/10 (Bachelor's)"
      },
      career: {
        current: "Research Assistant at National Central University",
        previous: ["AI Fullstack Engineer at i-SOFT JSC", "Software Engineer at New Ocean IS Co., Ltd.", "Software Engineer at THL One Corporation"],
        skills: ["AI/ML", "Spiking Neural Networks", "Data Science", "Computer Vision", "Deep Learning", "Full-stack Development", "C#", "ASP.NET", "React", "Angular"]
      },
      location: {
        current: "Taoyuan City, Taiwan (NCU)",
        hometown: "Phan Thiết, Bình Thuận, Vietnam"
      },
      interests: ["technology", "AI research", "data science", "programming", "cooking", "photography", "learning new things", "sharing knowledge"],
      personality: "motivated, passionate about technology, analytical, caring, thoughtful, eager to learn and grow, good communication skills",
      favoriteFood: ["Vietnamese cuisine", "Asian food"],
      hobbies: ["coding", "research", "tech blogging", "learning AI/ML", "taking photos", "cooking"],
      languages: ["Vietnamese (native)", "English (professional)", "Chinese (basic)"],
      certifications: ["Deep Learning Specialization", "Certified Data Scientist", "TensorFlow Bootcamp", "ASP.NET MVC", "TOEFL"]
    },
    partner: {
      name: "Duyên",
      fullName: "Ngô Thị Minh Duyên", 
      nickname: "Em",
      age: 25,
      birthDate: "2000-05-06", // Based on birthday posts - turned 25 in 2024
      education: {
        current: "MBA - International Master of Business Administration at National Central University (NCU), Taiwan (Full Scholarship)",
        previous: "Bachelor's in Accounting and Finance at HCMC University of Technology and Education",
        grade: "Very Good classification"
      },
      career: {
        current: "Research Assistant at National Central University",
        previous: ["Accounts Payable Accountant at Duy Tan Plastics (Jun 2022 - Jun 2024)", "Teaching Assistant at HCMUTE (Aug 2021 - Feb 2024)"],
        skills: ["Accounting", "Finance", "Management", "Communication", "Data Analysis", "Business Administration", "Leadership"]
      },
      location: {
        current: "Taoyuan City, Taiwan (NCU)",
        hometown: "Phan Thiết, Bình Thuận, Vietnam"
      },
      interests: ["business management", "accounting", "reading", "data storytelling", "continuous learning", "food", "cute things", "spending time together", "exploring new places"],
      personality: "intelligent, ambitious, hardworking, achieved full scholarship, excellent student (4/6 scholarships), determined, sweet, lovely, adorable, passionate about learning",
      favoriteFood: ["xiaolongbao", "various Asian cuisines", "Vietnamese food"],
      hobbies: ["reading business books", "data visualization", "exploring food", "taking photos", "traveling"],
      languages: ["Vietnamese (native)", "English (professional - TOEIC 940/990)", "Chinese (HSK 4 level)"],
      certifications: ["TOEIC 940/990", "Chinese HSK 4", "Digital Accounting Certificate", "Academic English", "Financial Statement Analysis", "Communication Skills Diploma", "Purpose Driven Leadership"],
      achievements: ["Full Scholarship for International MBA", "4/6 Scholarships at HCMUTE", "Student of 5 Merits", "TOEIC 940/990 high score"]
    }
  },

  // Relationship Timeline
  relationship: {
    howTheyMet: {
      date: "April 2025", // Based on LinkedIn messages
      location: "National Central University (NCU)",
      details: "They first noticed each other around campus, met at various locations like the beef noodle restaurant, cultural tea exchange, and Fami convenience store. Thiện was working as a cameraman during a research experiment by Professor Ringan when they had a meaningful encounter."
    },
    startDate: "2025-07-12", // Based on LinkedIn conversation
    daysTogether: null, // Will be calculated
    currentStatus: "dating",
    location: "NCU Campus, Taiwan",
    
    // Important Milestones
    milestones: [
      {
        date: "2025-04-23",
        title: "First LinkedIn Message",
        description: "Thiện reached out on LinkedIn saying he recognized Duyên from around campus",
        significance: "high"
      },
      {
        date: "2025-04-24", 
        title: "Real Connection",
        description: "Both realized they had seen each other multiple times around campus - at beef noodle shop, cultural tea exchange, and Fami store during Professor Ringan's experiment",
        significance: "high"
      },
      {
        date: "2025-09-17",
        title: "小籠包真好吃", 
        description: "Enjoying delicious xiaolongbao together",
        significance: "medium"
      }
    ],

    // Special Dates
    specialDates: [
      {
        date: "2025-09-22",
        event: "Lunch Date",
        location: "NCU G14",
        description: "Our lunch date invitation"
      }
    ],

    // Meeting Background
    sharedBackground: {
      university: "Both studying at National Central University (NCU) in Taiwan",
      commonPlaces: ["Beef noodle restaurant", "Cultural tea exchange", "Fami convenience store", "Campus areas"],
      mutualConnections: ["Both Vietnamese students at NCU", "Academic environment"],
      timeline: "Known of each other for some time before actually connecting"
    }
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

  // Cultural and Background Context
  culturalContext: {
    nationality: "Vietnamese students studying abroad in Taiwan",
    sharedBackground: {
      hometown: "Both from Phan Thiết, Bình Thuận, Vietnam",
      language: "Vietnamese (native communication)",
      foodCulture: "Love for Vietnamese cuisine, exploring Taiwanese food together",
      academicCulture: "Both high-achieving students with scholarships and excellent records",
      values: "Education, hard work, family, traditional values mixed with modern outlook"
    },
    internationalExperience: {
      location: "Living and studying in Taiwan since 2024",
      challenges: "Adapting to new culture, language learning (Chinese), being away from family",
      opportunities: "Advanced education, international exposure, personal growth, cultural exchange",
      support: "Having each other as fellow Vietnamese students in foreign environment"
    },
    academicExcellence: {
      thien: "GPA 3.9/4.0 in Master's, strong in AI/ML research, passionate about technology",
      duyen: "Full scholarship MBA student, TOEIC 940/990, multiple academic achievements, business-focused"
    }
  },

  // Academic Life Context
  academicLife: {
    thiensField: {
      focus: "Computer Science and Information Engineering (Master's)",
      specialization: "AI/ML, Spiking Neural Networks, Data Science, Computer Vision",
      workStyle: "Research-oriented, technical, analytical, always learning new technologies",
      currentRole: "Research Assistant at NCU"
    },
    duyensField: {
      focus: "International Master of Business Administration (MBA)",
      specialization: "Management, Leadership, Accounting, Finance, Data Analysis",
      workStyle: "Strategic thinking, data-driven decision making, leadership-oriented",
      currentRole: "Research Assistant at NCU"
    },
    sharedAcademicExperience: {
      university: "National Central University (NCU) - prestigious institution in Taiwan",
      environment: "International graduate programs with high academic standards",
      commonChallenges: "Research requirements, language barriers, academic pressure",
      mutualSupport: "Both understand academic stress and support each other's goals"
    }
  },

  // Personality Insights
  personalityCompatibility: {
    complementaryTraits: {
      thien: "Technical, analytical, caring, passionate about innovation",
      duyen: "Business-minded, ambitious, organized, excellent communication skills"
    },
    sharedValues: ["Excellence in education", "Continuous learning", "Family importance", "Hard work", "Achievement"],
    relationshipStrengths: ["Both academically driven", "Mutual respect for achievements", "Shared cultural background", "Support in foreign environment"],
    communicationStyle: "Sweet, playful, caring - mix of Vietnamese cultural expressions with modern relationship dynamics"
  },

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
=== THÔNG TIN CHI TIẾT VỀ CẶP ĐÔI THIỆN VÀ DUYÊN ===

🧑‍🤝‍🧑 THÔNG TIN CƠ BẢN:
- Thiện (${relationshipData.couple.user.fullName}): ${relationshipData.couple.user.age} tuổi, sinh ngày ${relationshipData.couple.user.birthDate}
- Duyên (${relationshipData.couple.partner.fullName}): ${relationshipData.couple.partner.age} tuổi, sinh ngày ${relationshipData.couple.partner.birthDate}
- Cả hai đều đến từ Phan Thiết, Bình Thuận, Việt Nam
- Hiện đang học tại National Central University (NCU), Đài Loan
- Đã quen nhau ${daysTogether} ngày (từ ${relationshipData.relationship.startDate})

📚 HỌC VẤN VÀ NGHỀ NGHIỆP:
Thiện:
- Hiện tại: ${relationshipData.couple.user.education.current}
- GPA: ${relationshipData.couple.user.education.gpa}
- Công việc: ${relationshipData.couple.user.career.current}
- Kỹ năng chuyên môn: ${relationshipData.couple.user.career.skills.join(', ')}
- Chứng chỉ: ${relationshipData.couple.user.certifications.join(', ')}

Duyên:
- Hiện tại: ${relationshipData.couple.partner.education.current}
- Thành tích: ${relationshipData.couple.partner.achievements.join(', ')}
- Công việc: ${relationshipData.couple.partner.career.current}
- Kỹ năng chuyên môn: ${relationshipData.couple.partner.career.skills.join(', ')}
- Chứng chỉ quan trọng: ${relationshipData.couple.partner.certifications.slice(0, 3).join(', ')}

💕 CÂU CHUYỆN TÌNH YÊU:
- Lần đầu gặp: ${relationshipData.relationship.howTheyMet.date} tại ${relationshipData.relationship.howTheyMet.location}
- ${relationshipData.relationship.howTheyMet.details}
- Bắt đầu quen nhau qua LinkedIn vào ${relationshipData.relationship.startDate}

🌟 TÍNH CÁCH VÀ SỞ THÍCH:
Thiện: ${relationshipData.couple.user.personality}
- Sở thích: ${relationshipData.couple.user.interests.join(', ')}
- Hobby: ${relationshipData.couple.user.hobbies.join(', ')}

Duyên: ${relationshipData.couple.partner.personality}
- Sở thích: ${relationshipData.couple.partner.interests.join(', ')}
- Hobby: ${relationshipData.couple.partner.hobbies.join(', ')}

🍜 HOẠT ĐỘNG CHUNG VÀ SỞ THÍCH:
- Hoạt động yêu thích: ${relationshipData.preferences.favoriteActivities.join(', ')}
- Loại hẹn hò: ${relationshipData.preferences.dateTypes.join(', ')}
- Món ăn yêu thích của Duyên: ${relationshipData.couple.partner.favoriteFood.join(', ')}
- Ẩm thực ưa thích: ${relationshipData.preferences.foodPreferences.cuisines.join(', ')}

💬 CÁCH GIAO TIẾP VÀ GỌI NHAU:
- Thiện gọi Duyên: "${relationshipData.dynamics.petNames.userCallsPartner.join('", "')}"
- Duyên gọi Thiện: "${relationshipData.dynamics.petNames.partnerCallsUser.join('", "')}"
- Phong cách giao tiếp: ${relationshipData.dynamics.communicationStyle}

🌍 BỐI CẢNH VĂN HÓA:
- ${relationshipData.culturalContext.nationality}
- ${relationshipData.culturalContext.sharedBackground.hometown}
- ${relationshipData.culturalContext.internationalExperience.location}
- Thử thách: ${relationshipData.culturalContext.internationalExperience.challenges}
- Hỗ trợ lẫn nhau: ${relationshipData.culturalContext.internationalExperience.support}

🎯 ĐIỂM MẠNH TRONG MỐI QUAN HỆ:
${relationshipData.personalityCompatibility.relationshipStrengths.map(strength => `- ${strength}`).join('\n')}

📝 KỶ NIỆM GẦN ĐÂY:
${recentMemories.map(memory => 
  `- ${memory.date}: ${memory.title} (${memory.type}) - ${memory.description}`
).join('\n')}

🌟 GIÁ TRỊ CHUNG:
${relationshipData.personalityCompatibility.sharedValues.map(value => `- ${value}`).join('\n')}

🚀 KẾ HOẠCH TƯƠNG LAI:
Ngắn hạn: ${relationshipData.future.shortTerm.join(', ')}
Dài hạn: ${relationshipData.future.longTerm.join(', ')}

=== LƯU Ý QUAN TRỌNG CHO AI ===
- Cả hai đều là sinh viên giỏi, có học bổng, rất coi trọng học tập
- Đều đến từ cùng quê hương nhưng gặp nhau ở nước ngoài
- Tình yêu ẩm thực và nấu ăn cùng nhau là điểm chung lớn
- Thiện có background kỹ thuật mạnh, Duyên có nền tảng kinh doanh vững chắc
- Mối quan hệ dựa trên sự tôn trọng, hỗ trợ lẫn nhau trong học tập và cuộc sống
- Sử dụng tiếng Việt trong giao tiếp hàng ngày, văn hóa Việt Nam trong cách thể hiện tình cảm
`;
};

// Additional helper functions for enhanced AI interaction

// Function to get personality insights for gift/date suggestions
export const getPersonalityInsights = () => {
  return {
    thien: {
      personalityTraits: relationshipData.couple.user.personality.split(', '),
      interests: relationshipData.couple.user.interests,
      hobbies: relationshipData.couple.user.hobbies,
      careerFocus: relationshipData.academicLife.thiensField.specialization.split(', '),
      loveLanguage: relationshipData.dynamics.loveLanguage.user
    },
    duyen: {
      personalityTraits: relationshipData.couple.partner.personality.split(', '),
      interests: relationshipData.couple.partner.interests,
      hobbies: relationshipData.couple.partner.hobbies,
      careerFocus: relationshipData.academicLife.duyensField.specialization.split(', '),
      loveLanguage: relationshipData.dynamics.loveLanguage.partner,
      achievements: relationshipData.couple.partner.achievements
    },
    compatibility: relationshipData.personalityCompatibility
  };
};

// Function to get cultural context for appropriate suggestions
export const getCulturalContext = () => {
  return {
    background: relationshipData.culturalContext,
    communication: {
      language: "Vietnamese primary, English secondary, learning Chinese",
      style: relationshipData.dynamics.communicationStyle,
      petNames: relationshipData.dynamics.petNames
    },
    foodCulture: {
      preferences: relationshipData.preferences.foodPreferences,
      favorites: relationshipData.couple.partner.favoriteFood,
      diningStyle: relationshipData.preferences.dateTypes
    },
    academicContext: relationshipData.academicLife
  };
};

// Function to get conversation starters and topics
export const getConversationTopics = () => {
  return {
    academic: ["AI research progress", "MBA studies", "future career plans", "scholarship experiences"],
    personal: ["Childhood memories in Phan Thiết", "Family back home", "Adjusting to life in Taiwan"],
    food: ["Vietnamese restaurants in Taiwan", "Cooking experiments", "Food from hometown", "New Taiwanese dishes to try"],
    future: ["Travel plans", "Career goals", "Life after graduation", "Visiting Vietnam together"],
    shared: ["Campus life at NCU", "Vietnamese student community", "Language learning", "Academic achievements"],
    romantic: ["Favorite memories together", "What you appreciate about each other", "Dreams and aspirations", "Special traditions to create"]
  };
};

// Function to suggest appropriate gifts based on profiles
export const getGiftSuggestions = () => {
  return {
    forDuyen: {
      academic: ["Business leadership books", "MBA study materials", "Professional development courses"],
      personal: ["Skincare products", "Cute accessories", "Quality stationery for notes"],
      food: ["Xiaolongbao making kit", "Vietnamese ingredients", "Taiwanese specialty foods", "Cooking classes"],
      experiences: ["Food tours", "Cultural events", "Photography sessions", "Spa day"],
      practical: ["Laptop accessories for studies", "Planner/organizer", "Language learning materials"]
    },
    forThien: {
      academic: ["AI/ML books", "Tech gadgets", "Programming tools", "Research equipment"],
      personal: ["Photography equipment", "Tech accessories", "Fitness tracker"],
      food: ["Cooking gadgets", "Vietnamese spices", "Kitchen tools", "Food photography equipment"],
      experiences: ["Tech conferences", "Coding bootcamps", "Photography workshops", "Gaming sessions"],
      practical: ["Productivity apps", "Research software", "Development tools", "Learning platforms"]
    }
  };
};

// Function to suggest date ideas based on their preferences and situation
export const getDateIdeas = () => {
  return {
    cooking: ["Try new Vietnamese recipes", "Learn Taiwanese dishes", "Baking together", "Food photography sessions"],
    academic: ["Study dates at library", "Attend campus events together", "Visit museums", "Educational workshops"],
    cultural: ["Explore Taiwanese culture", "Vietnamese community events", "Language exchange", "Cultural festivals"],
    food: ["Try new restaurants", "Food market exploration", "Cooking competitions", "Food delivery tastings"],
    outdoor: ["Campus walks", "Nearby hiking", "Photography trips", "Picnics in parks"],
    indoor: ["Movie nights", "Game nights", "Online learning together", "Virtual tours"],
    special: ["Celebrate academic achievements", "Cultural holiday celebrations", "Birthday surprises", "Milestone commemorations"]
  };
};