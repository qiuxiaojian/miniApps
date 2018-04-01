// pages/activity/publish_info/publish_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    random: '',
    img_arr: [],
    postList: '',
    videoPath: []
    // videoPath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var arr=[1,2,5,8,9,6,3]
    // for (var i in arr){
    //   console.log(i)
    // }
    var that = this;
    var userInfo = wx.getStorageSync('userInfo')
    that.data.postList = wx.getStorageSync('postList')
    console.log(that.data.postList)
    console.log(userInfo)
    that.setData({
      random: Math.random() * 10000 + 100,
      userInfo: userInfo
    })
  },

  // 选择图片
  upimg() {
    var that = this;
    wx.showModal({
      title: '添加类型',
      content: '主人,请选择要添加的媒体类型',
      cancelText: '添加图片',
      confirmText: '添加视频',
      cancelColor: '#3CC51F',
      success(e) {
        // console.log(e)
        if (e.cancel == true) {
          console.log('添加图片')
          wx.chooseImage({
            success: function (res) {
              console.log(res)
              that.setData({
                img_arr: that.data.img_arr.concat(res.tempFilePaths)
              })
            },
          })
        } else if (that.data.videoPath.length < 2) {
          console.log('添加视频')
          wx.chooseVideo({
            success(e) {
              that.setData({
                videoPath: that.data.videoPath.concat(e.tempFilePath)
              })
              // that.data.videoPath= e.tempFilePath;
              // console.log(that.data.videoPath)
            }
          })
        }
        else {
          wx.showModal({
            title: '提示',
            content: '最多添加两个视频文件',
          })
        }

      }
    })

  },
  // 表单数据提交
  formSubmit(res) {
    var that = this;
    var item = res.detail.value;
    console.log(item)
    var obj = {
      portrait: that.data.userInfo.avatarUrl,
      name: item.author,
      content: item.content,
      imgSrc: [],
      videoSrc: '',
      time: '2018/08/08/15:00',
      zan: '',
      zan_name: [],
      commentList: [],
      form: false,
      ping: false
    };
    // obj.imgSrc.concat(that.data.img_arr)
    // console.log(obj.imgSrc.concat(that.data.img_arr))

    obj.imgSrc = that.data.img_arr;
    // if (that.data.videoPath.length>3){
    // console.log('你选择的图片超出2张')
    // that.data.videoPath.splice(-2,2)
    obj.videoSrc = that.data.videoPath;
    // console.log(that.data.videoPath)
    // }else{
    // obj.videoSrc = that.data.videoPath;
    // }

    console.log(obj)
    // obj.videoSrc = 'http://p3kkiwyka.bkt.clouddn.com/alisa/video/JS01.mp4';
    that.data.postList.unshift(obj)
    console.log(that.data.postList)

    wx.setStorageSync('postList', that.data.postList)
    // console.log(that.data.postList)
    // console.log(item)
    // that.setData({

    // })
    console.log('数据发表成功')
    wx.showToast({
      title: '发表成功',
      duration: 500,
      success() {
        wx.redirectTo({
          url: '../looking/looking',
        })
      }
    })

  },


  onViewTap(e) {
    var that = this;
    console.log(e)
    var idx = e.currentTarget.dataset.index;
    wx.previewImage({
      urls: [that.data.img_arr[idx]],
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