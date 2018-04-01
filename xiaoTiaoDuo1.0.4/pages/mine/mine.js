var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unionid: "",
    unionid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    // that.data.unionid = app.globalData.unionid;
    wx.getUserInfo({
      success: function (res) {
        console.log("获取用户信息完成！")
        console.log(res)
        that.setData({
          // openid: res.userInfo.openid,
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city,
        })
      },
      fail: function () {
        // fail  
        console.log("获取失败！")
      },
    })
  },

  mineinfo: function () {
    var that = this;
    // console.log(that.data.unionid)
    wx.navigateTo({
      url: './mineinfo/mineinfo'
    })
  },
  mystudy: function () {
    var that = this;
    wx.navigateTo({
      url: './mystudy/mystudy',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  mymessages: function () {
    var that = this;
    wx.navigateTo({
      url: './messages/messages',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  comment() {
    wx.navigateTo({
      url: './comment/comment',
    })
  },
  opinion: function () {
    var that = this;
    wx.navigateTo({
      url: './opinion/opinion',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  setting: function () {
    var that = this;
    wx.navigateTo({
      url: './setting/setting',
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