#!/usr/bin/env node
/**
 * 生成录音清单：`npm run recording-script`
 *
 * 从卡片直接生成，保证清单里的文件名和朗读内容和代码读的是同一份数据。
 * 加完新卡跑一次，不用手工对照文件名。
 */

import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const cards = require(join(root, 'miniprogram/content/cards/index.js'));

const out = [];

out.push('# 录音清单');
out.push('');
out.push('> 这个文件由 `npm run recording-script` 从卡片自动生成，不要手动编辑。');
out.push('');
out.push(
  `一共 **${cards.length * 2} 个文件**。命名必须和下面完全一致：全小写、连字符、mp3 后缀。改错一个字母，小程序就找不到文件。`
);
out.push('');
out.push('录音的通用要求见 `miniprogram/content/audio/README.md`。核心三条：真人录音不要 TTS、慢速、词与词之间留空档。');
out.push('');
out.push('> 音频角色提醒：这些音频是**给家长听的发音示范**，不是放给孩子听的内容。目标是让家长听清楚怎么念，然后他自己去跟孩子说。');
out.push('');

out.push('## 总览');
out.push('');
out.push('| 文件名 | 内容 |');
out.push('| --- | --- |');
for (const card of cards) {
  out.push(`| \`${card.id}-model.mp3\` | ${card.themeZh} · 示范朗读 |`);
  out.push(`| \`${card.id}-song.mp3\` | ${card.themeZh} · 短歌 |`);
}
out.push('');
out.push(`总共 ${cards.length * 2} 个文件，全部放在 \`miniprogram/content/audio/\` 下。`);
out.push('');
out.push('---');
out.push('');

for (const card of cards) {
  out.push(`## ${card.id} · ${card.themeZh}`);
  out.push('');
  out.push(`第 ${card.day} 天 · 目标词 ${card.targetWords.map((w) => `\`${w}\``).join('、')}`);
  out.push('');

  out.push(`### 1. \`${card.id}-model.mp3\` — 示范朗读`);
  out.push('');
  out.push('**第一步，目标词。每个词之间停 1 秒，各读两遍。**');
  out.push('');
  out.push('```');
  for (const word of card.targetWords) {
    out.push(`${word}   （停 1 秒）`);
    out.push(`${word}   （停 1 秒）`);
  }
  out.push('```');
  out.push('');
  out.push('**第二步，核心语块。慢速读两遍，两遍之间停 2 秒，留出孩子回应的空档。**');
  out.push('');
  out.push('```');
  out.push(`${card.focusChunk}`);
  out.push('（停 2 秒）');
  out.push(`${card.focusChunk}`);
  out.push('```');
  out.push('');
  out.push('**第三步，三个活动句，各读一遍，句间停 1.5 秒。**');
  out.push('');
  out.push('```');
  for (const item of card.offlineActivity) {
    out.push(`${item.en}   （停 1.5 秒）   ${item.zh}`);
  }
  out.push('```');
  out.push('');
  out.push('整段目标时长 25-40 秒。语速比平常说话慢三分之一，语调要夸张一点。');
  out.push('');

  out.push(`### 2. \`${card.id}-song.mp3\` — 短歌`);
  out.push('');
  out.push('歌词就是把核心语块重复几遍，旋律越简单越好，家长听两遍就能自己哼出来。');
  out.push('');
  out.push('```');
  out.push(`${card.focusChunk}, ${card.focusChunk},`);
  out.push(`${card.focusChunk}, ${card.focusChunk},`);
  out.push(`${card.focusChunk}!`);
  out.push('```');
  out.push('');
  out.push('目标时长 15-30 秒。只保留人声加简单伴奏，不要盖过歌词。');
  out.push('');
  out.push('---');
  out.push('');
}

out.push('## 录完之后');
out.push('');
out.push('1. 14 个 mp3 全部放进 `miniprogram/content/audio/`。');
out.push('2. 在微信开发者工具里点「播放示范」，确认有声音。');
out.push('3. 跑 `npm run validate` 确认卡片没问题。');
out.push('');
out.push('注意：小程序主包上限 2MB，14 个音频放不进正式包。这套本地文件只用于试听。');
out.push('正式发布要把音频传到 CDN，改 `miniprogram/config.js` 的 `audioBase`，卡片不需要改。');
out.push('');

const target = join(root, 'docs/recording-script.md');
writeFileSync(target, out.join('\n'), 'utf8');
console.log(`已生成 docs/recording-script.md（${cards.length * 2} 个文件）`);
