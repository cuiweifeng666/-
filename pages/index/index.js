//index.js
//获取应用实例
const app = getApp()
let loop = null;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    value:'最多输入可8个字符',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeValue: function (e) {
     var that = this;
     var val = e.detail.value;
     this.setData({
       value: val
     })
     console.log(val,that.data)
  },
  codeText: function () {
    var that = this;
    var val = that.data.value;
    console.log('最多输入可8个字符'.indexOf(val))
    if ('最多输入可8个字符'.indexOf(val) > -1) {
      this.setData({
        value:''
      })
      console.log(val, that.data)
    }
  },
  onShow: function(){
   
    console.log(2)
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    // wx.playBackgroundAudio();
    backgroundAudioManager.onTimeUpdate(
      function (e) {
        wx.getBackgroundAudioPlayerState({
          success: function (res) {
            if (res.currentPosition > 4) {
              backgroundAudioManager.seek(0)
            }
          }
        })
      }
    )
  },
heart: function() {
  var that = this;
  var animation = wx.createAnimation({
    duration: 1000,
    timingFunction: 'ease-in',
  })
  this.animation = animation

  animation.scale(1.3).step().scale(1.1).step();

  //导出动画
  this.setData({
    animationbtn: animation.export()
  })
  loop = setTimeout(function () {
    that.heart();
  }, 2000)
},
  onHide: function () {
    wx.pauseBackgroundAudio();
    // this.heart();
    clearTimeout(loop);
    wx.redirectTo({
      url: '../main/main'
    });

  },
  onLoad: function () {
    // const ctx = wx.createCanvasContext('c1');
    // ctx.drawImage('../../resource/images/sour_all.png', 36, 100, 308, 414)
    // ctx.draw()
    // const ctx02 = wx.createCanvasContext('c2');
    // var t = 100;
    // setInterval(function () {
    //   t -= 20;
     
    //   ctx02.drawImage('../../resource/images/wave.png', 40, t, 600, 300)
    //   ctx02.draw()
    //    ctx.drawImage('../../resource/images/sour_all.png', 36, 100, 308, 414)
    //   ctx.draw()
    // },200)
      // var animation = wx.createAnimation({
      //   duration: 500,
      //   timingFunction: 'ease',
      // })
      // this.animation = animation

      // animation.scale(2, 2).step().scale(1, 1).step();

      // //导出动画
      // this.setData({
      //   animationData: animation.export()
      // })
    var left = 0,top=0;
    var that =this;
    // setInterval(function () {
    //     left = left -50;
    //     top = top -50;
    //     that.setData({
    //       mleft:left,
    //       mtop: top
    //     })
    // },200)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  manBtn: function (e) {
      var that =this;
      that.setData({
        sureShow: 'none',
      })
      //导出动画
      that.setData({
        sureShow:'block',
        sureLeft:60,
        choose:1,
      })
  },
  womanBtn: function (e) {
    var that = this;
    that.setData({
      sureShow: 'none',
    })
    //导出动画
    that.setData({
      sureShow: 'block',
      sureLeft: 290,
      choose: 2,
    })
  },
  animationCon: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(0).step();

    //导出动画
    this.setData({
      animationCon: animation.export()
    })
   
  },
  onReady: function () {
    var that = this;
  
    var btnlink = app.globalData.btnlink;
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false
    innerAudioContext.src = btnlink;
    that.setData({
      innerAudioContext: innerAudioContext
    })
    setTimeout(function () {
      that.animationbtn();
      that.animationCon();
    }, 300)
    setTimeout(function () {
      that.heart();
    }, 500)

  },
  animationbtn: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(0).step();

    //导出动画
    this.setData({
      animationbtn: animation.export(),
      load:true
    })
  },
  btnClick: function (e) {
    var that =this;
    that.data.innerAudioContext.play()
    var load = that.data.load;
    var askChoose = that.data.choose;
    if (load && askChoose>0) {
      
      var link = app.globalData.linkurl;
      wx.request({
        url: link, //仅为示例，并非真实的接口地址
        data: {
          type: askChoose
        },
        success: function (res) {
      
          var animation = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-in',
          })
          that.animation = animation
          wx.setStorageSync('sex', askChoose)
          animation.translateY(600).step();
          var animation01 = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease',
          })
          that.animation01 = animation01

          animation01.translateY(-1000).step();
          //导出动画
          that.setData({
            animationbtn: animation.export(),
            animationCon: animation01.export()
          })
          wx.setStorageSync('response', res.data);
          wx.reLaunch({
            url: '../main/main',
          })
        }
      })
      
    }
  }
})
