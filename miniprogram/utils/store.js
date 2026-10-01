/**
 * 进度存储。
 * MVP 阶段只存在本机（wx.setStorageSync），不做账号、不上传。
 * 这样既省掉后端，也直接绕开儿童个人信息的合规负担。
 */

const STORAGE_KEY = 'daily3min.progress.v1';
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function dateKey(date) {
  const d = date || new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function todayKey() {
  return dateKey();
}

function parseKey(key) {
  const parts = String(key).split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
}

function shiftKey(key, deltaDays) {
  return dateKey(new Date(parseKey(key) + deltaDays * MS_PER_DAY));
}

function read() {
  try {
    return wx.getStorageSync(STORAGE_KEY) || null;
  } catch (err) {
    return null;
  }
}

function write(state) {
  try {
    wx.setStorageSync(STORAGE_KEY, state);
  } catch (err) {
    // 存储写失败不应该阻塞家长完成今天的内容。
  }
}

function freshState() {
  return { startDate: todayKey(), createdAt: Date.now(), records: {} };
}

function ensureInit() {
  let state = read();
  if (!state || !state.records || !state.startDate) {
    state = freshState();
    write(state);
  }
  return state;
}

function getState() {
  return ensureInit();
}

/** 第几天，从 1 开始。 */
function getDayNumber() {
  const state = getState();
  const diff = Math.round((parseKey(todayKey()) - parseKey(state.startDate)) / MS_PER_DAY);
  return diff + 1;
}

function getRecord(day) {
  return getState().records[String(day)] || null;
}

function hasCompletedToday() {
  return !!getRecord(getDayNumber());
}

function completeDay(day, cardId, checks) {
  const state = getState();
  const record = {
    day,
    cardId,
    date: todayKey(),
    checks: checks || [],
    completedAt: Date.now()
  };
  state.records[String(day)] = record;
  write(state);
  return record;
}

/** 连续天数：从今天（或昨天）往前数连续完成的天数。 */
function getStreak() {
  const state = getState();
  const done = new Set(Object.keys(state.records).map((k) => state.records[k].date));
  let cursor = todayKey();
  if (!done.has(cursor)) {
    cursor = shiftKey(cursor, -1);
    if (!done.has(cursor)) return 0;
  }
  let streak = 0;
  while (done.has(cursor)) {
    streak += 1;
    cursor = shiftKey(cursor, -1);
  }
  return streak;
}

function getCompletedCount() {
  return Object.keys(getState().records).length;
}

/** 近 N 天的完成情况，用于趋势条。 */
function getRecentSeries(days) {
  const total = days || 30;
  const state = getState();
  const done = new Set(Object.keys(state.records).map((k) => state.records[k].date));
  const series = [];
  for (let i = total - 1; i >= 0; i -= 1) {
    const key = shiftKey(todayKey(), -i);
    series.push({
      date: key,
      label: String(Number(key.slice(8, 10))),
      done: done.has(key)
    });
  }
  return series;
}

/** 家长勾选过的词 → 出现次数。这是本产品唯一「学习效果」指标。 */
function getVocabulary() {
  const state = getState();
  const counts = {};
  Object.keys(state.records).forEach((k) => {
    (state.records[k].checks || []).forEach((word) => {
      counts[word] = (counts[word] || 0) + 1;
    });
  });
  return counts;
}

function reset() {
  write(freshState());
}

module.exports = {
  ensureInit,
  getState,
  getDayNumber,
  getRecord,
  hasCompletedToday,
  completeDay,
  getStreak,
  getCompletedCount,
  getRecentSeries,
  getVocabulary,
  reset,
  todayKey
};
