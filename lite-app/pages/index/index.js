//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    handSwiper: ['0.jpg', '1.jpg', '2.jpg', '3.png', '4.jpg'],
    category: [{
        name: '关于我们',
        target: 'myAbout'
      },
      {
        name: '相关案例',
        target: 'nweAbout'
      },
      {
        name: '产品展示',
        target: 'product'
      },
      {
        name: '售后团队',
        target: 'sellServer'
      },
    ]
  },

  handleGoOtherPage(e) {
    console.log(e.currentTarget.dataset.type)
    let target = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '../' + target + '/' + target,
    })
  },

  onLoad: function() {

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