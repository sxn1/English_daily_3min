const store = require('../../utils/store');
const content = require('../../utils/content');

Page({
  data: {
    streak: 0,
    completedCount: 0,
    totalCards: 0,
    series: [],
    words: [],
    hitCount: 0,
    wordCount: 0
  },

  onShow() {
    const counts = store.getVocabulary();
    const cards = content.getAllCards();

    // 内容里的全部目标词（卡片循环使用，所以这就是完整词表）
    const allWords = [];
    cards.forEach((card) => {
      card.targetWords.forEach((word) => {
        if (allWords.indexOf(word) === -1) allWords.push(word);
      });
    });

    const words = allWords.map((word) => ({
      word,
      count: counts[word] || 0,
      hit: !!counts[word]
    }));

    this.setData({
      streak: store.getStreak(),
      completedCount: store.getCompletedCount(),
      totalCards: cards.length,
      series: store.getRecentSeries(30),
      words,
      hitCount: words.filter((w) => w.hit).length,
      wordCount: words.length
    });
  }
});
