#!/usr/bin/env node
/**
 * 静态检查小程序页面装配：`npm run check`
 *
 * 在没有微信开发者工具的环境（比如 Linux）里，这是最接近「能不能跑起来」的检查。
 * 覆盖三类最容易导致白屏的问题：
 *   1. app.json 里登记的页面，四个文件是否齐全
 *   2. WXML 里绑定的事件处理函数，JS 里是否存在
 *   3. 页面跳转的目标路径，是否在 app.json 里登记过
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mp = join(root, 'miniprogram');

const errors = [];
const warnings = [];

const appJson = JSON.parse(readFileSync(join(mp, 'app.json'), 'utf8'));
const pages = appJson.pages || [];

// ---- 1. 页面文件是否齐全 ----
for (const page of pages) {
  for (const ext of ['js', 'json', 'wxml', 'wxss']) {
    const file = join(mp, `${page}.${ext}`);
    if (!existsSync(file)) errors.push(`缺少页面文件：miniprogram/${page}.${ext}`);
  }
}

// ---- 2 & 3. 逐页检查 ----
const registered = new Set(pages.map((p) => `/${p}`));

for (const page of pages) {
  const wxmlPath = join(mp, `${page}.wxml`);
  const jsPath = join(mp, `${page}.js`);
  if (!existsSync(wxmlPath) || !existsSync(jsPath)) continue;

  const wxml = readFileSync(wxmlPath, 'utf8');
  const js = readFileSync(jsPath, 'utf8');

  // 2. 事件处理函数
  const handlers = new Set();
  for (const m of wxml.matchAll(/\b(?:bind|catch)[:a-zA-Z]*="([A-Za-z_$][\w$]*)"/g)) {
    handlers.add(m[1]);
  }
  for (const name of handlers) {
    const defined = new RegExp(`(^|[^\\w$.])${name}\\s*\\(`, 'm').test(js);
    if (!defined) {
      errors.push(`${page}.wxml 绑定了 ${name}，但 ${page}.js 里没有这个方法`);
    }
  }

  // 3. 跳转目标是否登记过
  for (const m of js.matchAll(/(?:navigateTo|redirectTo|reLaunch|switchTab)\s*\(\s*\{\s*url:\s*[`'"]([^`'"$]*)/g)) {
    const url = m[1].split('?')[0];
    if (!registered.has(url)) {
      errors.push(`${page}.js 跳转到 ${url}，但 app.json 的 pages 里没有登记`);
    }
  }

  // 4. wx:for 是否带 wx:key（只是提醒，缺了会掉性能）
  const forCount = (wxml.match(/wx:for=/g) || []).length;
  const keyCount = (wxml.match(/wx:key=/g) || []).length;
  if (keyCount < forCount) {
    warnings.push(`${page}.wxml 有 ${forCount} 个 wx:for，只配了 ${keyCount} 个 wx:key`);
  }

  // 5. 标签配对（忽略自闭合和 block）
  const stack = [];
  const voidTags = new Set(['image', 'input', 'icon', 'progress', 'import', 'include', 'wxs', 'open-data', 'canvas']);
  for (const m of wxml.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g)) {
    const [, closing, tag, attrs, selfClose] = m;
    if (voidTags.has(tag) || selfClose) continue;
    if (closing) {
      const last = stack.pop();
      if (last !== tag) {
        errors.push(`${page}.wxml 标签不配对：</${tag}> 对应的是 <${last || '空'}>`);
        break;
      }
    } else {
      stack.push(tag);
    }
  }
  if (stack.length) {
    errors.push(`${page}.wxml 有未闭合的标签：${stack.join(' > ')}`);
  }
}

// ---- 输出 ----
console.log(`检查页面：${pages.length} 个`);
console.log(pages.map((p) => `  ${p}`).join('\n'));

if (warnings.length) {
  console.log(`\n提醒（${warnings.length} 条）：`);
  warnings.forEach((w) => console.log(`  · ${w}`));
}

if (errors.length) {
  console.error(`\n错误（${errors.length} 条）：`);
  errors.forEach((e) => console.error(`  · ${e}`));
  process.exit(1);
}

console.log('\n页面装配检查通过。');
console.log('注意：这不能替代真机验证。WXSS 样式、实际渲染效果、音频播放仍需微信开发者工具。');
