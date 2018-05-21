// pages/address/getAddress.js
const app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    secondNav: [
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
    ],
    hiddenLoading:true,
    modalHidden:true,
    tips:"数据加载失败",
    toggleLength:true,
    select:0,
    brandLists:[
      {}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that =this;
    app.util.request(app.api.areaList).then(function(res){
      that.setData({
        areas:res.data
      })
    }).catch(function(err){
      console.log(err)
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

  //返回上一页
  goBack:function(){
    
  },
  //隐藏对话框
  modalBindcancel:function(){
    this.setData({
      modalHidden:true
    })
  },
  //点击切换二级导航隐藏显示部分
  toggleLength: function () {
    this.setData({
      toggleLength: !this.data.toggleLength
    })
  },
  //切换好评度
  toggleEvalute:function(){
    let select = this.data.select;
    if(select==0){
      this.setData({
        select:1
      })
    }
    if (select == 1) {
      this.setData({
        select: 2
      })
    }
    if (select == 2) {
      this.setData({
        select: 1
      })
    }
  },
  search:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})