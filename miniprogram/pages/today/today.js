const store = require('../../utils/store');
const content = require('../../utils/content');
const config = require('../../config');

Page({
  data: {
    day: 1,
    card: null,
    completed: false,
    streak: 0,
    completedCount: 0,
    isReview: false,
    nextCard: null,
    allowSkipDay: false
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const day = store.getDayNumber();
    const card = content.getCardByDay(day);
    if (!card) return;
    const next = content.getCardByDay(day + 1);
    this.setData({
      day,
      card: Object.assign({}, card, { durationLabel: content.durationLabel(card.durationSec) }),
      completed: !!store.getRecord(day),
      streak: store.getStreak(),
      completedCount: store.getCompletedCount(),
      isReview: day > content.getAllCards().length,
      // 只预告主题，不剧透明天的内容 —— 留一点期待感
      nextCard: next ? { day: day + 1, themeZh: next.themeZh } : null,
      allowSkipDay: !!config.allowSkipDay
    });
  },

  onStart() {
    wx.navigateTo({ url: `/pages/play/play?day=${this.data.day}` });
  },

  onProgress() {
    wx.navigateTo({ url: '/pages/progress/progress' });
  },

  onSkipDay() {
    store.skipToNextDay();
    this.refresh();
    wx.showToast({ title: '已跳到下一天', icon: 'none' });
  }
});
