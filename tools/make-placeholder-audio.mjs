#!/usr/bin/env node
/**
 * 生成占位音频：`npm run make-placeholder-audio`
 *
 * ⚠️ 这些文件不是成品，是占位。
 *
 * 用途只有两个：
 *   1. 让小程序里有声音，能验证「点播放 → 出声 → 走完流程」这条链路
 *   2. 让开发者先听一遍内容大概是什么样
 *
 * 为什么不能当成品：
 *   - 产品文档里写了不能用 TTS。2 岁靠韵律习得语音，机器合成的韵律不自然，
 *     孩子从中学不到东西，产品就降级成背景噪音。
 *   - 更直接的原因是：这个音频是给家长听的发音样本，家长会照着它学。
 *     机器音会让家长学到不自然的语调。
 *   - 这里用的是 translate.google.com 的公开朗读端点，属于非官方接口，
 *     拿来做正式产品的内容来源不合适。
 *
 * 正式内容必须真人录音，规格见 miniprogram/content/audio/README.md。
 * 录好之后删掉这些占位文件，或者用 --force 之外的方式覆盖。
 *
 * 依赖：curl（走系统代理，Windows/Mac 自带）
 */

import { execFileSync } from 'node:child_process';
import { existsSync, statSync, mkdirSync, copyFileSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCards } from './build-cards.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
/** 全部音频，用于上传 CDN。不在小程序包内。 */
const fullDir = join(root, 'assets/audio');
/** 打进小程序包的部分，只够试听。 */
const pkgDir = join(root, 'miniprogram/content/audio');

/**
 * 包内音频的字节预算。
 * 小程序主包上限 2MB，代码本身约 0.3MB，留一点余量。
 * 超出的部分不能进包，否则开发者工具直接报代码包超限。
 */
const PACKAGE_BUDGET = 1000 * 1024;

const force = process.argv.includes('--force');
const only = process.argv.find((a) => /^--only=d\d{3}$/.test(a));
const onlyId = only ? only.split('=')[1] : null;

mkdirSync(fullDir, { recursive: true });
mkdirSync(pkgDir, { recursive: true });

const ENDPOINT = 'https://translate.google.com/translate_tts';

function speak(text, outPath, speed) {
  const url = `${ENDPOINT}?ie=UTF-8&tl=en&client=tw-ob&ttsspeed=${speed}`;
  execFileSync(
    'curl',
    ['-sS', '-m', '40', '-o', outPath, '-A', 'Mozilla/5.0', '--get', '--data-urlencode', `q=${text}`, url],
    { stdio: ['ignore', 'ignore', 'pipe'] }
  );
  if (!existsSync(outPath) || statSync(outPath).size < 2000) {
    throw new Error(`生成的音频太小或为空：${outPath}`);
  }
}

/** 示范朗读：目标词各两遍 → 核心语块两遍 → 三个活动句。用句号制造停顿。 */
function modelText(card) {
  const words = card.targetWords.flatMap((w) => [w, w]).join('. ');
  const chunk = [card.focusChunk, card.focusChunk].join('. ');
  const acts = card.offlineActivity.map((a) => a.en).join('. ');
  return `${words}. ${chunk}. ${acts}.`;
}

/** 短歌占位：核心语块重复四遍。注意这没有旋律，只是个重复朗读。 */
function songText(card) {
  return Array(4).fill(card.focusChunk).join(', ') + '!';
}

const cards = loadCards().filter((c) => !onlyId || c.id === onlyId);
let made = 0;
let skipped = 0;
const failed = [];

for (const card of cards) {
  const jobs = [
    { file: `${card.id}-model.mp3`, text: modelText(card), speed: '0.24' },
    { file: `${card.id}-song.mp3`, text: songText(card), speed: '0.7' }
  ];

  for (const job of jobs) {
    const out = join(fullDir, job.file);
    if (existsSync(out) && !force) {
      skipped += 1;
      continue;
    }
    try {
      speak(job.text, out, job.speed);
      const kb = Math.round(statSync(out).size / 1024);
      made += 1;
      console.log(`  ${job.file.padEnd(18)} ${String(kb).padStart(4)} KB`);
    } catch (err) {
      failed.push(`${job.file}: ${err.message}`);
    }
  }
}

console.log(`\n生成 ${made} 个，跳过 ${skipped} 个，失败 ${failed.length} 个`);
if (failed.length) {
  console.error('\n失败：');
  failed.forEach((f) => console.error(`  · ${f}`));
  process.exit(1);
}

// ---- 把预算内的音频复制进小程序包 ----
// 包内只留一部分，因为主包上限 2MB。其余的等接 CDN 时从 assets/audio 上传。
for (const f of readdirSync(pkgDir)) {
  if (f.endsWith('.mp3')) rmSync(join(pkgDir, f));
}

let used = 0;
let copied = 0;
for (const card of cards) {
  for (const file of [`${card.id}-model.mp3`, `${card.id}-song.mp3`]) {
    const src = join(fullDir, file);
    if (!existsSync(src)) continue;
    const size = statSync(src).size;
    if (used + size > PACKAGE_BUDGET) continue;
    copyFileSync(src, join(pkgDir, file));
    used += size;
    copied += 1;
  }
}

console.log(`\n包内试听音频：${copied} 个，${(used / 1024 / 1024).toFixed(2)} MB（预算 ${(PACKAGE_BUDGET / 1024 / 1024).toFixed(1)} MB）`);
console.log(`全部音频（给 CDN）：${cards.length * 2} 个，在 assets/audio/`);

console.log('\n⚠️ 这些是占位音频，不是成品。');
console.log('   真人录音的要求见 miniprogram/content/audio/README.md');
