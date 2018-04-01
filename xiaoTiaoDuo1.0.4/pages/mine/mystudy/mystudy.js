// pages/mine/mystudy/mystudy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:"",
    show1: true,
    show2: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var url = 'https://www.alisadance.cn/weixinLapp/get-ranking?unionid=' + options.unionid;
    // 获取排名信息数据
    wx.request({
      url: url,
      success: function (res) {
        // console.log(res.data.errmsg)
        // console.log(res.data)
        that.setData({
          rankList: res.data.errmsg
        })
        // console.log(rankList)
      }
    })
    // 获取本人练习课时的信息
    var urlme = 'https://www.alisadance.cn/weixinLapp/get-course-hour?unionid=' + options.unionid;
    wx.request({
      url: urlme,
      success: function (res) {
        console.log(res.data)
        that.setData({
          me: res.data
        })
        console.log(res.data)
      }
    })
  },
  btn1: function () {
    this.setData({
      show1: true,
      show2: false
    })
  },
  btn2: function () {
    this.setData({
      show2: true,
      show1: false
    })
  },
  mymessages: function () {
    var that = this;
    wx.navigateTo({
      url: './messages/messages?unionid=' + that.data.unionid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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