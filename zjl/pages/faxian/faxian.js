// pages/faxian/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
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
    array1:[
      {
        bigicon:"/images/备忘录.png",
        xiabiao:"备忘录"
      }, {
        bigicon: "/images/电话.png",
        xiabiao: "电话"
      }, {
        bigicon: "/images/计算器.png",
        xiabiao: "计算器"
      }, {
        bigicon: "/images/天气.png",
        xiabiao: "天气"
      }, {
        bigicon: "/images/文件夹.png",
        xiabiao: "文件夹"
      }
    ], array2: [
     {
        bigicon: "/images/主题.png",
        xiabiao: "主题"
      }, {
        bigicon: "/images/应用商店.png",
        xiabiao: "应用商店"
      }, {
        bigicon: "/images/游戏.png",
        xiabiao: "游戏"
      }, {
        bigicon: "/images/指南针.png",
        xiabiao: "指南针"
      }, {
        bigicon: "/images/主题.png",
        xiabiao: "主题"
      }
    ], array3: [{
      pic: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=319913808,1303370889&fm=85&app=2&f=JPEG?w=121&h=75&s=88306A93D0A1671192253C650300F010",
      yonghuming: "#江直树人..#",
      jianjie: "11.2万条热议3.8亿次阅读",
    },{
        pic: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4219592857,549900510&fm=85&app=57&f=JPEG?w=121&h=75&s=5109975578FE5A159E0B02ED0300102B",
        yonghuming: "#首例免疫..#",
        jianjie: "49万条热议12.8亿次阅读",
      }], array4: [{
      pic: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3748326338,191589191&fm=58&bpow=378&bpoh=329",
        yonghuming: "#江直树人..#",
        jianjie: "11.2万条热议3.8亿次阅读",
      }, {
        pic: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1478462948,1682508635&fm=55&app=22&f=JPEG?w=121&h=81&s=A941DF1297B14D805ED110D90300B0B0",
        yonghuming: "#首例免疫..#",
        jianjie: "49万条热议12.8亿次阅读",
      }], array5: [{
      pic: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1224765661,2508818187&fm=55&app=22&f=JPEG?w=121&h=81&s=A1117094C0A302B52C88F386030030A9",
        yonghuming: "#江直树人..#",
        jianjie: "11.2万条热议3.8亿次阅读",
      }, {
        pic: "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=819246304,214997704&fm=85&s=8893CF126D5254CE0069ADDB0300D0B2",
        yonghuming: "#首例免疫..#",
        jianjie: "49万条热议12.8亿次阅读",
      }], array6: [{
      pic: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1968447825,1561065116&fm=85&app=57&f=JPEG?w=121&h=75&s=CDF22DC50A430EDCCC8975160300D090",
        yonghuming: "#江直树人..#",
        jianjie: "11.2万条热议3.8亿次阅读",
      }, {
        pic: "http://img4.imgtn.bdimg.com/it/u=2530910621,2693052849&fm=26&gp=0.jpg",
        yonghuming: "#首例免疫..#",
        jianjie: "49万条热议12.8亿次阅读",
      }],
    //轮播图配置
    autoplay: true,
    interval: 2500,
    duration: 1200,
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected2: true,
      selected3: false,
      selected4: false,
      selected1: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: true,
      selected4: false,
      selected1: false
    })
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