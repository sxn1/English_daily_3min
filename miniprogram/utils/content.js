/**
 * 内容读取。卡片是产品真正的资产，代码只是它的播放器。
 */

const cards = require('../content/cards/index');

function getAllCards() {
  return cards;
}

/**
 * 按「第 N 天」取卡。内容放完后循环，保证任何一天打开都不是空白页。
 * 循环是刻意的：2 岁本来就需要同一批词反复出现。
 */
function getCardByDay(day) {
  const list = getAllCards();
  if (!list.length) return null;
  const index = ((day - 1) % list.length + list.length) % list.length;
  return list[index];
}

function durationLabel(seconds) {
  const minutes = Math.max(1, Math.round((seconds || 180) / 60));
  return `${minutes} 分钟`;
}

module.exports = { getAllCards, getCardByDay, durationLabel };
