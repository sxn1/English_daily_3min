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
  require('./d007.json'),
  require('./d008.json'),
  require('./d009.json'),
  require('./d010.json'),
  require('./d011.json'),
  require('./d012.json'),
  require('./d013.json'),
  require('./d014.json'),
  require('./d015.json'),
  require('./d016.json'),
  require('./d017.json'),
  require('./d018.json'),
  require('./d019.json'),
  require('./d020.json'),
  require('./d021.json'),
  require('./d022.json'),
  require('./d023.json'),
  require('./d024.json'),
  require('./d025.json'),
  require('./d026.json'),
  require('./d027.json'),
  require('./d028.json'),
  require('./d029.json'),
  require('./d030.json')
];
