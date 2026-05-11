window.UNIT_DATA = {
  id: 4,
  title: "I'm Hungry!",
  vocabulary: [
    { word: "apple",  zh: "蘋果",   zhuyin: "ㄆㄧㄥˊ ㄍㄨㄛˇ",   emoji: "🍎" },
    { word: "banana", zh: "香蕉",   zhuyin: "ㄒㄧㄤ ㄐㄧㄠ",     emoji: "🍌" },
    { word: "rice",   zh: "飯",     zhuyin: "ㄈㄢˋ",             emoji: "🍚" },
    { word: "milk",   zh: "牛奶",   zhuyin: "ㄋㄧㄡˊ ㄋㄞˇ",     emoji: "🥛" },
    { word: "juice",  zh: "果汁",   zhuyin: "ㄍㄨㄛˇ ㄓ",        emoji: "🧃" },
    { word: "bread",  zh: "麵包",   zhuyin: "ㄇㄧㄢˋ ㄅㄠ",      emoji: "🍞" },
    { word: "egg",    zh: "雞蛋",   zhuyin: "ㄐㄧ ㄉㄢˋ",        emoji: "🥚" },
    { word: "water",  zh: "水",     zhuyin: "ㄕㄨㄟˇ",           emoji: "💧" },
  ],
  patterns: [
    {
      structure: "I like <u>___</u>.",
      zh: "我喜歡___。",
      examples: [
        { en: "I like apples.", zh: "我喜歡蘋果。" },
        { en: "I like milk.",   zh: "我喜歡牛奶。" },
      ],
      practice: {
        sentence: "I like ___.",
        options: ["bananas", "run", "happy"],
        answer: 0,
      },
    },
    {
      structure: "Do you want some <u>___</u>?",
      zh: "你想要一些___嗎？",
      examples: [
        { en: "Do you want some juice?", zh: "你想要一些果汁嗎？" },
        { en: "Do you want some bread?", zh: "你想要一些麵包嗎？" },
      ],
      practice: {
        sentence: "Do you want some ___?",
        options: ["water", "school", "name"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Mom",  en: "Are you hungry?", zh: "你餓了嗎？", keywords: [] },
    { role: "B", name: "Lisa", en: "Yes, I'm hungry!", zh: "是的，我餓了！", keywords: [] },
    { role: "A", name: "Mom",  en: "Do you want some bread and milk?", zh: "你想要麵包和牛奶嗎？", keywords: ["bread", "milk"] },
    { role: "B", name: "Lisa", en: "Yes, please! I also want an apple.", zh: "好的！我還想要一個蘋果。", keywords: ["apple"] },
    { role: "A", name: "Mom",  en: "Here you go. Do you like eggs?", zh: "給你。你喜歡雞蛋嗎？", keywords: ["egg"] },
    { role: "B", name: "Lisa", en: "Yes, I love eggs! Thank you, Mom!", zh: "喜歡！我很愛吃雞蛋！謝謝媽媽！", keywords: ["egg"] },
  ],
  quiz: [
    { question: "Which word means 牛奶?", options: ["juice", "water", "milk", "bread"], answer: 2 },
    { question: "「I'm hungry!」是什麼意思？", options: ["我很開心", "我很餓", "我很渴", "我很累"], answer: 1 },
    { question: "「Do you want some juice?」 果汁的英文是？", options: ["milk", "water", "bread", "juice"], answer: 3 },
    { question: "對話中 Lisa 想要哪三樣東西？", options: ["飯、水、香蕉", "麵包、牛奶、蘋果", "果汁、麵包、雞蛋", "蘋果、香蕉、水"], answer: 1 },
    { question: "「I love eggs!」是什麼意思？", options: ["我有雞蛋", "我不要雞蛋", "我很愛吃雞蛋", "這些是我的雞蛋"], answer: 2 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "可以用實物或圖片帶讀（午餐時間最容易應用）",
        "可數名詞如 apple, egg 通常加 s 變複數",
        "rice / milk / water 是不可數名詞，不加 s",
      ],
      commonErrors: ["bread 不要念成 /bri:d/，是 /brɛd/"],
      prompts: ["你的早餐吃了什麼？", "你最喜歡吃什麼水果？", "你喜歡喝牛奶還是果汁？"],
    },
    patterns: {
      keyPoints: [
        "I like ___ 用來表達喜好",
        "Do you want some ___? 是常見的詢問句型",
      ],
      commonErrors: ["I like apple. → 應該說 I like apples."],
      prompts: ["用 I like ___ 說三樣你喜歡的食物。", "問我：Do you want some ___?"],
    },
    dialogue: {
      keyPoints: [
        "可以練習 Yes, please / No, thank you 禮貌回應",
        "讓學生扮演 Lisa，練習說 I want an apple",
      ],
      commonErrors: ["I want a egg → 應該說 I want an egg"],
      prompts: ["Lisa 想吃什麼？", "Lisa 喜歡雞蛋嗎？", "你媽媽會問你 Are you hungry 嗎？"],
    },
    quiz: {
      keyPoints: ["第 4 題回想對話：bread, milk, apple"],
      prompts: ["第 4 題提示：Lisa 想要的三樣東西在對話中陸續出現"],
    },
  },
};
