var bmap = require('../../lib/bmap-wx.min.js');
Page({
  data:{
    position:"自动定位失败...",
    searchText:"品质水果",
    hiddenLoading:false,
    slideIndex:0,
    firstNav:[
      '首页',
      '水果生鲜',
      '首页',
      '水果生鲜',
      '首页',
      '水果生鲜',
      '首页',
      '水果生鲜',
    ],
    bannerLists: [
      {
        url: '/',
        src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      },
      {
        url: '/',
        src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      },
      {
        url: '/',
        src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      },
    ],
    secondNav: [
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      { src: '/images/icon.png', url: '', text: '爆款秒杀' },
    ],
    qualityGoods: [
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
      { src: '/images/quality.png', url: '', price: '29', initPrice: '38.8' },
    ],
    adImgOne:'/images/ad.png',
    adImgTwo:'/images/ad.png',
    shopLists: [
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]初春新款薄绒卫衣女长袖纯色上衣打底衫初春新款薄绒卫衣女长袖纯色上衣打底衫', price: '99', sales: '666' },
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]', price: '99', sales: '666' },
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]', price: '99', sales: '666' },
    ]
  },
  onLoad:function(e){
    const that =this;
    var BMap = new bmap.BMapWX({
      ak: 'yUgeOk4UlGfmNstWRnUbNTXXfknBSGva'
    });
    let selectArea = wx.getStorageSync('selectArea');
    if (selectArea && selectArea!=''){
      that.setData({
        position: selectArea
      })
    }else{
      var success = function (data) {
        const add = data.originalData.result.addressComponent;
        that.setData({
          position: add.city + add.street
        })

      }
      BMap.regeocoding({
        success: success,
        fail: function (e) {

        }
      });
    }

  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    this.setData({
      hiddenLoading: true
    });
   
  },
  onShow:function(){
    const that =this;
    let selectArea = wx.getStorageSync('selectArea');
    if (selectArea && selectArea != '') {
      that.setData({
        position: selectArea
      })
    };

  },
  //监听页面滚动
  // onPageScroll:function(e){
  //   wx.createSelectorQuery('#conditionNav').selectViewport().scrollOffset(function (res) {
  //     console.log(res)
  //   }).exec()
  // },
  //扫一扫
  scanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  //选择区域
  goSelectArea:function(){
    wx.navigateTo({
      url: '/page/address/getAddress',
    })
  },
  //搜索页面
  goSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })  
  },
  //一级滑动导航点击事件
  firstNav:function(e){
    this.setData({
      slideIndex: e.currentTarget.id.substring(3)
    })
  },
  //条件导航点击触发的对应事件   用于修改展示商品列表数据
  _condiNav:function(){
    console.log(1111)
  }

})