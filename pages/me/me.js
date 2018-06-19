// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meAd:{
      url:'',
      src:'../../images/ad.png'
    },
    meServerLists:[
      { url: '/pages/beStoreKeeper/beStoreKeeper',src:'../../images/me_btn_wykd.png',text:'我要开店'},
      { url: '/pages/me/attentionGoods', src: '../../images/me_btn_wdgz.png', text: '我的关注' },
      { url: '/', src: '../../images/me_btn_wdye.png', text: '我的余额' },
      { url: '/', src: '../../images/me_btn_wdjf.png', text: '我的积分' },
      { url: '/', src: '../../images/me_btn_ddts.png', text: '订单投诉' },
      { url: '/', src: '../../images/me_btn_dzgl.png', text: '地址管理' },
      { url: '/', src: '../../images/me_btn_zhaq.png', text: '账户安全' },
      { url: '/pages/me/browseHistroy', src: '../../images/me_btn_lljl.png', text: '浏览记录' },
      { url: '/', src: '../../images/me_btn_shgl.png', text: '审核管理' },
      { url: '/', src: '../../images/me_btn_mhsjbsq.png', text: '卖货商级别申请卖货商级别申请' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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