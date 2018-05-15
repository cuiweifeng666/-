import * as echarts from '../../ec-canvas/echarts.min';
var url=null;
const app = getApp();

// function initChart(canvas, width, height) {
//   const chart = echarts.init(canvas, null, {
//     width: width,
//     height: height
//   });
//   canvas.setChart(chart);

//   var option = {
//     backgroundColor: "",
//     color: ["#37A2DA", "#FF9F7F"],
//     tooltip: {},
//     xAxis: {
//       show: false
//     },
//     yAxis: {
//       show: false
//     },
//     radar: {
//       // shape: 'circle',
//       indicator: [{
//         name: '食品',
//         max: 500
//       },
//       {
//         name: '玩具',
//         max: 500
//       },
//       {
//         name: '服饰',
//         max: 500
//       },
//       {
//         name: '绘本',
//         max: 500
//       },
//       {
//         name: '医疗',
//         max: 500
//       },
//       {
//         name: '门票',
//         max: 500
//       }
//       ]
//     },
//     series: [{
//       name: '预算 vs 开销',
//       type: 'radar',
//       data: [{
//         value: [430, 340, 500, 300, 490, 400],
//         name: '预算',
//         areaStyle: {
//           normal: {
//             color: 'rgba(114, 172, 209, 0.3)'
//           }
//         }
//       },
      
//       ]
//     }]
//   };

//   chart.setOption(option);
//   return chart;
// }



