#!/usr/bin/env node
/**
 * 生成卡片模块：`npm run build:cards`
 *
 * 读 miniprogram/content/cards/d*.json，生成同目录的 index.js。
 * 改了任何一张卡片都要重新跑一次，否则小程序加载的还是旧数据。
 * `npm run validate` 会检查有没有忘记重新生成。
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderCardsJs, sortCards } from './card-bundle.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cardsDir = join(root, 'miniprogram/content/cards');

export function loadCards() {
  const files = readdirSync(cardsDir)
    .filter((name) => /^d\d{3}\.json$/.test(name))
    .sort();
  const cards = files.map((name) => JSON.parse(readFileSync(join(cardsDir, name), 'utf8')));
  return sortCards(cards);
}

const cards = loadCards();
writeFileSync(join(cardsDir, 'index.js'), renderCardsJs(cards), 'utf8');
console.log(`已生成 miniprogram/content/cards/index.js（${cards.length} 张卡）`);
