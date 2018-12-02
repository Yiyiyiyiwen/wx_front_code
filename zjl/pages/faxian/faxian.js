// pages/faxian/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
        xinwen1: "蒋劲夫女友被曝...",
        icon1: "/images/first.png",
        xinwen2: "像苏有朋和沙溢",
        icon2: "/images/second.png",
      },
      {
        xinwen1: "江哥",
        icon1: "/images/third.png",
        xinwen2: "上海女性初婚初...",
        icon2: "/images/fourth.png",
      }, {
        xinwen1: "李玉刚粉丝真的...",
        icon1: "/images/fifth.png",
        xinwen2: "首尔断网",
        icon2: "/images/sixth.png",
      }, {
        xinwen1: "浙大硕士毕业论文写吸...",
        icon1: "/images/seventh.png",
        xinwen2: "更多热搜",
        icon2: "/images/gengduoresou.png",
      }
    ],
    //轮播图配置
    autoplay: true,
    interval: 2500,
    duration: 1200,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "../../images/a1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/a2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/a3.jpg"
        },
        {
          "id": 4,
          "imgurl": "../../images/a4.jpg"
        }
      ]
    };
    that.setData({
      lunboData: data.datas
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})