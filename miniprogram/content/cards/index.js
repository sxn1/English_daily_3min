/**
 * 由 `npm run build:cards` 自动生成，不要手动编辑。
 *
 * 源文件是同目录下的 dNNN.json。
 * 之所以内联成 JS，是因为小程序打包器不支持 require('xxx.json')，
 * 它会把参数一律按 .js 解析，然后报「xxx.json.js is not defined」。
 *
 * 新增卡片：写好 dNNN.json 之后跑 `npm run build:cards`。
 */
module.exports = [
  {
    "id": "d001",
    "day": 1,
    "targetAgeMonths": 24,
    "theme": "body-parts",
    "themeZh": "身体 · 拍拍手",
    "focusChunk": "clap your hands",
    "focusChunkZh": "拍拍手",
    "targetWords": [
      "clap",
      "hands"
    ],
    "parentScriptZh": "先放下手机，面对孩子。你一边说 Clap your hands，一边自己拍手，做三次，然后停下看着孩子，等他反应。不要催，也不要替他说。孩子看了你一眼、动了一下手，都算回应。",
    "audio": {
      "model": "d001-model.mp3",
      "song": "d001-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Clap your hands",
        "zh": "拍拍手"
      },
      {
        "en": "Clap fast, clap slow",
        "zh": "快快拍、慢慢拍"
      },
      {
        "en": "Clap, clap, stop!",
        "zh": "拍拍，停！"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "clap",
      "hands"
    ]
  },
  {
    "id": "d002",
    "day": 2,
    "targetAgeMonths": 24,
    "theme": "face",
    "themeZh": "脸 · 鼻子在哪里",
    "focusChunk": "where's your nose?",
    "focusChunkZh": "鼻子在哪里",
    "targetWords": [
      "nose",
      "where"
    ],
    "parentScriptZh": "用手指着自己的鼻子说 Where's your nose?，再轻轻指孩子的鼻子。重复五六次，然后把手停下，看孩子会不会自己摸鼻子。如果他不摸，就再指一次，不要换成中文问。",
    "audio": {
      "model": "d002-model.mp3",
      "song": "d002-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Where's your nose?",
        "zh": "鼻子在哪里"
      },
      {
        "en": "Where's your mouth?",
        "zh": "嘴巴在哪里"
      },
      {
        "en": "Where are your eyes?",
        "zh": "眼睛在哪里"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "nose",
      "where"
    ]
  },
  {
    "id": "d003",
    "day": 3,
    "targetAgeMonths": 24,
    "theme": "peekaboo",
    "themeZh": "躲猫猫 · 没有啦",
    "focusChunk": "all gone",
    "focusChunkZh": "没有啦",
    "targetWords": [
      "gone",
      "peekaboo"
    ],
    "parentScriptZh": "用手帕盖住一个小玩具，说 Peekaboo... all gone!，停两秒再揭开说 Peekaboo!。孩子笑的时候就再来一次。这个游戏玩多少次都不嫌多，重复本身就是学习。",
    "audio": {
      "model": "d003-model.mp3",
      "song": "d003-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Peekaboo!",
        "zh": "躲猫猫"
      },
      {
        "en": "All gone!",
        "zh": "用布盖住玩具，说没有啦"
      },
      {
        "en": "Where did it go?",
        "zh": "玩具去哪里了"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "gone",
      "peekaboo"
    ]
  },
  {
    "id": "d004",
    "day": 4,
    "targetAgeMonths": 24,
    "theme": "animals",
    "themeZh": "动物 · 狗狗怎么叫",
    "focusChunk": "what does the dog say?",
    "focusChunkZh": "狗狗怎么叫",
    "targetWords": [
      "dog",
      "woof"
    ],
    "parentScriptZh": "学狗叫，越夸张越好。先你来说 Woof woof，再问孩子 What does the dog say?，然后停下来等他。孩子发出任何接近的声音都立刻回应他，重复他的声音再补一遍正确的。",
    "audio": {
      "model": "d004-model.mp3",
      "song": "d004-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Woof woof!",
        "zh": "学狗叫"
      },
      {
        "en": "What does the cow say? Moo",
        "zh": "奶牛怎么叫"
      },
      {
        "en": "Let's find the dog",
        "zh": "去找家里的动物玩具"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "dog",
      "woof"
    ]
  },
  {
    "id": "d005",
    "day": 5,
    "targetAgeMonths": 24,
    "theme": "food",
    "themeZh": "吃饭 · 还要一点",
    "focusChunk": "more please",
    "focusChunkZh": "还要一点",
    "targetWords": [
      "more",
      "please"
    ],
    "parentScriptZh": "吃饭或吃点心的时候用。孩子伸手要的时候先不给，问他 More?，等他说 more、点头或者指一下，再给他，并且说 More please!。一顿饭可以练十几次，比专门坐下来学有效得多。",
    "audio": {
      "model": "d005-model.mp3",
      "song": "d005-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "More please",
        "zh": "还要一点"
      },
      {
        "en": "All done",
        "zh": "吃完了"
      },
      {
        "en": "One more, then stop",
        "zh": "把食物分成小块，一次只给一点"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "more",
      "please"
    ]
  },
  {
    "id": "d006",
    "day": 6,
    "targetAgeMonths": 24,
    "theme": "movement",
    "themeZh": "动作 · 上去下来",
    "focusChunk": "up and down",
    "focusChunkZh": "上去、下来",
    "targetWords": [
      "up",
      "down"
    ],
    "parentScriptZh": "抱着孩子举高说 Up!，放下说 Down!，也可以在沙发上做。动作和词一定要同时发生，孩子会把声音和身体的感受连在一起，这是这个年龄最有效的记法。",
    "audio": {
      "model": "d006-model.mp3",
      "song": "d006-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Up! Down!",
        "zh": "举高、放下"
      },
      {
        "en": "Jump, jump!",
        "zh": "跳一跳"
      },
      {
        "en": "Sit down",
        "zh": "坐下"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "up",
      "down"
    ]
  },
  {
    "id": "d007",
    "day": 7,
    "targetAgeMonths": 24,
    "theme": "colors",
    "themeZh": "颜色 · 找找红色",
    "focusChunk": "show me something red",
    "focusChunkZh": "找找红色的东西",
    "targetWords": [
      "red",
      "blue"
    ],
    "parentScriptZh": "在家里找红色的东西：红色的杯子、红色的球、红色的衣服。指着说 Red!，再问孩子 Show me something red.。两岁的孩子可能只是看一眼，那也是回应，不要要求他指对。",
    "audio": {
      "model": "d007-model.mp3",
      "song": "d007-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Show me something red",
        "zh": "找红色的东西"
      },
      {
        "en": "Red ball, blue ball",
        "zh": "红球、蓝球"
      },
      {
        "en": "Put them together",
        "zh": "把同色的玩具放到一起"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "red",
      "blue"
    ]
  },
  {
    "id": "d008",
    "day": 8,
    "targetAgeMonths": 24,
    "theme": "family",
    "themeZh": "家人 · 妈妈在哪里",
    "focusChunk": "where's mama?",
    "focusChunkZh": "妈妈在哪里",
    "targetWords": [
      "mama",
      "dada"
    ],
    "parentScriptZh": "指着自己说 Mama，指着另一半说 Dada，各说三遍。然后问 Where's mama?，停下来等孩子看你。不要指着自己问「这是谁」——两岁答不了这个问题，但他能听懂「在哪里」。",
    "audio": {
      "model": "d008-model.mp3",
      "song": "d008-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Where's mama?",
        "zh": "妈妈在哪里"
      },
      {
        "en": "Where's dada?",
        "zh": "爸爸在哪里"
      },
      {
        "en": "Give it to mama",
        "zh": "把东西给妈妈"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "mama",
      "dada"
    ]
  },
  {
    "id": "d009",
    "day": 9,
    "targetAgeMonths": 24,
    "theme": "family",
    "themeZh": "家人 · 给宝宝",
    "focusChunk": "give it to baby",
    "focusChunkZh": "给宝宝",
    "targetWords": [
      "give",
      "baby"
    ],
    "parentScriptZh": "拿一个玩具递给孩子，说 Give it to baby, here you go。再把玩具递给孩子，让他拿给你，说 Give it to mama。两岁递东西给喜欢的人已经很熟练，今天只是把这个动作配上声音。",
    "audio": {
      "model": "d009-model.mp3",
      "song": "d009-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Give it to mama",
        "zh": "给妈妈"
      },
      {
        "en": "Give it to baby",
        "zh": "给宝宝"
      },
      {
        "en": "Here you go",
        "zh": "递东西的时候说给你"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "give",
      "baby"
    ]
  },
  {
    "id": "d010",
    "day": 10,
    "targetAgeMonths": 24,
    "theme": "toys",
    "themeZh": "玩具 · 球在哪里",
    "focusChunk": "where's the ball?",
    "focusChunkZh": "球在哪里",
    "targetWords": [
      "ball",
      "where"
    ],
    "parentScriptZh": "把球滚到沙发底下，说 Where's the ball?，再一起找出来说 There it is!。孩子找到的时候要立刻回应他。找不到也没关系，把球藏起来本身就好玩。",
    "audio": {
      "model": "d010-model.mp3",
      "song": "d010-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Where's the ball?",
        "zh": "球在哪里"
      },
      {
        "en": "There it is!",
        "zh": "找到的时候说在这里"
      },
      {
        "en": "Roll the ball",
        "zh": "把球滚过来滚过去"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "ball",
      "where"
    ]
  },
  {
    "id": "d011",
    "day": 11,
    "targetAgeMonths": 24,
    "theme": "tableware",
    "themeZh": "餐具 · 你的杯子",
    "focusChunk": "this is your cup",
    "focusChunkZh": "这是你的杯子",
    "targetWords": [
      "cup",
      "this"
    ],
    "parentScriptZh": "喝水的时候指着杯子说 This is your cup，再问 Where's your cup?，让孩子指出来。注意问的是「在哪里」，不是「这是什么」——两岁能指认，还不能命名。",
    "audio": {
      "model": "d011-model.mp3",
      "song": "d011-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "This is your cup",
        "zh": "这是你的杯子"
      },
      {
        "en": "Where's your cup?",
        "zh": "你的杯子在哪里"
      },
      {
        "en": "Drink some water",
        "zh": "喝点水"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "cup",
      "this"
    ]
  },
  {
    "id": "d012",
    "day": 12,
    "targetAgeMonths": 24,
    "theme": "clothing",
    "themeZh": "穿鞋 · 穿上鞋子",
    "focusChunk": "put on your shoes",
    "focusChunkZh": "穿上鞋子",
    "targetWords": [
      "shoes",
      "on"
    ],
    "parentScriptZh": "出门穿鞋的时候说 Put on your shoes，一边穿一边说，不要提前说也不要事后说。穿好以后抬高声音说 Shoes on! 脱鞋的时候说 Shoes off。",
    "audio": {
      "model": "d012-model.mp3",
      "song": "d012-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Put on your shoes",
        "zh": "穿上鞋子"
      },
      {
        "en": "Shoes on!",
        "zh": "穿好了"
      },
      {
        "en": "Shoes off",
        "zh": "脱鞋"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "shoes",
      "on"
    ]
  },
  {
    "id": "d013",
    "day": 13,
    "targetAgeMonths": 24,
    "theme": "actions",
    "themeZh": "开关 · 开门关门",
    "focusChunk": "open the door",
    "focusChunkZh": "开门",
    "targetWords": [
      "open",
      "close"
    ],
    "parentScriptZh": "开门说 Open the door，关门说 Close the door。家里的柜子、抽屉、绘本都能用。动作和词必须同时发生——两岁就是靠这个把声音和意思连起来的。",
    "audio": {
      "model": "d013-model.mp3",
      "song": "d013-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Open the door",
        "zh": "开门"
      },
      {
        "en": "Close the door",
        "zh": "关门"
      },
      {
        "en": "Open, close, open, close",
        "zh": "反复开关，节奏逐渐加快"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "open",
      "close"
    ]
  },
  {
    "id": "d014",
    "day": 14,
    "targetAgeMonths": 24,
    "theme": "review",
    "themeZh": "复习 · 再玩一次",
    "focusChunk": "let's do it again",
    "focusChunkZh": "再玩一次",
    "targetWords": [
      "mama",
      "dada",
      "baby",
      "ball",
      "cup",
      "shoes"
    ],
    "parentScriptZh": "今天不教新词。把这周玩过的动作随便挑几样重做一遍：找家人、递东西、找球、认杯子、穿鞋。做完一个说 Let's do it again。你的任务只是观察孩子还记得哪些，记不住完全正常。",
    "audio": {
      "model": "d014-model.mp3",
      "song": "d014-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Where's mama?",
        "zh": "复习妈妈在哪里"
      },
      {
        "en": "Give it to baby",
        "zh": "复习递给宝宝"
      },
      {
        "en": "Where's the ball?",
        "zh": "复习球在哪里"
      },
      {
        "en": "Put on your shoes",
        "zh": "复习穿鞋"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "mama",
      "dada",
      "baby",
      "ball",
      "cup",
      "shoes"
    ]
  },
  {
    "id": "d015",
    "day": 15,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "起床 · 醒醒啦",
    "focusChunk": "wake up!",
    "focusChunkZh": "醒醒啦",
    "targetWords": [
      "wake",
      "up"
    ],
    "parentScriptZh": "早上拉开窗帘的时候说 Wake up!，伸懒腰说 Up!。孩子刚醒的时候不要问问题，他答不了。只说这两句，说完就抱他起来。",
    "audio": {
      "model": "d015-model.mp3",
      "song": "d015-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Wake up!",
        "zh": "醒醒啦"
      },
      {
        "en": "Stretch, stretch",
        "zh": "一起伸懒腰"
      },
      {
        "en": "Good morning",
        "zh": "早上好"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "wake",
      "up"
    ]
  },
  {
    "id": "d016",
    "day": 16,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "洗手 · 洗洗小手",
    "focusChunk": "wash your hands",
    "focusChunkZh": "洗手",
    "targetWords": [
      "wash",
      "hands"
    ],
    "parentScriptZh": "洗手的时候说 Wash your hands，一边搓一边说 Rub, rub, rub。洗完说 All done。这句话每天至少能说五遍，孩子很快就懂了。",
    "audio": {
      "model": "d016-model.mp3",
      "song": "d016-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Wash your hands",
        "zh": "洗手"
      },
      {
        "en": "Rub, rub, rub",
        "zh": "搓搓搓"
      },
      {
        "en": "All done",
        "zh": "洗好了"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "wash",
      "hands"
    ]
  },
  {
    "id": "d017",
    "day": 17,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "吃饭 · 吃饭啦",
    "focusChunk": "let's eat",
    "focusChunkZh": "吃饭啦",
    "targetWords": [
      "eat",
      "yum"
    ],
    "parentScriptZh": "端上饭的时候说 Let's eat!，孩子吃一口你就说 Yum!，表情要夸张。孩子会先模仿你的表情，慢慢才模仿你的发音，两个都是进步。",
    "audio": {
      "model": "d017-model.mp3",
      "song": "d017-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Let's eat",
        "zh": "吃饭啦"
      },
      {
        "en": "Yum, yum",
        "zh": "好吃"
      },
      {
        "en": "Sit down",
        "zh": "坐下"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "eat",
      "yum"
    ]
  },
  {
    "id": "d018",
    "day": 18,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "吃完 · 吃完了",
    "focusChunk": "all done",
    "focusChunkZh": "吃完了",
    "targetWords": [
      "done",
      "more"
    ],
    "parentScriptZh": "孩子吃完的时候说 All done!，把碗推开也配这句话。如果他还想要，问 More?，等他用动作或声音回应再给他。不要在他已经吃饱的时候继续喂。",
    "audio": {
      "model": "d018-model.mp3",
      "song": "d018-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "All done",
        "zh": "吃完了"
      },
      {
        "en": "More please",
        "zh": "还要一点"
      },
      {
        "en": "Wipe your face",
        "zh": "擦擦嘴"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "done",
      "more"
    ]
  },
  {
    "id": "d019",
    "day": 19,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "洗澡 · 洗澡啦",
    "focusChunk": "let's take a bath",
    "focusChunkZh": "洗澡啦",
    "targetWords": [
      "bath",
      "water"
    ],
    "parentScriptZh": "放水的时候说 Water! 抱进浴室说 Let's take a bath。拍水说 Splash, splash。洗澡是两岁最喜欢的场景，语言输入量能顶平时好几分钟。",
    "audio": {
      "model": "d019-model.mp3",
      "song": "d019-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Let's take a bath",
        "zh": "洗澡啦"
      },
      {
        "en": "Water!",
        "zh": "水"
      },
      {
        "en": "Splash, splash",
        "zh": "拍水"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "bath",
      "water"
    ]
  },
  {
    "id": "d020",
    "day": 20,
    "targetAgeMonths": 24,
    "theme": "routine",
    "themeZh": "睡觉 · 晚安",
    "focusChunk": "night night",
    "focusChunkZh": "晚安",
    "targetWords": [
      "bed",
      "night"
    ],
    "parentScriptZh": "抱到床上的时候说 Night night，关灯说 Night night, light，跟每个人说一遍 Night night, mama。每天用同一句话，孩子会把这句话和睡觉连在一起，之后这句话本身就能让他安静下来。",
    "audio": {
      "model": "d020-model.mp3",
      "song": "d020-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Night night",
        "zh": "晚安"
      },
      {
        "en": "Go to bed",
        "zh": "上床"
      },
      {
        "en": "Turn off the light",
        "zh": "关灯"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "bed",
      "night"
    ]
  },
  {
    "id": "d021",
    "day": 21,
    "targetAgeMonths": 24,
    "theme": "review",
    "themeZh": "复习 · 再来一次",
    "focusChunk": "one more time",
    "focusChunkZh": "再来一次",
    "targetWords": [
      "wake",
      "wash",
      "eat",
      "done",
      "bath",
      "night"
    ],
    "parentScriptZh": "今天不教新词。把这周的流程重做一遍，每做完一个说 One more time：起床伸懒腰、洗手、吃饭、洗澡、道晚安。孩子配合哪一个就多做哪一个，不用全做完。",
    "audio": {
      "model": "d021-model.mp3",
      "song": "d021-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Wake up!",
        "zh": "复习起床"
      },
      {
        "en": "Wash your hands",
        "zh": "复习洗手"
      },
      {
        "en": "Let's take a bath",
        "zh": "复习洗澡"
      },
      {
        "en": "Night night",
        "zh": "复习晚安"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "wake",
      "wash",
      "eat",
      "done",
      "bath",
      "night"
    ]
  },
  {
    "id": "d022",
    "day": 22,
    "targetAgeMonths": 24,
    "theme": "animals",
    "themeZh": "动物 · 奶牛怎么叫",
    "focusChunk": "what does the cow say?",
    "focusChunkZh": "奶牛怎么叫",
    "targetWords": [
      "cow",
      "moo"
    ],
    "parentScriptZh": "学牛叫，声音要低要长。先你说 Mooooo，再问 What does the cow say?，然后停下等孩子。他发出任何接近的声音都立刻回应，重复他的声音再补一遍正确的。",
    "audio": {
      "model": "d022-model.mp3",
      "song": "d022-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Mooooo",
        "zh": "学奶牛叫，声音低一点长一点"
      },
      {
        "en": "What does the cow say?",
        "zh": "奶牛怎么叫"
      },
      {
        "en": "Where's the cow?",
        "zh": "找出动物玩具里的奶牛"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "cow",
      "moo"
    ]
  },
  {
    "id": "d023",
    "day": 23,
    "targetAgeMonths": 24,
    "theme": "animals",
    "themeZh": "动物 · 鸭子怎么叫",
    "focusChunk": "what does the duck say?",
    "focusChunkZh": "鸭子怎么叫",
    "targetWords": [
      "duck",
      "quack"
    ],
    "parentScriptZh": "鸭子叫要短促。说 Quack quack quack，配上手部开合的动作当鸭嘴。问孩子 What does the duck say? 然后闭嘴等他。这个音的发音难度比 Moo 高，孩子说不准很正常。",
    "audio": {
      "model": "d023-model.mp3",
      "song": "d023-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Quack, quack",
        "zh": "学鸭子叫，手上做鸭嘴动作"
      },
      {
        "en": "What does the duck say?",
        "zh": "鸭子怎么叫"
      },
      {
        "en": "Waddle, waddle",
        "zh": "摇摇摆摆地走"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "duck",
      "quack"
    ]
  },
  {
    "id": "d024",
    "day": 24,
    "targetAgeMonths": 24,
    "theme": "animals",
    "themeZh": "动物 · 猫怎么叫",
    "focusChunk": "what does the cat say?",
    "focusChunkZh": "猫怎么叫",
    "targetWords": [
      "cat",
      "meow"
    ],
    "parentScriptZh": "猫叫要柔和拉长：Meooow。今天可以把前三天的动物连起来考一遍：奶牛、鸭子、猫，每问一个都停下来等。孩子答不出哪一个就先跳过，不要纠正。",
    "audio": {
      "model": "d024-model.mp3",
      "song": "d024-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Meooow",
        "zh": "学猫叫，声音轻一点软一点"
      },
      {
        "en": "What does the cat say?",
        "zh": "猫怎么叫"
      },
      {
        "en": "Moo, quack, meow",
        "zh": "把三个动物叫声连着说一遍"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "cat",
      "meow"
    ]
  },
  {
    "id": "d025",
    "day": 25,
    "targetAgeMonths": 24,
    "theme": "movement",
    "themeZh": "运动 · 跑起来",
    "focusChunk": "let's run",
    "focusChunkZh": "跑起来",
    "targetWords": [
      "run",
      "fast"
    ],
    "parentScriptZh": "说 Let's run! 然后真的跑起来，孩子会追你。跑一会儿说 Stop，突然停下，再开始。快慢交替最能吸引两岁孩子，Run fast! Run slow! 一天玩几次都不嫌多。",
    "audio": {
      "model": "d025-model.mp3",
      "song": "d025-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Let's run",
        "zh": "跑起来"
      },
      {
        "en": "Run fast! Run slow",
        "zh": "快快跑，慢慢跑"
      },
      {
        "en": "Stop!",
        "zh": "突然停下来"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "run",
      "fast"
    ]
  },
  {
    "id": "d026",
    "day": 26,
    "targetAgeMonths": 24,
    "theme": "movement",
    "themeZh": "运动 · 跳一跳",
    "focusChunk": "jump up and down",
    "focusChunkZh": "跳上跳下",
    "targetWords": [
      "jump",
      "up",
      "down"
    ],
    "parentScriptZh": "扶着孩子的双手说 Jump up!，跟着他一起跳。落地的时候说 Down!。两岁大多还跳不起来，但只要他弯腿、蹬地、脚离地一点点，就立刻大声说 Jump! 给他回应。",
    "audio": {
      "model": "d026-model.mp3",
      "song": "d026-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Jump up!",
        "zh": "跳起来"
      },
      {
        "en": "Down!",
        "zh": "落地的时候说下来"
      },
      {
        "en": "Jump, jump, jump",
        "zh": "连着跳几下"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "jump",
      "up",
      "down"
    ]
  },
  {
    "id": "d027",
    "day": 27,
    "targetAgeMonths": 24,
    "theme": "movement",
    "themeZh": "运动 · 走和停",
    "focusChunk": "walk, walk, stop!",
    "focusChunkZh": "走走走，停",
    "targetWords": [
      "walk",
      "stop"
    ],
    "parentScriptZh": "牵着孩子慢慢走，边走边说 Walk, walk, walk，然后突然说 Stop! 自己也停住不动。这个游戏练的是自控力，不只是语言。孩子会等着你说 Stop，那一刻他已经听懂整句话了。",
    "audio": {
      "model": "d027-model.mp3",
      "song": "d027-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Walk, walk, walk",
        "zh": "走走走"
      },
      {
        "en": "Stop!",
        "zh": "突然停住"
      },
      {
        "en": "Go!",
        "zh": "继续走"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "walk",
      "stop"
    ]
  },
  {
    "id": "d028",
    "day": 28,
    "targetAgeMonths": 24,
    "theme": "review",
    "themeZh": "复习 · 准备好了吗",
    "focusChunk": "ready? go!",
    "focusChunkZh": "准备好了吗？开始",
    "targetWords": [
      "cow",
      "duck",
      "cat",
      "run",
      "jump",
      "walk"
    ],
    "parentScriptZh": "今天不教新词。动物叫声、跑、跳、走停，随便挑几样重玩。每样开始前说 Ready? Go!。孩子听到 Ready 就开始期待，这个期待本身就说明他在理解语言。",
    "audio": {
      "model": "d028-model.mp3",
      "song": "d028-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Ready? Go!",
        "zh": "准备好了吗，开始"
      },
      {
        "en": "Moo, quack, meow",
        "zh": "复习三个动物叫声"
      },
      {
        "en": "Walk, walk, stop!",
        "zh": "复习走和停"
      },
      {
        "en": "Jump up!",
        "zh": "复习跳"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "cow",
      "duck",
      "cat",
      "run",
      "jump",
      "walk"
    ]
  },
  {
    "id": "d029",
    "day": 29,
    "targetAgeMonths": 24,
    "theme": "review",
    "themeZh": "综合复习 · 全都再来一遍",
    "focusChunk": "let's do it all again",
    "focusChunkZh": "全都再来一遍",
    "targetWords": [
      "mama",
      "ball",
      "cup",
      "wash",
      "bath",
      "cow"
    ],
    "parentScriptZh": "今天不教新词。四周玩过的内容随便挑几样重做。重点不是做完，而是观察：哪几个词孩子一听就有反应？哪几个他完全没反应？记下来，明天最后一次用得上。",
    "audio": {
      "model": "d029-model.mp3",
      "song": "d029-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "Where's mama?",
        "zh": "复习找人"
      },
      {
        "en": "Where's the ball?",
        "zh": "复习找球"
      },
      {
        "en": "Wash your hands",
        "zh": "复习洗手"
      },
      {
        "en": "What does the cow say?",
        "zh": "复习动物叫声"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "mama",
      "ball",
      "cup",
      "wash",
      "bath",
      "cow"
    ]
  },
  {
    "id": "d030",
    "day": 30,
    "targetAgeMonths": 24,
    "theme": "review",
    "themeZh": "第 30 天 · 你做到了",
    "focusChunk": "you did it!",
    "focusChunkZh": "你做到了",
    "targetWords": [
      "you",
      "did"
    ],
    "parentScriptZh": "最后一天。挑孩子最爱的三样玩一遍，玩完抱着他说 You did it! 然后打开小程序的「查看记录」，看看这一个月他听懂了哪些词。灰色多是很正常的——两岁先听懂、后开口，中间隔着好几个月。",
    "audio": {
      "model": "d030-model.mp3",
      "song": "d030-song.mp3"
    },
    "offlineActivity": [
      {
        "en": "You did it!",
        "zh": "抱着孩子说这句话"
      },
      {
        "en": "One more time",
        "zh": "玩孩子最喜欢的那一个"
      },
      {
        "en": "Night night",
        "zh": "用晚安结束这一个月"
      }
    ],
    "durationSec": 180,
    "parentChecks": [
      "you",
      "did"
    ]
  }
];
