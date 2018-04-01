Page({

  /**
   * 页面的初始数据
   */
  data: {

    item_img: [
      "/images/news/1.jpg", "/images/news/1.jpg", "/images/news/1.jpg"
    ],
    substance: false,
    showModalStatus: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 发表内容
  publish_info(e) {

    wx.navigateTo({
      url: './publish_info/publish_info',
    })
  },
  // 课堂点评
  comment() {
    wx.navigateTo({
      url: './comment/comment',
    })
  },
  score() {
    wx.showModal({
      title: '你的课堂得分',
      content: '老师还没给你评分，请稍后再进行查询',
    })
  },
  uploading() {
    wx.navigateTo({
      url: './uploading/uploading',
    })
  },
  looking(){
    wx.navigateTo({
      url: './looking/looking',
    })
  },
  onClassTap() {
    this.setData({
      substance: false
    })
  },
  onKewaiTap() {
    this.setData({
      substance: true
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