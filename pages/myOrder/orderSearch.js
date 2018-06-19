// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchBody:'热门搜索',
    searchHistory:'搜索历史',
    placeholder:'请输入订单关键字',
    searchLists:[
      {
        id:'1',text:'生鲜水果',isSelect:true
      },
      {
        id: '1', text: '生鲜水果生鲜水果', isSelect: true
      },
      {
        id: '1', text: '生鲜水果生鲜水果生鲜水果'
      },
      {
        id: '1', text: '生鲜果'
      },
      {
        id: '1', text: '生鲜果'
      },
      {
        id: '1', text: '生鲜生鲜水果生鲜水果水果'
      },
    ],
    searchHistories: [
      {
        id: '1', text: '生鲜水果'
      },
      {
        id: '1', text: '生鲜水果生鲜水果'
      },
      {
        id: '1', text: '生鲜水果生鲜水果生鲜水果'
      },
      {
        id: '1', text: '生鲜果'
      },
      {
        id: '1', text: '生鲜果'
      },
      {
        id: '1', text: '生鲜生鲜水果生鲜水果水果'
      },
    ]
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
  }
})