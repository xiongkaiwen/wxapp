var bmap = require('../../lib/bmap-wx.min.js');
Page({
  data:{
    position:"自动定位失败...",
    searchText:"品质水果",
    hiddenLoading:false,
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
    banner: [
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
    })
  },
  onShow:function(){
    const that =this;
    let selectArea = wx.getStorageSync('selectArea');
    if (selectArea && selectArea != '') {
      that.setData({
        position: selectArea
      })
    }
  },
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


})