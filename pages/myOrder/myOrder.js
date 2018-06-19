// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    condiNavs: [
      {
        text: '全部',
        id:''
      },
      {
        text: '待付款',
        id: ''
      },
      {
        text: '待收货',
        id: ''
      },
      {
        text: '已完成',
        id: ''
      },
      {
        text: '售后中',
        id: ''
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    current: 4,
    swiperHeight:1000,
    cartLists: [
      {
        select:false,
        name: '鸢尾小铺',
        brandId: 'brand1',
        status: 0,
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
        ]
      },
      {
        select: true,
        name: '鸢尾小铺2',
        brandId: 'brand2',
        status: 1,
        shopLists: [
          {
            shopId: 'shop3',
            src: '/images/ad.png',
            title: '维达蓝色经典系列卫生纸3层140g维达蓝色经典系列卫生纸3层140g',
            size: '维达蓝色经典系列卫生纸3层140g',
            price: '39.99',
            num: 1
          },
          {
            shopId: 'shop4',
            src: '/images/ad.png',
            title: '22222222',
            size: '2222222',
            price: '39.99',
            num: 1
          }
        ]
      }
    ],
    dai:false
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
    this.setData({
      swiperHeight: this.data.cartLists.length*624
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  //swiper滑动时
  swiperChange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  //订单导航点击事件
  condiNav:function(e){
    this.setData({
      current: e.currentTarget.dataset.index
    })
  },
  //去订单搜索页面
  goSearch:function(){
    console.log(111)
    wx.navigateTo({
      url: '/pages/myOrder/orderSearch',
    })
  },
  //查看详情
  lookDetail:function(){
    wx.navigateTo({
      url: '/pages/myOrder/orderAfter',
    })
  },
  //返回我的
  goBack:function(){
    wx.switchTab({
      url: '/pages/me/me',
    })
  }
})