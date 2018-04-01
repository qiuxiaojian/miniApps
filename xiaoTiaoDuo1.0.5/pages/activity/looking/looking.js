

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: '',
    nickName: '',
    userInfoAvatar: "",
    form: false,
    com: "",
    com_idx: "",
    zan_name: [],
    zan_txt: false,
    container_idx: "",
    time_idx: '',  //记录点击评论时的索引,在失去焦点的时候调用操作.
    transit_idx: '',
    transit_name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
      wx.getUserInfo({
        success(res) {
          console.log("获取用户信息完成！")
          that.setData({
            // openid: res.userInfo.openid,
            nickName: res.userInfo.nickName,
            userInfoAvatar: res.userInfo.avatarUrl,
            province: res.userInfo.province,
            city: res.userInfo.city,
          })
        },
        fail() {
          console.log("获取失败！")
        },
      })
    var postList = wx.getStorageSync('postList')
    that.setData({
      postList: postList
    })

  },

  showModalEvent() {
    wx.showModal({
      title: '发表感想',
      content: '主人，您是否想发表感想',
      success() {
        wx.navigateTo({
          url: '../publish_info/publish_info',
        })
      }
    })
  },
  // 评论区图片预览
  onComPreTap(e) {
    var that = this;
    var idx = e.currentTarget.dataset.index;
    setTimeout(function () {      //使用延时操作使得不与屏幕事件点击造成不必要的冲突.
      var _this = that;
      var num = that.data.container_idx;
      var imgPreUrl = _this.data.postList[num].imgSrc[idx];
      wx.previewImage({
        // current: '_this.data.imgPreUr', // 当前显示图片的http链接
        urls: [imgPreUrl] // 需要预览的图片http链接列表
      })
  
    }, 1)

  },

  onZanTap(e) {
    var that = this;
    var com_idx = e.currentTarget.dataset.index;
    var form1 = that.data.postList[com_idx].form;
    var form = `postList[${com_idx}].form`;
    var zan_arr = that.data.postList[com_idx].zan_name;
    // 判断是否已经点赞
    if (!zan_arr.includes(that.data.nickName)) {
      zan_arr.push(that.data.nickName)
      that.setData({
        postList: that.data.postList,
        zan_txt: true
      })
      wx.showToast({
        title: '已点赞',
        duration: 400
      })
      console.log('点赞成功')
    } else {
      var num = zan_arr.indexOf(that.data.nickName)
      zan_arr.splice(num, 1)
      that.setData({
        postList: that.data.postList,
        zan_txt: false
      })
      wx.showToast({
        title: '取消成功',
        duration: 400
      })
      console.log('取消点赞成功')
    }

    that.setData({
      [form]: !form1,
      zan: !that.data.zan,
      form: !that.data.form
    })

    console.log(that.data.zan_name)
  },


  // 删除点赞内容
  onComDelTap(e) {
    var that = this;
    setTimeout(function () {
      var idx = e.currentTarget.dataset.index;
      var num = that.data.container_idx;
      var del_name = that.data.postList[num].commentList[idx].other_name[0];
      console.log(del_name)
      that.setData({
        transit_idx: idx,
        transit_name: del_name
      })
      if (del_name == that.data.nickName) {
        wx.showActionSheet({
          itemList: ['删除'],
          itemColor: 'red',
          success() {
            var _this = that;
            if (del_name == _this.data.nickName) {
              _this.data.postList[num].commentList.splice(idx, 1);
              _this.setData({
                postList: _this.data.postList,
              })
            }

          }
        })
      } else {
        var two_ping = `postList[${idx}].two_ping`;
        that.setData({
          [two_ping]: true,
        })
      }
    }, 1)
  },

  // 评论信息图表点击
  onComTap(e) {
    var that = this;
    //当屏幕点击触发时,所有的form都被设为false,所以延时触发.
    setTimeout(function () {
      var com_idx = e.currentTarget.dataset.index;
      var form1 = that.data.postList[com_idx].form;
      var form = `postList[${com_idx}].form`;
      that.setData({
        [form]: !form1
      })
    }, 1)
  },

  // 评论文字点击
  onPingTap(e) {
    var that = this
    var com_idx = e.currentTarget.dataset.index;
    var form1 = that.data.postList[com_idx].form;
    var form = `postList[${com_idx}].form`
    var focus = `postList[${com_idx}].focus`
    that.setData({
      time_idx: com_idx,
      [focus]: true,
      [form]: !form1
    })
  },


  // 评论区失去焦点出发事件
  onBlurTap(e) {
    var com_idx = e.currentTarget.dataset.index;
    var focus = `postList[${com_idx}].focus`;
    this.setData({
      [focus]: false,
      com: '',
    })
  },
  onBlurTap1(e) {
    var com_idx = e.currentTarget.dataset.index;
    var two_ping = `postList[${com_idx}].two_ping`;
    this.setData({
      com: '',
      [two_ping]: false
    })
  },




  // 评论数据完成
  sub(e) {
    var that = this;
    var com_idx = e.currentTarget.dataset.index;
    var focus = `postList[${com_idx}].focus`;
    var com_info = {
      other_name: []
    };
    com_info.other_name[0] = this.data.nickName;
    com_info.other_content = e.detail.value;
    that.data.postList[com_idx].commentList.push(com_info)

    that.setData({
      [focus]: false,
      postList: that.data.postList,
      com: ''
    })
    wx.showToast({
      title: '发表成功',
      duration: 400
    })
  },

  sub1(e) {
    var that = this;
    var com_idx = e.currentTarget.dataset.index;
    var two_value = e.detail.value;
    setTimeout(() => {
      var num = that.data.container_idx,
        nickName = that.data.nickName,
        idx = that.data.transit_idx,
        com_info = {},
        del_name = that.data.postList[num].commentList[idx].other_name,
        two_ping = `postList[${com_idx}].two_ping`;
      com_info.other_name = [nickName, del_name];
      com_info.other_content = two_value;
      that.data.postList[com_idx].commentList.push(com_info)
      that.setData({
        postList: that.data.postList,
        [two_ping]: false
      })
    }, 1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var zan_name = wx.getStorageSync('zan_name')
    var postList = wx.getStorageSync('postList')
    this.setData({
      zan_name: zan_name,
    })
  },

  onContainerTap(e) {
    this.setData({
      container_idx: e.currentTarget.dataset.index
    })
  },

  // 屏幕点击时,将评论/点赞图标进行隐藏
  onScreenTap() {
    for (let i in this.data.postList){
      this.data.postList[i].form = false;
    }
    this.setData({
      postList: this.data.postList
    })
  }
})