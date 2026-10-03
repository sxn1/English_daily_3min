#!/usr/bin/env node
/**
 * 内容校验：`npm run validate`
 *
 * 卡片是产品资产，不是代码。资产一旦有了结构性错误，小程序会在真机上白屏，
 * 所以把校验做成一条命令，编辑完内容就跑一次。
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderCardsJs, sortCards } from './card-bundle.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cardsDir = join(root, 'miniprogram/content/cards');
const indexPath = join(cardsDir, 'index.js');

const errors = [];
const warnings = [];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

const files = readdirSync(cardsDir)
  .filter((name) => /^d\d{3}\.json$/.test(name))
  .sort();

if (!files.length) {
  fail('cards/', '没有找到任何卡片文件');
}

const cards = files.map((name) => {
  const raw = readFileSync(join(cardsDir, name), 'utf8');
  try {
    return { name, card: JSON.parse(raw) };
  } catch (err) {
    fail(name, `不是合法 JSON — ${err.message}`);
    return { name, card: null };
  }
});

const required = [
  'id',
  'day',
  'targetAgeMonths',
  'theme',
  'themeZh',
  'focusChunk',
  'focusChunkZh',
  'targetWords',
  'parentScriptZh',
  'audio',
  'offlineActivity',
  'durationSec',
  'parentChecks'
];

const seenIds = new Set();
const seenDays = new Set();
const vocabulary = new Set();

cards.forEach(({ name, card }, i) => {
  if (!card) return;

  required.forEach((key) => {
    if (card[key] === undefined) fail(name, `缺少必填字段 ${key}`);
  });

  if (card.id && card.id !== name.replace(/\.json$/, '')) {
    fail(name, `id (${card.id}) 应该和文件名一致`);
  }
  if (card.id !== undefined && !/^d\d{3}$/.test(String(card.id))) {
    fail(name, `id 必须形如 d001`);
  }
  if (seenIds.has(card.id)) fail(name, `id 重复：${card.id}`);
  seenIds.add(card.id);

  if (card.day !== i + 1) {
    fail(name, `day 应该是 ${i + 1}，实际是 ${card.day}（必须从 1 连续递增）`);
  }
  if (seenDays.has(card.day)) fail(name, `day 重复：${card.day}`);
  seenDays.add(card.day);

  if (!Number.isInteger(card.targetAgeMonths) || card.targetAgeMonths < 18 || card.targetAgeMonths > 36) {
    fail(name, 'targetAgeMonths 必须在 18-36 之间');
  }

  if (!Array.isArray(card.targetWords) || card.targetWords.length < 1 || card.targetWords.length > 6) {
    fail(name, 'targetWords 必须是 1-6 个词的数组');
  } else {
    card.targetWords.forEach((word) => {
      if (typeof word !== 'string' || !word.trim()) fail(name, 'targetWords 里有空值');
      else vocabulary.add(word);
    });
  }

  if (!card.audio || typeof card.audio !== 'object') {
    fail(name, 'audio 必须是对象');
  } else {
    ['model', 'song'].forEach((key) => {
      const value = card.audio[key];
      if (value === undefined) fail(name, `audio.${key} 缺失（没有录音就填 null）`);
      else if (value !== null && typeof value !== 'string') fail(name, `audio.${key} 必须是字符串或 null`);
      else if (value === null) warnings.push(`${name}: audio.${key} 还没有录音`);
      else if (card.id) {
        // 卡片里只写文件名，路径前缀由 config.js 的 audioBase 决定，
        // 否则接 CDN 时会拼出 .../audio/content/audio/xxx.mp3 这种重复路径。
        const allowed = [`${card.id}-${key}.mp3`, `${card.id}-${key}.m4a`];
        if (!allowed.includes(value)) {
          fail(name, `audio.${key} 应该只是文件名 "${allowed[0]}"，实际是 "${value}"`);
        }
      }
    });
  }

  if (!Array.isArray(card.offlineActivity) || card.offlineActivity.length < 2 || card.offlineActivity.length > 4) {
    fail(name, 'offlineActivity 必须是 2-4 项（离屏活动是产品本体，不能省）');
  } else {
    card.offlineActivity.forEach((item, idx) => {
      if (!item || typeof item.en !== 'string' || typeof item.zh !== 'string') {
        fail(name, `offlineActivity[${idx}] 需要 en 和 zh 两个字符串`);
      }
    });
  }

  if (!Number.isInteger(card.durationSec) || card.durationSec < 60 || card.durationSec > 600) {
    fail(name, 'durationSec 必须在 60-600 秒之间');
  } else if (card.durationSec > 300) {
    warnings.push(`${name}: durationSec 超过 5 分钟，2 岁注意力撑不住`);
  }

  if (!Array.isArray(card.parentChecks) || !card.parentChecks.length) {
    fail(name, 'parentChecks 不能为空');
  } else if (Array.isArray(card.targetWords)) {
    card.parentChecks.forEach((word) => {
      if (!card.targetWords.includes(word)) {
        fail(name, `parentChecks 里的 "${word}" 不在 targetWords 中（观察清单只能来自今天的目标词）`);
      }
    });
  }

  if (typeof card.parentScriptZh !== 'string' || card.parentScriptZh.length < 20) {
    fail(name, 'parentScriptZh 太短，家长拿不到可执行的动作说明');
  }
});

// index.js 必须和 JSON 源文件保持同步。
// 小程序打包器不支持 require('xxx.json')，所以卡片是被内联进 index.js 的，
// 改了 JSON 却忘记重新生成，小程序加载的就是旧数据，而且不会报错。
const expectedIndex = renderCardsJs(
  sortCards(cards.filter((entry) => entry.card).map((entry) => entry.card))
);
if (readFileSync(indexPath, 'utf8') !== expectedIndex) {
  fail('cards/index.js', '和 d*.json 不同步，跑一下 `npm run build:cards`');
}

// 语块必须是短语，不是孤立的单词
cards.forEach(({ name, card }) => {
  if (card && typeof card.focusChunk === 'string' && !card.focusChunk.includes(' ')) {
    warnings.push(`${name}: focusChunk "${card.focusChunk}" 只有一个词，2 岁更适合记整块短语`);
  }
});

console.log(`卡片：${files.length} 张`);
console.log(`目标词：${vocabulary.size} 个`);

if (warnings.length) {
  console.log(`\n提醒（不影响运行，${warnings.length} 条）：`);
  warnings.forEach((w) => console.log(`  · ${w}`));
}

if (errors.length) {
  console.error(`\n错误（${errors.length} 条）：`);
  errors.forEach((e) => console.error(`  · ${e}`));
  process.exit(1);
}

console.log('\n内容校验通过。');
