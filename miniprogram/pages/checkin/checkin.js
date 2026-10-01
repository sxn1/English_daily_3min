const store = require('../../utils/store');
const content = require('../../utils/content');
const subscribe = require('../../utils/subscribe');

Page({
  data: {
    day: 1,
    card: null,
    checks: [],
    selected: {},
    pickedCount: 0
  },

  onLoad(query) {
    const day = Number(query.day) || store.getDayNumber();
    const card = content.getCardByDay(day);
    if (!card) return;
    const selected = {};
    card.parentChecks.forEach((word) => {
      selected[word] = false;
    });
    this.setData({ day, card, checks: card.parentChecks, selected });
  },

  onToggle(e) {
    const word = e.currentTarget.dataset.word;
    const selected = Object.assign({}, this.data.selected);
    selected[word] = !selected[word];
    this.setData({
      selected,
      pickedCount: this.data.checks.filter((w) => selected[w]).length
    });
  },

  onSave() {
    const picked = this.data.checks.filter((w) => this.data.selected[w]);
    store.completeDay(this.data.day, this.data.card.id, picked);
    subscribe.requestDailyReminder().then(() => {
      wx.showToast({ title: '已记录', icon: 'success' });
      setTimeout(() => this.leave(), 700);
    });
  },

  leave() {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      wx.navigateBack();
    } else {
      wx.reLaunch({ url: '/pages/today/today' });
    }
  }
});
