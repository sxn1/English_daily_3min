const content = require('../../utils/content');
const player = require('../../utils/player');

function format(seconds) {
  const s = Math.max(0, seconds);
  const m = Math.floor(s / 60);
  const rest = s % 60;
  return `${m < 10 ? '0' : ''}${m}:${rest < 10 ? '0' : ''}${rest}`;
}

Page({
  data: {
    day: 1,
    card: null,
    mode: 'prepare',
    playing: '',
    audioMissing: {},
    remaining: 180,
    remainingLabel: '03:00'
  },

  onLoad(query) {
    const day = Number(query.day) || 1;
    const card = content.getCardByDay(day);
    if (!card) return;
    this.setData({
      day,
      card: Object.assign({}, card, { durationLabel: content.durationLabel(card.durationSec) }),
      remaining: card.durationSec,
      remainingLabel: format(card.durationSec)
    });
  },

  onUnload() {
    this.clearTimer();
    player.stop();
    wx.setKeepScreenOn({ keepScreenOn: false });
  },

  onHide() {
    player.stop();
    this.clearTimer();
  },

  onShow() {
    // 计时是挂钟计时，切后台再回来不会跑偏，所以这里只需要恢复刷新
    if (this.data.mode === 'timer' && this._endAt) {
      this.startTicking();
    }
  },

  playAudio(kind) {
    const card = this.data.card;
    if (!card) return;
    this.setData({ playing: kind });
    player.play(card.audio[kind], {
      onEnded: () => this.setData({ playing: '' }),
      onError: () => {
        this.setData({ playing: '' });
        this.setData({ [`audioMissing.${kind}`]: true });
      }
    });
  },

  onPlayModel() {
    this.playAudio('model');
  },

  onPlaySong() {
    this.playAudio('song');
  },

  /** 进入「手机放下」的计时模式。这是整个产品最想让你做的一件事。 */
  onStartTimer() {
    player.stop();
    const seconds = this.data.card.durationSec;
    this._endAt = Date.now() + seconds * 1000;
    this.setData({
      mode: 'timer',
      playing: '',
      remaining: seconds,
      remainingLabel: format(seconds)
    });
    wx.setKeepScreenOn({ keepScreenOn: true });
    this.startTicking();
  },

  /**
   * 用结束时间戳算剩余，而不是每秒累减。
   * 累减在小程序切到后台时会被节流，家长回来会发现「3 分钟」实际过了更久。
   */
  tick() {
    if (!this._endAt) return;
    const remaining = Math.max(0, Math.round((this._endAt - Date.now()) / 1000));
    if (remaining <= 0) {
      this.clearTimer();
      this._endAt = null;
      wx.setKeepScreenOn({ keepScreenOn: false });
      wx.vibrateShort({ type: 'medium', fail: () => {} });
      this.setData({ remaining: 0, remainingLabel: '00:00' });
      this.goCheckin();
      return;
    }
    if (remaining !== this.data.remaining) {
      this.setData({ remaining, remainingLabel: format(remaining) });
    }
  },

  onFinishEarly() {
    this.clearTimer();
    this._endAt = null;
    wx.setKeepScreenOn({ keepScreenOn: false });
    this.goCheckin();
  },

  goCheckin() {
    wx.redirectTo({ url: `/pages/checkin/checkin?day=${this.data.day}` });
  },

  startTicking() {
    this.clearTimer();
    this._timer = setInterval(() => this.tick(), 500);
  },

  clearTimer() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
});
