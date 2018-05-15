// pages/num01/num01.js
import wenquest from  "../../utils/wenquest.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:'block',
      playing:true,
      pause:false,
      showP:true,
      shows: true,
      num:0,
      opacity:.1,
      select:-1,
      background:'#000',
      src01:'../../resource/images/top_01.png',
      src02: '../../resource/images/top_02.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  end: function () {
    var that = this;
    var playOff = that.data.playing;
    var pauseOff = that.data.pause;
    var vedio = that.data.videoCtx;
    vedio.pause();
    this.setData({
      showP: true,
      opacity: 1,
      background: 'rgba(0,0,0,0.1)',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  question: function () {
    var that= this;
    // var num= Math.random()*10;
    // var person =num<=5?1:2;
    // var sex = wx.getStorageSync('sex');
    // // console.log(sex,person);
    // // sex =1;
    // var name = sex ==1?'man':'woman';
    // var page = wx.getStorageSync('page');

    // if (page > 4) {//种类
    //   person = 1;
    // }
    // var que_t = wenquest.wenquest[name]['que0' + person][page].title;
    // var que_d = wenquest.wenquest[name]['que0' + person][page].detail;
    var data = wx.getStorageSync('response');
    console.log(data);
    that.setData({
      que_t: data.data[5].title,
      que_d: data.data[5].answer,
    })
 
  },
  calculation: function () {
      var select = that.data.select;//题目abcd||1234
      var kind = that.data.kind;//1或者2
      var sex = wx.getStorageSync('sex');//性别
      var score = wx.getStorageSync('score'); //分数
     
  },
  addNum: function () {
    var that = this;
    var playOff = that.data.playing;
    var pauseOff = that.data.pause;
    var vedio = that.data.videoCtx
    if (!playOff && !pauseOff) {
      pauseOff =true;
      vedio.pause();
    } 
    console.log(2);
    that.setData({
      pause: true,
      showP: true
    })
  },
  play: function () {
    var that = this;
    var vedio = that.data.videoCtx
    vedio.play();
   
    this.setData({
      playing: false,
      pause: true,
      showP:false,
      shows:false
    })
  },
  pause: function () {
    var that = this;
    var showP = that.data.showP;
    var vedio = that.data.videoCtx;
    if (showP) {
      vedio.play();
      this.setData({
        showP: false,
        opacity:.1,
        background:'#000'
      })
    } else {
      vedio.pause();
      this.setData({
        showP: true,
        opacity: 1,
        background: 'rgba(0,0,0,0.1)'
      })
    } 
  },
  // onPlay: function () {
  //   var that = this;
  //   this.setData({
  //     playing: false
  //   })
  // },
  // onPause: function () {
  //   var that = this;
  //   this.setData({
  //     playing: true
  //   })
  // },
  onReady: function () {
    var that = this;
    var page = 0;
    this.question();
    var btnlink = app.globalData.btnlink;
   var videoCtx = wx.createVideoContext('myVideo');
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false
    innerAudioContext.src = btnlink;
    that.setData({
      innerAudioContext: innerAudioContext,
      videoCtx: videoCtx
    })
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(30).step().translateY(0).step();

    //导出动画
    this.setData({
      animationCon: animation.export()
    })
    setTimeout(function () {
      that.title();
      that.text();
    }, 500)
  },
  text: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration:100,
      timingFunction: 'ease',
    })
    this.animation = animation
    //动画1
    animation.scale(1.1).step().scale(1).step();

    var animation01 = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in',
      delay: 100
    })
    this.animation01 = animation01
    //动画2
    animation01.scale(1.1).step().scale(1).step();

    var animation02 = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in',
      delay:30
    })
    this.animation02 = animation02

    animation02.scale(1.1).step().scale(1).step();
    //动画3
     var animation03 = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in',
      delay:160
    })
    this.animation03 = animation03

    animation03.scale(1.1).step().scale(1).step();

    
    //导出动画
    this.setData({
      animationText: animation.export(),
      animationText01: animation01.export(),
      animationText02: animation02.export(),
      animationText03: animation03.export()
    })
    setTimeout(function () {
        that.next();
    },500)
  },
  next: function () {
    var that = this;
    
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(0).step();
    this.setData({
      animationNext: animation.export(),
    })
  },
  title: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    })
    this.animation = animation

    animation.translateY(0).step();
    //动画2
   

    //导出动画
    this.setData({
      animationTit: animation.export(),
      showT:'block'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  nextQue: function () {
    var that = this;

    var data = wx.getStorageSync('response');
    var select = that.data.select;
    var link = app.globalData.linkurl;
    var arr = wx.getStorageSync('score');
    console.log(select)
    if (select > -1) {
      var chooseData = data.data[5].answer[select-1].id;
      let sho = data.data[5].answer[select-1]
      var askChoose = that.data.choose;
      var answer = app.globalData.answer;
      var sex = wx.getStorageSync('sex');
      wx.request({
        url: answer, //仅为示例，并非真实的接口地址
        data: {
          type: sex,
          qid: data.data[5].id,
          id:chooseData
        },
        success: function (res) {
          console.log(res)
          arr[0] += Number(sho['value1']);
          arr[1] += Number(sho['value2']);
          arr[2] += Number(sho['value3']);
          arr[3] += Number(sho['value4']);
          arr[4] += Number(sho['value5']);
          arr[5] += Number(sho['value6']);
          console.log(arr)
          // var arr2 = [Number(sho['value1']), Number(sho['value2']), Number(sho['value3']), Number(sho['value4']), Number(sho['value5']), Number(sho['value6'])]
          // var arr3 = [Number(sho['value1']), Number(sho['value2']), Number(sho['value3']), Number(sho['value4']), Number(sho['value5']), Number(sho['value6'])];
          var arr3 = [];
          for (var i = 0; i < 6; i++) {
            arr3.push(arr[i]);
          }
          arr3.sort(function (a, b) {
            return a - b;
          })
          var t = arr.indexOf(arr3[5])
          // console.log(t);
          // console.log(arr2[5]);
          wx.request({
            url: app.globalData.picurl,
            data: {
              type: sex,
              value: (t + 1)
            },
            success: function (res) {
              console.log(res.data.data.url);
              wx.setStorageSync('headPic', res.data.data.url)
              wx.reLaunch({
                url: '../radar/index',
              })
            }
          })
          wx.setStorageSync('score', arr);
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease-in',
    
      })
      that.animation = animation

      animation.translateY(300).step();
      //动画2
      var animation01 = wx.createAnimation({
        duration: 100,
        timingFunction: 'ease-in',
        delay: 200
      })
      that.animation01 = animation01

      animation01.translateY(-300).step();
      //动画3
      var animation02 = wx.createAnimation({
        duration: 100,
        timingFunction: 'ease-in',
        delay: 200
      })
      that.animation02 = animation01

      animation02.translateY(-600).step();
      
      console.log(res)
      //导出动画
      that.setData({
      
        animationNext: animation.export(),
        animationTit: animation01.export(),
        animationCon: animation02.export()
      })
      setTimeout(function () {
        that.setData({
          show:'none',
        })
      },200)
    
        }
        })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.pauseBackgroundAudio();
    wx.redirectTo({
      url: '../main/main',
    })
  },
  ask: function (e) {
    var that =this;
    that.setData({
      topShow: 'none'
    })
    var data = wx.getStorageSync('response');
     var ind = e.currentTarget.dataset.t;
     var percent = data.data[5].answer[ind - 1].percent;
     if (percent != 0) {
       percent = (percent + '').split('.')[1].slice(0, 2);
       if (percent.charAt(0) == '0') {
         percent = percent.slice(1, 2)
       }
     }
     var top = (ind-1)*120;
     var topShow = 'block';
     that.setData({
       percent: percent,
       select:ind,
       top: top,
       topShow: topShow
     })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
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