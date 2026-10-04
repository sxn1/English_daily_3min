/**
 * 全局配置。
 * 只改这里就能切换音频来源，不要在页面里硬编码路径。
 */
module.exports = {
  /**
   * 音频 CDN 前缀，例如 'https://cdn.example.com/audio'。
   * 留空 = 从小程序包内目录读（见 localAudioDir），只适合试听一两个文件。
   * 小程序主包上限 2MB，正式内容必须走 CDN；
   * 填了之后要把这个域名加入小程序后台的「downloadFile 合法域名」。
   */
  audioBase: '',

  /** 未配置 audioBase 时，从包内哪个目录取音频。 */
  localAudioDir: '/content/audio',

  /**
   * 是否在首页显示「跳到下一天」。
   * 开发/演示用：一次坐下来就能把 30 张卡全看一遍，否则要等 30 天。
   * 正式发布前改成 false —— 家长不该有办法一天刷完整个月。
   */
  allowSkipDay: true,

  /**
   * 「订阅消息」模板 ID。
   * 在小程序后台申请模板后填入，留空则跳过订阅弹窗（不影响打卡）。
   */
  subscribeTemplateId: ''
};
