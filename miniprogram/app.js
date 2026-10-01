const store = require('./utils/store');

App({
  globalData: {},

  onLaunch() {
    // 首次启动写入起始日期，之后「第 N 天」由起始日期推算，不依赖服务端。
    store.ensureInit();
  }
});
