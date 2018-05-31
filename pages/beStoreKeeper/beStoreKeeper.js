// pages/address/getAddress.js
const app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyNavs:[
      { id: 1, text: '热卖套餐' }, { id: 2, text: '热卖套餐' }, { id: 3, text: '热卖套餐' }, { id: 4, text: '热卖套餐' },
    ],
    navIndex:0,
    imgUrls: [
      {
        id: 1,
        lists: [
          {
            id: 1,
            src: '/images/goods.jpg',
            title:'洗护套餐',
            intro:'承包家庭一年洗护所需',
            isSelect:true
          },
          {
            id: 2,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 3,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
        ]
      },
      {
        id: 2,
        lists: [
          {
            id: 21,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 2,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 3,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
        ]
      },

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    current:0
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
  //返回按钮
  goBack:function(){
    wx.navigateBack({
      delta:1
    })
  },
  //swiper滑动时
  swiperChange:function(e){
    this.setData({
      current: e.detail.current
    })
  },
  //导航点点击时候
  swiperNav:function(e){
    this.setData({
      current: e.currentTarget.dataset.index
    })
  },
  //分类导航点击事件
  classifyNavs:function(e){
    this.setData({
      navIndex: e.currentTarget.dataset.index
    })
  },
  //切换select
  toggleSelect:function(e){
    let index =e.currentTarget.dataset.index;
    let parentIndex =e.currentTarget.dataset.parentindex;
    let arr = this.data.imgUrls;
    console.log(e.currentTarget.dataset)
  }
})