# 每天3分钟

给 2 岁（18-36 个月）孩子做英语启蒙的**家长工具**。

不是儿童 app。2 岁的孩子不会读、坐不住、手指也点不准，所以这个产品真正的用户是家长：家长打开小程序拿到今天的一张任务卡，**把手机放下**，跟孩子玩 3 分钟，回来勾一下孩子今天说了哪些词。

## 为什么是这样设计的

三条约束决定了全部设计，细节见 [docs/product-design.md](docs/product-design.md)：

1. 屏幕时长：2 岁每天屏幕时间应极少且必须有成人陪同，所以产品不能设计成「孩子自己玩 20 分钟」。
2. 语言习得：2 岁靠听、靠真实互动、靠高频重复习得语言，不是靠认字和跟读打分。
3. 语音识别不可信：2 岁发音极不稳定，任何「发音打分」「答错了」都会误判并伤害体验，所以不做。

结论：**离屏活动是产品本体，音频只是把家长和孩子送进活动的触发器，代码是最不重要的那部分。**

## 目录结构

```
miniprogram/
  config.js              音频域名、订阅消息模板 ID —— 只改这里
  pages/
    today/               今日任务卡
    play/                听示范 → 家长怎么说 → 离屏活动 → 放下手机计时
    checkin/             家长勾选「孩子今天说过哪些词」
    progress/            连续天数、30 天趋势、词汇清单
  content/
    cards/d001..d007.json  任务卡（产品真正的资产）
    cards/index.js         卡片清单（小程序不支持动态 require，必须显式列出）
    schema/                卡片字段定义
    audio/                 录音放这里，目前是空的
  utils/
    store.js             进度存储（只存本机）
    content.js           卡片读取
    player.js            音频播放
    subscribe.js         每日订阅消息提醒
tools/validate-content.mjs
docs/
```

## 文档

- [docs/how-to-use.md](docs/how-to-use.md) — **这个 app 到底怎么用**：家长的一次完整使用流程、常见问题
- [docs/recording-script.md](docs/recording-script.md) — **录音清单**：14 个文件的准确文件名和要读的内容（自动生成）
- [docs/audio-hosting.md](docs/audio-hosting.md) — **音频放哪里**：三种托管方案对比、成本、云开发接入步骤
- [docs/dev-notes.md](docs/dev-notes.md) — **技术注意事项**：已修的坑、API 限制、还没验证过的东西
- [docs/product-design.md](docs/product-design.md) — 产品设计取舍，改需求前先读这份
- [docs/deploy-wechat.md](docs/deploy-wechat.md) — 部署到微信：类目、备案、审核全流程
- [docs/content-guide.md](docs/content-guide.md) — 怎么写任务卡
- [docs/curriculum.md](docs/curriculum.md) — **30 天内容大纲**：四周结构、完整课表、待确认

## 跑起来

1. 装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
2. 导入本目录（`project.config.json` 已把 `miniprogram/` 指为小程序根目录，appid 用的是测试号 `touristappid`）。
3. 编译即可。**没有音频也能跑**：播放按钮会提示录音尚未补上，下面三个离屏活动照常可用。

编译之后怎么点、每一步应该看到什么，见 [docs/how-to-use.md](docs/how-to-use.md)。

校验内容（改了卡片后建议跑一次）：

```bash
npm run validate   # 卡片字段、顺序、命名规则
npm run check      # 页面装配：事件绑定、跳转目标、标签配对
```

## 现在能做什么、还不能做什么

已经能用：今日卡片、示范/儿歌播放、3 分钟放下手机的计时、家长勾选记录、连续天数与 30 天趋势。

还没做（按优先级）：

- **录音**。7 张卡对应 14 个音频文件，都在 `miniprogram/content/audio/` 里等着。这是当前唯一挡住上线的事 —— 录制要求见该目录的 README。
- **每日订阅消息**。需要在小程序后台申请模板，然后把模板 ID 填进 `config.js`。这是留存的命脉，但必须先有正式 appid。
- **CDN**。音频不能放在小程序包内（主包上限 2MB），需要配置 `config.js` 的 `audioBase` 和后台的 downloadFile 合法域名。

刻意不做：发音打分、排行榜、自动连播、任何面向孩子计时的功能、任何把孩子使用时长当指标的设计。
