// pages/cart/cart.js
const app = getApp().globalData;
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
      },
      {
        select: false,
        name: '鸢尾小铺2',
        brandId: 'brand2',
        shopLists: [
          {
            shopId: 'shop3',
            select: false,
            src: '/images/ad.png',
            title: '维达蓝色经典系列卫生纸3层140g维达蓝色经典系列卫生纸3层140g',
            size: '维达蓝色经典系列卫生纸3层140g',
            price: '39.99',
            num: 1
          },
          {
            shopId: 'shop4',
            select: false,
            src: '/images/ad.png',
            title: '22222222',
            size: '2222222',
            price: '39.99',
            num: 1
          }
        ]
      }
    ],
    isSelectAll:false,
    selectedId:[],
    isEdit:false,
    modalHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = [1,2,3,4,5];
    let a = "5";
    
    console.log(app.util.arrayDelete(arr, a))
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
    this.setData({
      isEdit:!this.data.isEdit
    })
  },
  //点击非全选按钮时，判断每个店铺的全选按钮是否全选
  isSelectAll(){
    let arr = this.data.cartLists;
    let pan =true;
    arr.map(function(val,index){
      if(!val.select){
        pan =false;
      }
    })
    if(pan){
      this.setData({
        isSelectAll: true
      })
    }else{
      this.setData({
        isSelectAll: false
      })
    }
  },
  //切换选中按钮
  toggleSelect:function(e){
    const that =this;
    let arr = that.data.cartLists;
    let parentId=e.currentTarget.dataset.parent;
    let selfIndex =e.currentTarget.dataset.index;
    let parentIndex ;
    let selectedId = this.data.selectedId;
    let selfId = e.currentTarget.dataset.id;
    //如果点击的是商品按钮
    if(parentId){
      //获取父ID
      parentIndex=e.currentTarget.dataset.parentindex;
      arr[parentIndex].shopLists[selfIndex].select = !arr[parentIndex].shopLists[selfIndex].select;
      //如果是选中的
      if (arr[parentIndex].shopLists[selfIndex].select){
        selectedId.push(selfId);
      }else{
        selectedId = app.util.arrayDelete(selectedId, selfId);
      }
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
    }else{
      //点击的是店铺按钮
      let isSelect = arr[selfIndex].select;//店铺是否选中
      let shop_goodsId=[];//店铺下的id
      //获取店铺下所有商品的id 
      arr[selfIndex].shopLists.map(function(val,index){
        shop_goodsId.push(val.shopId)
      });
      //如果店铺全选为false,则为每一个列表选上样式
      if(!isSelect){
        //自己选中 地下列表也选中
        arr[selfIndex].select=true;
        arr[selfIndex].shopLists.map(function (val, index) {
          val.select=true;
        });
        //先删除 再添加
        selectedId = app.util.arrayDelete(selectedId, shop_goodsId);
        selectedId = selectedId.concat(shop_goodsId);
      }else{
        arr[selfIndex].select = false;
        arr[selfIndex].shopLists.map(function (val, index) {
          val.select = false;
        });
        //删除
        selectedId = app.util.arrayDelete(selectedId, shop_goodsId);
      }
    }
    //重置数据
    that.setData({
      cartLists: arr,
      selectedId: selectedId
    })
    console.log(selectedId)
    //判断是否全部店铺选中了
    this.isSelectAll();
  },
  //切换全选
  toggleSelectAll:function(){
    let isAll = this.data.isSelectAll;
    let arr = this.data.cartLists;
    let selectedId=[];
    arr.map(function(val,index){
      val.shopLists.map(function(val,index){
        selectedId.push(val.shopId);
      })
    })
    //如果是全选
    if(isAll){
      arr.map(function(val,index){
        val.select=false;
        val.shopLists.map(function(val,index){
          val.select=false;
        })
      });
      selectedId=[];
    }else{
    //如果不是全选
      arr.map(function (val, index) {
        val.select = true;
        val.shopLists.map(function (val, index) {
          val.select = true;
        })
      })
    }
    //更新数据
    this.setData({
      cartLists:arr,
      isSelectAll:! this.data.isSelectAll,
      selectedId: selectedId
    })
    console.log(selectedId)
  },
  //结算或删除事件
  selectOrDelete:function(){
    let isEdit = this.data.isEdit;
    //如果是删除
    if(isEdit){
      this.setData({
        modalHidden:false
      })
    }
  },
  //取消对话框
  modalBindcancel:function(){
    this.setData({
      modalHidden: true
    })
  },
  //确定对话框
  modalBindconfirm:function(){
    this.setData({
      modalHidden: true
    })
  }


})