// pages/shopsDetail/shopsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle:[
      {title:'商品',id:0},
      { title: '评价', id: 1 },
      { title: '详情', id: 2 },
      { title: '推荐', id: 3 },
    ],
    isSelect:true,
    initIndex:0,
    bannerLists:[
      { url: '', src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      { url: '', src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg' },
      { url: '', src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' },
    ],
    getClipboardText:"此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度此处是产品百科 根据商家提供的内容自适应高度",
    areaText:"湖南省邵阳市双清区五一湖南省邵阳市双清区五一",
    shopsEvaluateText:"正品正品正品正品正品正品正品正品正品正品正品正品正品正品正品正品 非常好用 还会一直光顾 老板生意兴隆!正品正品 非常好用 还会一直光顾 老板生意兴隆!",
    recommendLists:[
      { url: '', src: '../../images/goods.jpg', title:'韩束巨水光乳液深层 补水保湿秋冬锁水韩束巨水光乳液深层 补水保湿秋冬锁水...',price:99.99},
      { url: '', src: '../../images/goods.jpg', title: '韩束巨水光乳液深层 补水保湿秋冬锁水韩束巨水光乳液深层 补水保湿秋冬锁水...', price: 99.99 },
      { url: '', src: '../../images/goods.jpg', title: '韩束巨水光乳液深层 补水保湿秋冬锁水韩束巨水光乳液深层 补水保湿秋冬锁水...', price: 99.99 },
      { url: '', src: '../../images/goods.jpg', title: '韩束巨水光乳液深层 补水保湿秋冬锁水韩束巨水光乳液深层 补水保湿秋冬锁水...', price: 99.99 },
      { url: '', src: '../../images/goods.jpg', title: '韩束巨水光乳液深层 补水保湿秋冬锁水韩束巨水光乳液深层 补水保湿秋冬锁水...', price: 99.99 }
    ],
    combs:[
      { id: 1, text: '套餐一' }, { id: 2, text: '套餐二' }, { id: 3, text: '套餐三套餐三' },
    ],
    combsInit:0,
    specificationes:[
      { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' }, { id: 1, text: '686ml' }, { id: 2, text: '6666ml' }, { id: 3, text: '8888ml' },
    ],
    specificationInit:1,
    cartNum:1,
    preNum:1,
    maxInventory:6,
    modalHidden:true,
    tips:'提示性文字',
    addCart:true,
    titleLocation:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryMultipleNodes('data-0');
    this.queryMultipleNodes('data-1');
    this.queryMultipleNodes('data-2');
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //点击分享
  pageToolFn:function(){
    console.log(111)
    this.onShareAppMessage()
  },
  //切换标题 锚点跳转
  toggleTitle:function(e){  
    let locations = this.data.titleLocation;
    //如果点击标题不等于推荐则不锚点跳转
    if (e.detail.obj.val.target.id!=3){
      wx.pageScrollTo({
        scrollTop: locations[e.detail.obj.val.target.id] - 50,
        duration: 100
      })
    }
    this.setData({
      initIndex: e.detail.obj.val.target.id
    })
    
  },
  //记录锚点位置
  queryMultipleNodes: function (id) {
    let arr = this.data.titleLocation;
    var query = wx.createSelectorQuery();
    query.select('#' + id).boundingClientRect();
    let location;
    query.exec(function (res) {
      arr.push(res[0].top);
    });
    this.setData({
      titleLocation:arr
    })
  },
  //复制文字
  setClipboard:function(){
    let text = this.data.getClipboardText;
    wx.setClipboardData({
      data: text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  //切换关注
  toggleSelect:function(){
    this.setData({
      isSelect:!this.data.isSelect
    })
  },
  //后退
  goBack:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  //隐藏对话框
  modalBindcancel:function(){
    this.setData({
      modalHidden:true
    })
  },
  //减
  onReduce:function(){
    let num = parseInt(this.data.cartNum);
    num--;
    if(num<1){
      this.setData({
        tips:'所选数量不得小于1',
        modalHidden: false
      })
    }else{
      this.setData({
        cartNum:num
      })
    }
  },
  //增加
  onAdd:function(){
    let num = parseInt(this.data.cartNum);
    let maxNum = parseInt(this.data.maxInventory);
    num++;
    if(num>maxNum){
      this.setData({
        tips:'所选数量不得大于最大库存',
        modalHidden: false
      })
    }else{
      this.setData({
        cartNum: num
      })
    }
  },
  //输入完前
  onFocus:function(e){
    this.setData({
      preNum:e.detail.value
    })
  },
  //输入完后
  onBlur:function(e){
    let maxNum = parseInt(this.data.maxInventory);
    let num = parseInt(e.detail.value);
    if (num < 1) {
      this.setData({
        tips: '所选数量不得小于1',
        modalHidden: false,
        cartNum:this.data.preNum
      })
    }else if (num > maxNum) {
      this.setData({
        tips: '所选数量不得大于最大库存',
        modalHidden: false,
        cartNum: this.data.preNum
      })
    } else {
      this.setData({
        cartNum: num
      })
    }
  },
  //添加购物车
  addCart:function(){
    this.setData({
      cartNum:1,
      addCart:false,
    })
  },
  //确定添加
  addCartOk:function(){
    this.setData({
      addCart:true
    })
  },
  //点击空地方隐藏购物车
  addCartBody:function(e){
    this.setData({
      addCart: true
    })
  },



})