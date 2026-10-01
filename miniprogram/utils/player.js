const config = require('../config');

let ctx = null;
let endedHandler = null;
let errorHandler = null;

/**
 * 卡片里存的是纯文件名（如 d001-model.mp3），这里拼成可播放地址。
 * 配置了 CDN 走 CDN，否则走小程序包内目录。URL 原样返回。
 */
function resolveAudio(path) {
  if (!path) return '';
  // 已经是完整地址就直接用：https 是 CDN，cloud 是微信云开发的云文件 ID
  if (/^(https?|cloud|wxfile):\/\//.test(path)) return path;
  const name = String(path).replace(/^\/+/, '');
  const base = String(config.audioBase || '').replace(/\/+$/, '');
  if (base) return `${base}/${name}`;
  const dir = String(config.localAudioDir || '/content/audio').replace(/\/+$/, '');
  return `${dir}/${name}`;
}

function ensureContext() {
  if (ctx) return ctx;
  // 音频就是产品本身。家长手机常年静音，如果不响，他会以为小程序坏了。
  // 注意：基础库 2.3.0 起，innerAudioContext.obeyMuteSwitch 直接赋值不再生效，
  // 必须通过 wx.setInnerAudioOption 统一设置，否则静音状态下依然不出声。
  if (wx.setInnerAudioOption) {
    wx.setInnerAudioOption({ obeyMuteSwitch: false, fail: () => {} });
  }
  ctx = wx.createInnerAudioContext();
  ctx.onEnded(() => {
    const handler = endedHandler;
    endedHandler = null;
    if (handler) handler();
  });
  ctx.onError((err) => {
    const handler = errorHandler;
    errorHandler = null;
    if (handler) handler(err);
  });
  return ctx;
}

function play(path, handlers) {
  const options = handlers || {};
  const src = resolveAudio(path);
  if (!src) {
    if (options.onError) options.onError(new Error('empty audio path'));
    return;
  }
  endedHandler = options.onEnded || null;
  errorHandler = options.onError || null;
  const audio = ensureContext();
  audio.stop();
  audio.src = src;
  audio.play();
}

function stop() {
  if (!ctx) return;
  ctx.stop();
  endedHandler = null;
  errorHandler = null;
}

module.exports = { play, stop, resolveAudio };
