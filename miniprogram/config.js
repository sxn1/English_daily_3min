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
   * 「订阅消息」模板 ID。
   * 在小程序后台申请模板后填入，留空则跳过订阅弹窗（不影响打卡）。
   */
  subscribeTemplateId: ''
};
