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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  submit(){

   var a= require('../../../utils/nowTime.js');
    console.log(a)
  },
  // 表单数据提交
  formSubmit(res) {
    var time= this.CurentTime()
    var that = this;
    var item = res.detail.value;
    console.log(item)

    var obj = {
      portrait: that.data.userInfo.avatarUrl,
      name: item.author,
      content: item.content,
      imgSrc: [],
      videoSrc: '',
      time: time,
      zan: '',
      zan_name: [],
      commentList: [],
      form: false,
      ping: false
    };
    
    obj.imgSrc = that.data.img_arr;
    obj.videoSrc = that.data.videoPath;

    console.log(obj)
    that.data.postList.unshift(obj)
    console.log(that.data.postList)

    wx.setStorageSync('postList', that.data.postList)

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


     CurentTime() {

    var now = new Date();
    var year = now.getFullYear();       //年  
    var month = now.getMonth() + 1;     //月  
    var day = now.getDate();            //日  

    var hh = now.getHours();            //时  
    var mm = now.getMinutes();          //分  
    var ss = now.getSeconds();           //秒  
    var clock = year + "-";
    if (month < 10)
      clock += "0";
    clock += month + "-";
    if (day < 10)
      clock += "0";

    clock += day + " ";

    if (hh < 10)
      clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";

    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
  }
})