const config = require('../config');

/**
 * 每天一次的轻提醒，是这类产品留存的命脉。
 * 文案不要写成「该学习了」，要说「今天的 3 分钟已经准备好了」。
 * 未配置模板 ID 时静默跳过，不打扰家长。
 */
function requestDailyReminder() {
  const templateId = config.subscribeTemplateId;
  if (!templateId) return Promise.resolve({ skipped: true });
  return new Promise((resolve) => {
    wx.requestSubscribeMessage({
      tmplIds: [templateId],
      success: (res) => resolve(res),
      fail: (err) => resolve({ failed: err })
    });
  });
}

module.exports = { requestDailyReminder };
