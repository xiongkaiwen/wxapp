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
      { id: 1, text: '食品生鲜' },
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
    brandListsRightTopLocation:0,
    classifyShopLists:[
      { id: '1', text: '火龙果火龙果火龙果火龙果火龙果', src:'../../images/quality.png'},
      { id: '1', text: '火龙果', src: '../../images/ad.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
      { id: '1', text: '火龙果', src: '../../images/quality.png' },
    ],
    brandLists:[
      {
        id:'A',
        text:'A',
        lists:[
          { id: 'a1', text: '全部', src:'/images/goods.jpg'},
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          { id: 'a1', text: '全部', src: '/images/goods.jpg' },
          
        ]
      },
      {
        id: 'B',
        text: 'B',
        lists: [
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },
          { id: 'b1', text: '全部', src: '/images/goods.jpg' },

        ]
      },
      {
        id: 'C',
        text: 'C',
        lists: [
          { id: 'c1', text: '全部', src: '/images/goods.jpg' },
        ]
      },
      {
        id: 'D',
        text: 'D',
        lists: [
          { id: 'd1', text: '全部', src: '/images/goods.jpg' },
        ]
      },
      {
        id: 'E',
        text: 'E',
        lists: [
          { id: 'e1', text: '全部', src: '/images/goods.jpg' },
        ]
      },
      {
        id: 'F',
        text: 'F',
        lists: [
          { id: 'f1', text: '全部', src: '/images/goods.jpg' },
        ]
      },
      {
        id: 'G',
        text: 'G',
        lists: [
          { id: 'g1', text: '全部', src: '/images/goods.jpg' },
        ]
      },
    ],
    brandListsRight:[
      {id:'A2',text:'A'},
      { id: 'B2', text: 'B' },
      { id: 'C2', text: 'C' },
      { id: 'D2', text: 'D' },
      { id: 'E2', text: 'E' },
      { id: 'F2', text: 'F' },
      { id: 'G2', text: 'G' },
    ],
    isFixed:false,//屏幕是否滚动品牌右侧导航
    brandListLocation:[],//品牌锚点
    isSearch:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取品牌右侧的id然后加工截取生成新的数组
    let arr = this.data.brandListsRight;
    let newArr=[];
    arr.map(function(val,index){
        newArr.push(val.id.substr(0, 1));
    })
    this.queryMultipleNodes('brandListRight');
    this.queryMultipleNodes(newArr);
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
  onPageScroll:function(e){
    let location = this.data.brandListsRightTopLocation;
    const that =this;
    let scrollTop = e.scrollTop -60;
    if (scrollTop>location){
      that.setData({
        isFixed:true
      })
    }else{
      that.setData({
        isFixed: false
      })
    }
  },
  //记录品牌右侧导航锚点位置
  queryMultipleNodes: function (id) {
    const that =this;
    let location;
    let brandListLocations=[];
    if (typeof id == 'object') {
      id.map(function(val,index){
        var query = wx.createSelectorQuery();
        query.select('#' + val).boundingClientRect();
        query.exec(function (res) {
          brandListLocations.push(res[0].top);
        });
      })
      setTimeout(function(){
        that.setData({
          brandListLocation: brandListLocations
        })
      },1000)

    }else{
      var query = wx.createSelectorQuery();
      query.select('#' + id).boundingClientRect();
      query.exec(function (res) {
        location = res[0].top;
        that.setData({
          brandListsRightTopLocation: location
        })
      });
    }

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
  },
  //品牌导航锚点跳转
  goGrandTitle:function(e){
    let locations = this.data.brandListLocation;
    let index =e.currentTarget.dataset.index;
    console.log(locations)
    wx.pageScrollTo({
      scrollTop: locations[index]+40,
      duration: 100
    })
  },
  //切换点击搜索
  toggleSearch:function(){
    this.setData({
      isSearch: !this.data.isSearch
    })
  },
  //去搜索页面
  search:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})