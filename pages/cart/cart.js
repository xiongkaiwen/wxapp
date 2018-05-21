// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle:"购物车",
    pageToolText:"编辑",
    cartLists:[
      {
        select:false,
        name:'鸢尾小铺',
        brandId:'brand1',
        shopLists:[
          { 
            shopId:'shop1',
            select:false,
            src:'/images/ad.png',
            title:'维达蓝色经典系列卫生纸3层140g维达蓝色经典系列卫生纸3层140g',
            size:'维达蓝色经典系列卫生纸3层140g',
            price:'39.99',
            num:1
          },
          {
            shopId: 'shop2',
            select: false,
            src: '/images/ad.png',
            title: '22222222',
            size: '2222222',
            price: '39.99',
            num: 1
          }
        ]
      },
      {
        select: false,
        name: '鸢尾小铺2',
        brandId: 'brand2',
        shopLists: [
          {
            shopId: 'shop1',
            select: false,
            src: '/images/ad.png',
            title: '维达蓝色经典系列卫生纸3层140g维达蓝色经典系列卫生纸3层140g',
            size: '维达蓝色经典系列卫生纸3层140g',
            price: '39.99',
            num: 1
          },
          {
            shopId: 'shop2',
            select: false,
            src: '/images/ad.png',
            title: '22222222',
            size: '2222222',
            price: '39.99',
            num: 1
          }
        ]
      }
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  //编辑事件
  pageToolFn:function(){

  },
  //切换选中按钮
  toggleSelect:function(e){
    const that =this;
    let arr = that.data.cartLists;
    let parentId=e.currentTarget.dataset.parent;
    let selfIndex =e.currentTarget.dataset.index;
    let parentIndex ;
    //如果点击的是商品按钮
    if(parentId){
      //获取父ID
      parentIndex=e.currentTarget.dataset.parentindex;
      arr[parentIndex].shopLists[selfIndex].select = !arr[parentIndex].shopLists[selfIndex].select;
      //编辑父级所有商品列表 如果有select为false这取消店铺全选按钮
      let pan = true;
      arr[parentIndex].shopLists.map(function(val,index){
        //如果有一个不是选择则取消店铺全选
        if(!val.select){
          pan=false;
        }
      })
      //如果pan为true说明全选展示对应样式
      if(pan){
        arr[parentIndex].select=true;
      }else{
        arr[parentIndex].select = false;
      }
      //重置数据
      that.setData({
        cartLists:arr
      })
    }else{
      //点击的是店铺按钮
      let isSelect = arr[selfIndex].select;
      //如果店铺全选为false,则为每一个列表选上样式
      if(!isSelect){
        //自己选中 地下列表也选中
        arr[selfIndex].select=true;
        arr[selfIndex].shopLists.map(function (val, index) {
          val.select=true;
        });
      }else{
        arr[selfIndex].select = false;
        arr[selfIndex].shopLists.map(function (val, index) {
          val.select = false;
        });
      }
      //重置数据
      that.setData({
        cartLists: arr
      })
    }
  }


})