/**
 * 把卡片 JSON 渲染成一个 JS 模块。
 *
 * 为什么需要这一步：小程序打包器不支持 require('xxx.json')。它会把 require
 * 的参数一律按 .js 解析，于是去找 d001.json.js，然后报
 * 「module 'content/cards/d001.json.js' is not defined」。
 *
 * 所以 JSON 只作为编辑时的源文件，真正被小程序加载的是生成出来的 index.js。
 */

export function renderCardsJs(cards) {
  const entries = cards.map((card) => {
    const json = JSON.stringify(card, null, 2).replace(/\n/g, '\n  ');
    return `  ${json}`;
  });

  return [
    '/**',
    ' * 由 `npm run build:cards` 自动生成，不要手动编辑。',
    ' *',
    ' * 源文件是同目录下的 dNNN.json。',
    " * 之所以内联成 JS，是因为小程序打包器不支持 require('xxx.json')，",
    ' * 它会把参数一律按 .js 解析，然后报「xxx.json.js is not defined」。',
    ' *',
    ' * 新增卡片：写好 dNNN.json 之后跑 `npm run build:cards`。',
    ' */',
    'module.exports = [',
    entries.join(',\n'),
    '];',
    ''
  ].join('\n');
}

/** 读取并排序卡片，保证输出的顺序稳定。 */
export function sortCards(cards) {
  return [...cards].sort((a, b) => a.day - b.day);
}