function setOption(chart,option) {
  // var option = {
  //   backgroundColor: "",
  //   color: ["#37A2DA", "#FF9F7F"],
  //   tooltip: {},
  //   xAxis: {
  //     show: false
  //   },
  //   yAxis: {
  //     show: false
  //   },
  //   radar: {
  //     // shape: 'circle',
  //     indicator: [{
  //       name: '食品',
  //       max: 500
  //     },
  //     {
  //       name: '玩具',
  //       max: 500
  //     },
  //     {
  //       name: '服饰',
  //       max: 500
  //     },
  //     {
  //       name: '绘本',
  //       max: 500
  //     },
  //     {
  //       name: '医疗',
  //       max: 500
  //     },
  //     {
  //       name: '门票',
  //       max: 500
  //     }
  //     ]
  //   },
  //   series: [{
  //     name: '预算 vs 开销',
  //     type: 'radar',
  //     data: [{
  //       value: [430, 340, 500, 300, 490, 400],
  //       name: '预算',
  //       areaStyle: {
  //         normal: {
  //           color: 'rgba(114, 172, 209, 0.3)'
  //         }
  //       }
  //     },

  //     ]
  //   }]
  // };
  chart.setOption(option);
  
}
Page({
  onShareAppMessage: function (res) {

  },
  data: {
    showCanvas:true,
    headPic:'',
    ec: {
      // onInit: initChart
      lazyLoad: true 
    }
  },

  onShow: function () {
   
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.onTimeUpdate(
      function (e) {
        wx.getBackgroundAudioPlayerState({
          success: function (res) {
            if (res.currentPosition > 56) {
              backgroundAudioManager.seek(0)
            }
          }
        })
      }
    )
  },
  onHide: function () {
    wx.redirectTo({
      url: '../main/main',
      // url:''
    })
  },
  onReady: function () {
    var that = this;
    var sex = wx.getStorageSync('sex');
    var score = wx.getStorageSync('score');
    that.setData({
      headPic: wx.getStorageSync('headPic')
    })
    this.ecComponent = this.selectComponent('#mychart-dom-graph');
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      let option;
      if (sex == '1') {
       option = {
        backgroundColor: "",
        color: ["#37A2DA", "#FF9F7F"],
        tooltip: {},
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        radar: {
          // shape: 'circle',
          indicator: [{
            name: '直男',
            max: 120
          },
          {
            name: '痞',
            max: 120
          },
          {
            name: '大叔',
            max: 120
          },
          {
            name: '霸道总裁',
            max:120
          },
          {
            name: '少女心',
            max: 120
          },
          {
            name: '经济适用',
            max: 120
          }
          ]
        },
        series: [{
          name: '预',
          type: 'radar',
          data: [{
            value: score,
            name: '预算',
            areaStyle: {
              normal: {
                color: 'rgba(114, 172, 209, 0.3)'
              }
            }
          },

          ]
        }]
      };
      } else if (sex == 2) {
        option = {
          backgroundColor: "",
          color: ["#37A2DA", "#FF9F7F"],
          tooltip: {},
          xAxis: {
            show: false
          },
          yAxis: {
            show: false
          },
          radar: {
            // shape: 'circle',
            indicator: [{
              name: '女王',
              max: 120
            },
            {
              name: '文艺女',
              max: 120
            },
            {
              name: '傻白甜',
              max: 120
            },
            {
              name: '小妖精',
              max: 120
            },
            {
              name: '小公主',
              max: 120
            },
            {
              name: '经济适用',
              max: 120
            }
            ]
          },
          series: [{
            name: '预',
            type: 'radar',
            data: [{
              value: score,
              name: '预算',
              areaStyle: {
                normal: {
                  color: 'rgba(114, 172, 209, 0.3)'
                }
              }
            },

            ]
          }]
        };
      }
      // option = {
      //   backgroundColor: "",
      //   color: ["#37A2DA", "#FF9F7F"],
      //   tooltip: {},
      //   xAxis: {
      //     show: false
      //   },
      //   yAxis: {
      //     show: false
      //   },
      //   radar: {
      //     // shape: 'circle',
      //     indicator: [{
      //       name: '女王',
      //       max: 120
      //     },
      //     {
      //       name: '文艺女',
      //       max: 120
      //     },
      //     {
      //       name: '傻白甜',
      //       max: 120
      //     },
      //     {
      //       name: '小妖精',
      //       max: 120
      //     },
      //     {
      //       name: '小公主',
      //       max: 120
      //     },
      //     {
      //       name: '经济适用',
      //       max: 120
      //     }
      //     ]
      //   },
      //   series: [{
      //     name: '预',
      //     type: 'radar',
      //     data: [{
      //       value: [20,30,40,80,100,50],
      //       name: '预算',
      //       areaStyle: {
      //         normal: {
      //           color: 'rgba(114, 172, 209, 0.3)'
      //         }
      //       }
      //     },

      //     ]
      //   }]
      // };
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });

      setOption(chart,option);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      this.setData({
        isLoaded: true,
        isDisposed: false
      });
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
    setTimeout(function () {
    that.ecComponent.canvasToTempFilePath({
      success:  function (res) {
            console.log(res.tempFilePath) 
            var t = res.tempFilePath;
            that.setData({
              showCanvas:false,
            canvas: res.tempFilePath
          })
            // const ctx = wx.createCanvasContext('#canvas')
            // ctx.drawImage(t, 0, 0, 150, 100)
            // ctx.draw()
            
      }
    });
    },1000)
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.src = 'http://testgame.cjcp.cn/static/home/music/m1.mp3';
    that.setData({
      innerAudioContext: innerAudioContext
    })
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(0).step();
    //动画2
    var animation01 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation01 = animation01

    animation01.translateY(0).step();

    var animationScale = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in',
    })
    this.animationScale = animationScale

    animationScale.scale(1).opacity(1).step();
    //导出动画
    this.setData({
      animationCon: animation.export(),
      
    })
    setTimeout(function () {
      that.setData({
        animationDown: animation01.export(),
        animationScale: animationScale.export()
      })
    }, 500)
  },
  more: function () {
    var that =this;
    that.data.innerAudioContext.play()
  },
  down: function () {
    var that = this;
    that.data.innerAudioContext.play()
  },
  scan: function () {
    var that = this;
        // wx.previewImage({
        //   // current: current,
        //   urls: ['http://testgame.cjcp.cn/static/home/images/ppt/banner-1.jpg']
        // })
    // wx.downloadFile({
    //   url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   success: function (res) {
    //     let path = res.tempFilePath
    //       wx.saveImageToPhotosAlbum({
    //         filePath: path,
    //         success: function (res) {
    //           console.log(res)
    //         },
    //         fail: function (res) {
    //           console.log(res)
    //           console.log('fail')
    //         }
    //       })
    //   }
    // }) 
  }
    
});
