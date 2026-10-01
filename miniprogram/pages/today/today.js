const store = require('../../utils/store');
const content = require('../../utils/content');

Page({
  data: {
    day: 1,
    card: null,
    completed: false,
    streak: 0,
    completedCount: 0,
    isReview: false
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const day = store.getDayNumber();
    const card = content.getCardByDay(day);
    if (!card) return;
    this.setData({
      day,
      card: Object.assign({}, card, { durationLabel: content.durationLabel(card.durationSec) }),
      completed: !!store.getRecord(day),
      streak: store.getStreak(),
      completedCount: store.getCompletedCount(),
      isReview: day > content.getAllCards().length
    });
  },

  onStart() {
    wx.navigateTo({ url: `/pages/play/play?day=${this.data.day}` });
  },

  onProgress() {
    wx.navigateTo({ url: '/pages/progress/progress' });
  }
});
