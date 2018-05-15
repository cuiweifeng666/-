// pages/main/main.js
var loop =null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remind:'加载中',
    percent:0,
    isDown:false,
    mleft:0,
    mtop:0,
    display:'block',
    titleLeft: 260,
    showL:false
  },
  goToIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.playBackgroundAudio()
    
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      let num =0;
      backgroundAudioManager.onTimeUpdate(
       function (e) {
              num++;
              if (num >56) {
                wx.seekBackgroundAudio({position:0})
                num=0;
              }
        }
      )
     
     
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
   
    // backgroundAudioManager.onEnded(function (e) {
    //   console.log(2);
    //   wx.playBackgroundAudio();
    // })
    wx.setStorageSync('score', [0, 0, 0, 0, 0, 0]);
    var that = this;
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false
    innerAudioContext.src = 'http://testgame.cjcp.cn/static/home/music/m1.mp3';
    that.setData({
      innerAudioContext: innerAudioContext,
      showL:true
    })
    setTimeout(function () {
      that.setData({
        remind: '',
        percent:100,
        isDown: true
      });
    }, 1000);
    var height =0;
    var mleft = that.data.mleft, mtop = that.data.mtop;
    var move = setInterval(function () {
      if (mleft <-800) {
        mleft = 0
        
      }
        mleft -=6;
      if (mtop < -460) {
        mtop = -460;
        clearInterval(move);
        // wx.redirectTo({
        //   url: '../index/index',
        // });
        that.born();
        that.setData({
          display:'none'
        })
      }
      mtop -= 10; 
      height = Math.floor(mtop*10/-46);
      if (height > 100) {
        height =100;
      }
      that.setData({
        mleft: mleft,
        mtop: mtop,
        height: height
      })
    },50)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.btnfun();
    // wx.reLaunch({
    //   url: '../index/index',
    // })
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    wx.playBackgroundAudio();
    backgroundAudioManager.onTimeUpdate(
      function (e) {
        wx.getBackgroundAudioPlayerState({
          success: function (res) {
            if (res.currentPosition >56) {
              backgroundAudioManager.seek(0)
            }
          }
        })
      }
    )
    
    // var that = this;
    // setTimeout(function () {
    //   that.setData({
    //     remind: '',
    //     percent: 100,
    //     isDown: true
    //   });
    // }, 1000);
    // var height = 0;
    // var mleft = that.data.mleft, mtop = that.data.mtop;
    // var move = setInterval(function () {
    //   if (mleft < -800) {
    //     mleft = 0

    //   }
    //   mleft -= 6;
    //   if (mtop < -460) {
    //     mtop = -460;
    //     clearInterval(move);
    //     // wx.redirectTo({
    //     //   url: '../index/index',
    //     // });
    //     that.born();
    //     that.setData({
    //       display: 'none'
    //     })
    //   }
    //   mtop -= 10;
    //   height = Math.floor(mtop * 10 / -46);
    //   if (height > 100) {
    //     height = 100;
    //   }
    //   that.setData({
    //     mleft: mleft,
    //     mtop: mtop,
    //     height: height
    //   })
    // }, 50)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.btnfun()
    clearTimeout(loop);
    wx.pauseBackgroundAudio();
    wx.redirectTo({
      url: '../main/main'
    });
   
      
  },
  born: function () {
    
    var that =this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.scale(1, 1).step().scale(.9, .9).step().scale(1, 1).step();
    //导出动画
    // setTimeout(function () {
      that.setData({
        animation01: animation.export()
      })
    // }, 600)
    //动画2
    var animation01 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation01 = animation01

    animation01.scale(1, 1).step().scale(.9, .9).step().scale(1, 1).step();
    //导出动画
    setTimeout(function () {
      that.setData({
        animation02: animation01.export()
      })
    }, 600)
    var animation02 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation02 = animation02

    animation02.scale(1, 1).step().scale(.9, .9).step().scale(1, 1).step();
    //导出动画
    setTimeout(function () {
      that.setData({
        animation03: animation02.export()
      })
    }, 1200)
    setTimeout(function () {
      that.manMove();
    }, 1800)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  se: function () {
    
  },
  beforeleave: function () {
    var that = this;//animationTop
    var load = that.data.load;
    
    that.data.innerAudioContext.play()
   
    if (load) {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.translateY(500).step();
      var animationtop = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationtop = animationtop
      animationtop.translateY(-3000).step();

      //导出动画
      that.setData({
        animationTop: animationtop.export(),
        animationbtn: animation.export(),
      })
      wx.reLaunch({
        url: '../index/index',
      })
    }
  },
  manMove: function() {
        var that = this;
  var animation = wx.createAnimation({
    duration: 100,
    timingFunction: 'ease-in',
  })
    this.animation = animation

    animation.translateX(0).step();

  //导出动画
    that.setData({
      animationman: animation.export()
    })
    setTimeout(function () {
      that.rotate();
    },100)
  },
  woman: function () {
    var that = this;
  var animation = wx.createAnimation({
    duration: 100,
    timingFunction: 'ease-in',
  })
    this.animation = animation

    animation.scaleY(1).skewY(0).step();

  //导出动画
  
    that.setData({
      animationwoman: animation.export()
    })
    setTimeout(function () {
      that.woman01();
  }, 200)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  rotate: function () {
      var that = this;
  var animation = wx.createAnimation({
    duration: 100,
    timingFunction: 'ease-in',
  })
    this.animation = animation

    animation.rotateZ(0).scale(1).skew(0).translateX(0).step();

  //导出动画
  that.setData({
    animationman01: animation.export()
  })
  setTimeout(function () {
      that.woman();
      that.setData({
        titleLeft:110
      })
  },100)
  },
  woman01: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.opacity(1).translateY(-20).step().translateY(0).step();

    //导出动画
      that.setData({
        animationwoman01: animation.export(),
        load:true
      })
      setTimeout(function () {
        that.btnfun();
    }, 200)
      // setInterval(function () {
      //   that.btnfun();
      // }, 1000)
  },
  btnfun: function () {
      var that = this;
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
        this.animation = animation

        animation.scale(1.4, 1.4).step().scale(1.2, 1.2).step();

      //导出动画
      this.setData({
        animationbtn: animation.export(),
      
      })
      loop =  setTimeout(function () {
        that.btnfun();
      }, 2000)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})