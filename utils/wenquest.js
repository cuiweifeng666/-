var wenquest = {
  arr2: [['1你喜欢热闹的场合还是安静的场合？', '2你对异地恋怎么看？', '3你觉得什么样的男生交不到女朋友？', '4当你的恋人没有回你的信息的时候你会怎么想？', '5你觉得以下哪件事情让你很纠结？', '6相亲过后听到男方说“我们以后一定要保持联系啊”，你觉得这句话的潜台词意思是？'], ['1和女友约好逛街，但临时有重要的事情不能陪同，你会怎么做？', '2相处中，如果有对她不爽的地方，你会直接说出来吗？', '3和女友争吵过后你通常会怎么做？', '4请人吃饭，别人说“随便吃点就好”，通常你会怎么做？',]],
  arr1: [],
      }
  //   {
  //     man:{
  //       each: ['直男', '痞', '大叔', '霸道总裁', '少女心', '经济适用'],
  //       que01: [
  //         {
  //           title:'1和女友约好逛街，但临时有重要的事情不能陪同，你会怎么做？',
  //           detail: ['A和女友说：“今天别去了改天好好陪她”',
  //                   'B 把卡交给她，让她放心刷',
  //                   'C联系她闺蜜，看看是否有时间陪她',
  //                   'D和她说明白原因，回来时候买礼物送给她'
  //                   ],
  //           score:''
  //         },
  //         {
  //           title: '2觉不觉得撒娇女人很可爱？',
  //           detail: ['A最受不了女人撒娇，有事说事呗',
  //             'B偶尔撒娇一下还行，但要注重场合',
  //             'C挺好的，生活要有趣味',
  //             'D无所谓，又不会掉一块肉'
  //           ]
  //         },
  //         {
  //           title: '3被甩后，她说：“感谢你曾经爱过我”，你会怎么回答 ？',
  //           detail: ['A滚，别贴好人牌了！”',
  //             'B什么都不回，因为没什么可回的。',
  //             'C反正都不是真心，我也发她张好人卡算了',
  //             'D这题不适合我，因为这不可能，都是我甩别人！'
  //           ]
  //         },
  //         {
  //           title: '4女友突然拿出一个盒子说里面是你最想要的礼物，你觉得会是什么？',
  //           detail: ['A一千万的支票',
  //             'B我提到过的球鞋，游戏机，吃的等各类物品',
  //             'C她的户口本和一句“我愿意”',
  //             'D周游世界的双人旅行套票'
  //           ]
  //         },
  //         {
  //           title: '5当你的恋人没有回你的信息的时候你会怎么想？（必出）',
  //           detail: ['A手机不会丢了吧？',
  //             'B估计在忙，一会再说',
  //             'C生气了？我又哪里做的不对了吗？',
  //             'D在干嘛？和谁？男的女的？'
  //           ]
  //         },
  //         {
  //           title: '6如果女友只剩下一个优点，你希望是哪一个？（必出）',
  //           detail: ['A美丽大方',
  //             'B孝顺持家',
  //             'C 快乐阳光',
  //             'D温柔体贴'
  //           ]
  //         },
  //       ],
  //       que02: [
  //         {
  //           title: '1和女友约好逛街，但临时有重要的事情不能陪同，你会怎么做？',
  //           detail: ['A从来都不理解拍照的乐趣在哪，但是让我去我就去喽',
  //             'B去也可以，但是我想要买PS4你也得同意',
  //             'C上次“Tony”老师拍的太土气了，这次我要选个更好的',
  //             'D我们出游加自拍不好吗？情侣照太统一，没特色啊。'
  //           ]
  //         },
  //         {
  //           title: '2相处中，如果有对她不爽的地方，你会直接说出来吗？',
  //           detail: ['A会，不喜欢拐弯抹角，爱就坦荡荡',
  //             'B要看什么事，有的行，有的没必要',
  //             'C不会，说了也没用，默默想办法改变她',
  //             'D协商讨论，给双方一个解释和理解的空间'
  //           ]
  //         },
  //         {
  //           title: '3和女友争吵过后你通常会怎么做？',
  //           detail: ['A暂时冷战，双方都冷静一下',
  //             'B不管对错，先道歉哄哄她',
  //             'C有些事情不能一味让步',
  //             'D算了，就顺着她'
  //           ]
  //         },
  //         {
  //           title: '4请人吃饭，别人说“随便吃点就好”，通常你会怎么做？',
  //           detail: ['A打开软件找几家点评高的给对方做选择',
  //             'B随便在附近找家最方便的地方去吃',
  //             'C直接带去自己觉得比较好的地方去吃',
  //             'D侧面沟通了解对方的喜好，再决定吃哪家'
  //           ]
  //         },
  //         ]
  //     },
  //     woman: {
  //       each: ['女王', '文艺女', '傻白甜', '小妖精', '小公主', '经济适用'],
  //       que01: [
  //         {
  //           title: '1你喜欢热闹的场合还是安静的场合？',
  //           detail: ['A我是一个安静的文艺女青年',
  //             'B我喜欢在热闹的场合中光芒四射',
  //             'C比较分裂，中午看书，晚上PARTY',
  //             'D喜不喜欢主要看心情，不看场合'
  //           ]
  //         },
  //         {
  //           title: '2你对异地恋怎么看？',
  //           detail: ['A不接受异地恋，我希望他能陪在我身边',
  //             'B如果没办法可以接受，毕竟网络沟通很便捷',
  //             'C自己身边诱惑很多，担心自己把持不住',
  //             'D恋人身边诱惑很多，担心他把持不住'
  //           ]
  //         },
  //         {
  //           title: '3你觉得什么样的男生交不到女朋友？',
  //           detail: ['A大男子主义过于旺盛的',
  //             'B斤斤计较算计过多的',
  //             'C多情风流善于套图的',
  //             'D心细如GAY的'
  //           ]
  //         },
  //         {
  //           title: '4当你的恋人没有回你的信息的时候你会怎么想？',
  //           detail: ['A手机不会丢了吧？',
  //             'B估计在忙，一会再说',
  //             'C生气了？我又哪里做的不对了吗？',
  //             'D在干嘛？和谁？男的女的？'
  //           ]
  //         },
  //         {
  //           title: '5你觉得以下哪件事情让你很纠结？',
  //           detail: ['A留长发还是剪短发？',
  //             'B继续减肥还是享受美食？',
  //             'C想买浅色衣服又怕容易弄脏？',
  //             'D想早起却总睡过头？'
  //           ]
  //         },
  //         {
  //           title: '6相亲过后听到男方说“我们以后一定要保持联系啊”，你觉得这句话的潜台词意思是？',
  //           detail: ['A“我们没有下次了”',
  //             'B“我对你印象深刻”',
  //             'C“先联系一下日后增进了解”',
  //             'D“这是一种脚踩多船的套路”'
  //           ]
  //         },
  //       ],
  //       que02: [
  //         {
  //           title: '1和女友约好逛街，但临时有重要的事情不能陪同，你会怎么做？',
  //           detail: ['A从来都不理解拍照的乐趣在哪，但是让我去我就去喽',
  //             'B去也可以，但是我想要买PS4你也得同意',
  //             'C上次“Tony”老师拍的太土气了，这次我要选个更好的',
  //             'D我们出游加自拍不好吗？情侣照太统一，没特色啊。'
  //           ]
  //         },
  //         {
  //           title: '2相处中，如果有对她不爽的地方，你会直接说出来吗？',
  //           detail: ['A会，不喜欢拐弯抹角，爱就坦荡荡',
  //             'B要看什么事，有的行，有的没必要',
  //             'C不会，说了也没用，默默想办法改变她',
  //             'D协商讨论，给双方一个解释和理解的空间'
  //           ]
  //         },
  //         {
  //           title: '3和女友争吵过后你通常会怎么做？',
  //           detail: ['A暂时冷战，双方都冷静一下',
  //             'B不管对错，先道歉哄哄她',
  //             'C有些事情不能一味让步',
  //             'D算了，就顺着她'
  //           ]
  //         },
  //         {
  //           title: '4请人吃饭，别人说“随便吃点就好”，通常你会怎么做？',
  //           detail: ['A打开软件找几家点评高的给对方做选择',
  //             'B随便在附近找家最方便的地方去吃',
  //             'C直接带去自己觉得比较好的地方去吃',
  //             'D侧面沟通了解对方的喜好，再决定吃哪家'
  //           ]
  //         },
  //       ]
  //     },
  //  }
module.exports.wenquest = wenquest;