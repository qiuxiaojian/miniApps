// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/images/1.jpg", "/images/2.jpg", "/images/3.jpg"
    ],
    postList:"",
    show: 'none',
    userInfo:'',
    z_index:'-1',
    video_top: '38px',
    video_url:'',
    transimit_idx:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var postList = wx.getStorageSync('postList')
    var userInfo = wx.getStorageSync('userInfo')
    this.setData({
      postList:postList,
      userInfo: userInfo
    })

  },

  scrollTopFun(e){
    // var scrollTop = e.detail.scrollTop
    if (e.detail.scrollTop >= 36) {
      this.setData({
        video_top: 0
      })
    } else {
      this.setData({
        video_top: '38px'
      })

    }
  },
  onShowVideo(e){
  
    this.videoContext = wx.createVideoContext('otherVideo')
    console.log(e)
    // var idx = e.currentTarget.dataset.index;
    var transimit_idx = e.currentTarget.dataset.index;


    var videoSrc= this.data.postList[transimit_idx].videoSrc
    this.setData({
      video_url: videoSrc,
    })
    if(this.data.show=='none'){
      this.starMovie();
      this.setData({
        show: 'block'
      })
    }else{
      this.stopMovie();
      this.setData({
        show: 'none'
      })
    }

  },



  // 列举开启/关闭视频函数
  starMovie(){
    this.videoContext.play();
  },
  stopMovie() {
    this.videoContext.pause();
  },

  goToMore(e){
wx.navigateTo({
  url: 'more_show/more_show',
})
  },

  // onMultiTap() {
  //   this.setData({
  //     show: false
  //   })
  // },
  // onImgShowTap() {
  //   var videoContext = wx.createVideoContext("index")
  //   videoContext.pause()
  //   this.setData({
  //     show: true
  //   })

  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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