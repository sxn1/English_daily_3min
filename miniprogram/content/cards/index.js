/**
 * 卡片清单。小程序不能按变量路径动态 require，所以这里必须显式列出来。
 * 新增卡片时：新建 dNNN.json，然后在这里按 day 顺序补一行。
 * 用 `npm run validate` 检查顺序和字段是否一致。
 */
module.exports = [
  require('./d001.json'),
  require('./d002.json'),
  require('./d003.json'),
  require('./d004.json'),
  require('./d005.json'),
  require('./d006.json'),
  require('./d007.json')
];
