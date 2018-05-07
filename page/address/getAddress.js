// page/address/getAddress.js
const app=getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPostion:'全国',
    areaLists:[
      {areaName:'全国',areaId:''}
    ],
    hiddenLoading:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    let data = {
      // tokenId:'a64872a5baf3554dc9d15548a3ed2a1d',
      parentId: 0
    }
    app.util.request(app.api.areaList, data, 'GET').then(function (obj) {
      if (obj.data) {
        that.setData({
          areaLists: obj.data
        })
      }
    }).catch(function (obj) {
      console.log(obj)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      hiddenLoading:true
    })
  },
  //选择地区
  areaSelect:function(event){
    this.setData({
      hiddenLoading: false
    })
    const that = this;
    let data = {
      // tokenId:'a64872a5baf3554dc9d15548a3ed2a1d',
      parentId: event.currentTarget.dataset.areaid
    }
    app.util.request(app.api.areaList, data, 'GET').then(function (obj) {
      if (obj.data) {
        that.setData({
          areaLists: obj.data
        })
      }else{
        wx.setStorageSync('selectArea', event.currentTarget.dataset.areaname);
        wx.switchTab({
          url: '/page/index/index'
        })
      }
      that.setData({
        hiddenLoading: true
      })
    }).catch(function (obj) {
      console.log(obj)
    })
  }
})