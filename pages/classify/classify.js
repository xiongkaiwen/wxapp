// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifySelected:true,
    classifySliderIndex:0,
    classifySlider:[
      { id: 0, text:'食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜食品生鲜'},
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '食品生鲜' },
      { id: 123, text: '123' },
    ],
    classifyShopLists:[
      { id: '1', text: '火龙果火龙果火龙果火龙果火龙果', src:'../../images/quality.png'},
      { id: '1', text: '火龙果', src: '../../images/ad.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
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
  //头部分类品牌选择
  classifySelect:function(){
    this.setData({
      classifySelected: !this.data.classifySelected
    })
  },
  //左侧导航点击事件
  classifySlider:function(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      classifySliderIndex:e.currentTarget.dataset.id
    })
  }

})