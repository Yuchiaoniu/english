window.UNIT_DATA = {
  id: 8,
  title: "What's the Weather?",
  vocabulary: [
    { word: "sunny",    zh: "晴天",   zhuyin: "ㄑㄧㄥˊ ㄊㄧㄢ",    emoji: "☀️" },
    { word: "rainy",    zh: "下雨",   zhuyin: "ㄒㄧㄚˋ ㄩˇ",       emoji: "🌧️" },
    { word: "cloudy",   zh: "陰天",   zhuyin: "ㄧㄣ ㄊㄧㄢ",       emoji: "☁️" },
    { word: "windy",    zh: "刮風",   zhuyin: "ㄍㄨㄚ ㄈㄥ",       emoji: "💨" },
    { word: "cold",     zh: "冷",     zhuyin: "ㄌㄥˇ",             emoji: "🥶" },
    { word: "hot",      zh: "熱",     zhuyin: "ㄖㄜˋ",             emoji: "🥵" },
    { word: "umbrella", zh: "雨傘",   zhuyin: "ㄩˇ ㄙㄢˇ",         emoji: "☂️" },
    { word: "coat",     zh: "外套",   zhuyin: "ㄨㄞˋ ㄊㄠˋ",       emoji: "🧥" },
  ],
  patterns: [
    {
      structure: "What's the weather like today? It's <u>___</u>.",
      zh: "今天天氣怎麼樣？今天___。",
      examples: [
        { en: "It's sunny.", zh: "今天晴天。" },
        { en: "It's rainy.", zh: "今天下雨。" },
      ],
      practice: {
        sentence: "It's ___.",
        options: ["cloudy", "happy", "family"],
        answer: 0,
      },
    },
    {
      structure: "You should bring a <u>___</u>.",
      zh: "你應該帶___。",
      examples: [
        { en: "It's cold. You should wear a coat.",       zh: "天氣冷。你應該穿外套。" },
        { en: "It's rainy. You should bring an umbrella.", zh: "下雨。你應該帶雨傘。" },
      ],
      practice: {
        sentence: "You should bring an ___.",
        options: ["umbrella", "pencil", "fish"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Dad", en: "Good morning! What's the weather like today?", zh: "早安！今天天氣怎麼樣？", keywords: [] },
    { role: "B", name: "Eva", en: "It's cloudy and windy. I think it will rain.", zh: "今天陰天又刮風。我覺得會下雨。", keywords: ["cloudy", "windy"] },
    { role: "A", name: "Dad", en: "Then you should bring an umbrella.", zh: "那你應該帶雨傘。", keywords: ["umbrella"] },
    { role: "B", name: "Eva", en: "OK! It's also cold. Should I wear my coat?", zh: "好的！也很冷。我要穿外套嗎？", keywords: ["cold", "coat"] },
    { role: "A", name: "Dad", en: "Yes! And have a good day at school!", zh: "要！上學愉快！", keywords: [] },
    { role: "B", name: "Eva", en: "Thank you, Dad! Goodbye!", zh: "謝謝爸爸！再見！", keywords: [] },
  ],
  quiz: [
    { question: "「It's sunny.」是什麼意思？", options: ["今天下雨", "今天晴天", "今天陰天", "今天刮風"], answer: 1 },
    { question: "下雨天要帶什麼？", options: ["coat", "hat", "umbrella", "shoes"], answer: 2 },
    { question: "Which word means 冷?", options: ["hot", "windy", "cloudy", "cold"], answer: 3 },
    { question: "對話中今天的天氣是？", options: ["晴天又熱", "下雨又冷", "陰天又刮風", "晴天又刮風"], answer: 2 },
    { question: "Which word means 外套?", options: ["umbrella", "shoes", "hat", "coat"], answer: 3 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "天氣形容詞結尾 -y：sunny, rainy, cloudy, windy",
        "hot / cold 用於描述溫度",
        "可結合當天實際天氣練習",
      ],
      commonErrors: ["umbrella 的重音在第二音節 /ʌmˈbrɛlə/"],
      prompts: ["今天天氣怎麼樣？", "你喜歡晴天還是下雨天？", "現在外面熱還是冷？"],
    },
    patterns: {
      keyPoints: [
        "What's the weather like? 是常見的開場句",
        "You should ___ 給建議，後接動詞原形",
      ],
      commonErrors: ["should 後直接接原形動詞，不加 to：should wear（非 should to wear）"],
      prompts: ["用 It's ___ 描述今天天氣。", "如果下雨，我應該帶什麼？用 You should bring ___ 提醒我。"],
    },
    dialogue: {
      keyPoints: [
        "讓學生扮演 Eva，描述今天的天氣",
        "I think it will rain 預測句型可帶過",
      ],
      commonErrors: ["bring 和 wear 的差別：bring 帶（攜帶）、wear 穿戴"],
      prompts: ["對話中今天天氣怎麼樣？", "Eva 為什麼要帶雨傘？", "你今天穿外套了嗎？為什麼？"],
    },
    quiz: {
      keyPoints: ["第 4 題回想對話：cloudy + windy"],
      prompts: ["第 4 題提示：Eva 一開始說 It's ___ and ___"],
    },
  },
};
