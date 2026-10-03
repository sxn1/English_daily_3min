# 内容编辑指南

## 加一张新卡

1. 复制 `miniprogram/content/cards/d007.json` 为 `d008.json`。
2. 改 `id`（必须和文件名一致）、`day`（必须比上一张多 1）、内容。
3. 跑 `npm run build:cards`，把新卡内联进 `miniprogram/content/cards/index.js`。
4. 跑 `npm run validate` 检查字段和顺序。
5. 跑 `npm run recording-script`，录音清单会自动加上新卡的两个文件。

**第 3 步不能省。** `index.js` 是从 JSON 生成的，手动编辑会被下次生成覆盖；忘记了则会加载旧数据，而且不会报错。校验脚本会拦住这种情况。

## 字段怎么写

| 字段 | 规则 |
| --- | --- |
| `id` | `d001` 形式，必须和文件名一致 |
| `day` | 从 1 连续递增，不能跳号、不能重复 |
| `targetAgeMonths` | 18-36 |
| `focusChunk` | 今天的核心语块，**必须是短语**，不要单个词 |
| `targetWords` | 1-6 个目标词，越少越好 |
| `parentScriptZh` | 写给家长的中文动作说明，必须可直接执行 |
| `audio.model` / `audio.song` | **纯文件名**，如 `d008-model.mp3`；还没录音就填 `null`。不要写路径，前缀由 `config.js` 的 `audioBase` 决定 |
| `offlineActivity` | 2-4 个离屏动作，是这张卡的本体 |
| `durationSec` | 60-600，默认 180 |
| `parentChecks` | 只能来自 `targetWords`，这是给家长勾的，不是给孩子的测验 |

校验脚本会检查以上全部规则，包括 `index.js` 的登记顺序。

## 写 `parentScriptZh` 的三条铁律

1. **写成动作，不是知识。** 「指着自己的鼻子说 Where's your nose?，重复五次后停下等孩子」比「教孩子认识鼻子」有用得多。
2. **告诉家长什么时候该停。** 2 岁的关键在留出回应空档，家长最常见的错误是一直说个不停。
3. **不要出现「让孩子跟读」。** 这个年龄的目标是听懂和愿意互动，强迫输出会把兴趣毁掉。

## 录音

见 `miniprogram/content/audio/README.md`。一句话：真人录音，不要 TTS。
