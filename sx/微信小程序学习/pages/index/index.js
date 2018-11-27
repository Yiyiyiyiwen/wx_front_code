//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        id:1,
        name:'IT工作室小鬼',
        tupian:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1285622578,302277335&fm=27&gp=0.jpg',
        funame:'3小时前 来自 微博小程序weibo',
        jiantoushang:'http://img0.imgtn.bdimg.com/it/u=1393073949,1261628001&fm=26&gp=0.jpg',
        jiantou:'http://img5.imgtn.bdimg.com/it/u=1567313487,2980640310&fm=26&gp=0.jpg',
        words:'【王思聪 热狗衣服】王思聪穿热狗卫衣参加IG庆功宴，陈赫前几天穿的就是这个衣服',
        datu:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3486950280,3070988710&fm=11&gp=0.jpg',
        xiamianzi1:'转发',
        xiamianzi2: '评论',
        xiamianzi3: '赞'
      },
      {
        id:2,
        name:'哪里来的沙雕',
        tupian: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=377934783,1794723300&fm=27&gp=0.jpg',
        funame: '3小时前 来自 微博小程序weibo',
        jiantoushang: 'http://img0.imgtn.bdimg.com/it/u=1393073949,1261628001&fm=26&gp=0.jpg',
        jiantou: 'http://img5.imgtn.bdimg.com/it/u=1567313487,2980640310&fm=26&gp=0.jpg',
        words: '【王宝强吐槽张雨绮】《挑战吧太空》中，王宝强吐槽张雨绮，称事儿太多。',
        datu: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4249769036,1040283579&fm=26&gp=0.jpg',
        xiamianzi1: '转发',
        xiamianzi2: '评论',
        xiamianzi3: '赞'
      },
      {
        id:3,
        name:'Happy Everyday真好',
        tupian: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3243445518,1285394533&fm=27&gp=0.jpg',
        funame: '4小时前 来自 微博小程序weibo',
        jiantoushang: 'http://img0.imgtn.bdimg.com/it/u=1393073949,1261628001&fm=26&gp=0.jpg',
        jiantou: 'http://img5.imgtn.bdimg.com/it/u=1567313487,2980640310&fm=26&gp=0.jpg',
        words: '【雪诺被爆出轨】《权力的游戏》“雪诺”基特·哈灵顿与“耶哥蕊特”萝斯·莱斯利戏外也成了一对，去年9月订婚，今年6月结婚。但近日，推特账号EUTkings发布了哈灵顿的多张床照，称一名俄罗斯女模特表示与哈灵顿“厮混”了一个月，时间就在他结婚前没多久。订婚后，仍与该女星保持亲密往来，经常送她礼物，并且二人多次发生关系。她还称雪诺是个瘾君子，爱酗酒，经常神智不清。不过，目前无法证实照片拍摄时间，而哈灵顿方尚未做出回应。',
        xiamianzi1: '转发',
        xiamianzi2: '评论',
        xiamianzi3: '赞'
      },
      {
        id:4,
        name:'D&G Get Out Of China',
        tupian:'http://img5.imgtn.bdimg.com/it/u=2582774989,2656093724&fm=26&gp=0.jpg',
        funame: '4小时前 来自 微博小程序weibo',
        jiantoushang: 'http://img0.imgtn.bdimg.com/it/u=1393073949,1261628001&fm=26&gp=0.jpg',
        jiantou: 'http://img5.imgtn.bdimg.com/it/u=1567313487,2980640310&fm=26&gp=0.jpg',
        words: '霉霉又搞大事情！为男友宣传让粉丝吃狗粮，网友：爱情工作两不误',
        datu: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2364448127,599619497&fm=26&gp=0.jpg',
        xiamianzi1: '转发',
        xiamianzi2: '评论',
        xiamianzi3: '赞'
      },
      {
        id:5,
        name:'拒绝网络暴力',
        tupian:'http://img5.imgtn.bdimg.com/it/u=2997341269,1646013140&fm=26&gp=0.jpg',
        funame: '5小时前 来自 微博小程序weibo',
        jiantoushang: 'http://img0.imgtn.bdimg.com/it/u=1393073949,1261628001&fm=26&gp=0.jpg',
        jiantou: 'http://img5.imgtn.bdimg.com/it/u=1567313487,2980640310&fm=26&gp=0.jpg',
        words: '邓超被保安当成粉丝，保安内心os：这是我职业生涯最尴尬的一次！',
        datu: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2160567820,2867651314&fm=26&gp=0.jpg',
        xiamianzi1: '转发',
        xiamianzi2: '评论',
        xiamianzi3: '赞'
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
