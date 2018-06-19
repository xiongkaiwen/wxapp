// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopLists: [
      {
        shopId: 'shop1',
        src: '/images/ad.png',
        title: '维达蓝色经典系列卫生纸3层140g维达蓝色经典系列卫生纸3层140g',
        size: '维达蓝色经典系列卫生纸3层140g',
        price: '39.99',
        num: 1
      },
      {
        shopId: 'shop2',
        src: '/images/ad.png',
        title: '22222222',
        size: '2222222',
        price: '39.99',
        num: 1
      }
    ],
    tips:"提示文字"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getCurrentPages()[0].route)
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
  // 清除搜索历史
  clearHistory:function(){
    var arr=[];
    this.setData({
      searchHistories:arr
    })
  },
  //返回上一页
  goBack:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  //对话框确定
  modalBindconfirm:function(){

  },
  //对话框取消
  modalBindcancel:function(){
    this.setData({
      modalHidden:true
    })
  },
  //返回
  goBack:function(){
    wx.navigateBack({
      delta:1
    })
  }
})