// pages/activity/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: '/images/tou.jpg',
    t_eva: '',
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/images/star0.png',
    selectedSrc: '/images/star.png',
    halfSrc: '/images/halfStar.png',
    key: 0,//评分
    //flag2: 5
    thisclass: {
      y: '',
      m: '',
      d: '',
      h: '',
      min: '',
      course_name: '',
      teacher: ''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

  },
  selectLeft(e) {
    var key=e.currentTarget.dataset.key;
    if (e.currentTarget.dataset.key==0.5&&this.data.key==0.5){
      this.setData({
        key: ''
      })
    }else{
      this.setData({
        key: key
      })
    }
  },
  selectRight(e) {
    
    var key = e.currentTarget.dataset.key;
    this.setData({
      key: key
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