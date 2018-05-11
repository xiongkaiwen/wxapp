// pages/me/browseHistroy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle:'浏览记录',
    pageToolText:'编辑',
    isEdit:true,
    isSelectAll:false,
    selectedIds:[],
    browseHistoryLists:[
      {
        date:'8月8日',
        lists:[
          {
            id:'a1',
            imgSrc:'../../images/quality.png',
            title:'韩束巨水光乳液深层补水保湿收缩 毛孔控油化妆品正品',
            textIcon:'../../images/details_img_frank.png',
            price:'299',
            isSelect:false
          },
          {
            id: 'a2',
            imgSrc: '../../images/quality.png',
            title: '韩束巨水光乳液深层补水保湿收缩 毛孔控油化妆品正品',
            textIcon: '',
            price: '299',
            isSelect: false
          },
          {
            id: 'a3',
            imgSrc: '../../images/quality.png',
            title: '韩束巨水光乳液深层补水保湿收缩 毛孔控油化妆品正品',
            price: '299',
            isSelect: false
          }
        ]
      },
      {
        date: '6月6日',
        lists: [
          {
            id: 'a4',
            imgSrc: '../../images/quality.png',
            title: '韩束巨水光乳液深层补水保湿收缩 毛孔控油化妆品正品',
            textIcon: '../../images/details_img_frank.png',
            price: '299',
            isSelect: false
          }
        ]
      },
      {
        date: '6月6日'
      },
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
  //删除数组中的某个元素
  deleteArray(initArray,obj){
    let initIndex =-1;
    initArray.map(function(value,index){
      if(value==obj){
        initIndex=index
      }
    })
    if(initIndex!=-1){
      initArray.splice(initArray,initIndex);
    }
    console.log(initIndex)
    return initArray;
  },
  //切换编辑完成
  pageToolFn:function(){
    let text = this.data.pageToolText;
    if(text.trim()=='编辑'){
      this.setData({
        pageToolText:'完成',
        isEdit: !this.data.isEdit
      })
    } else {
      this.setData({
        pageToolText: '编辑',
        isEdit: !this.data.isEdit
      })
    }
  },
  //切换当个选中
  toggleSelect:function(e){
    const that =this;
    let shopId=e.currentTarget.dataset.id;
    let parentIndex = e.currentTarget.dataset.parentindex;
    let selfIndex = e.currentTarget.dataset.selfindex;
    let arr = this.data.browseHistoryLists;
    let selectedIds = this.data.selectedIds;
    arr[parentIndex].lists[selfIndex].isSelect = !arr[parentIndex].lists[selfIndex].isSelect;
    this.setData({
      browseHistoryLists:arr
    });
    //判断是否全部选中，显示全选按钮是否选中
    let isAll = true;
    arr.map(function (value, index) {
      if (value.lists && value.lists.length > 0) {
        value.lists.map(function (value, index) {
          //如果没被选中
          if(!value.isSelect){
            that.setData({
              isSelectAll:false
            });
            isAll=false;
            //删除数组中的某个元素
            selectedIds=that.deleteArray(selectedIds,value.id);
           // console.log(selectedIds)
            return ;
          }else{
            selectedIds.push(value.id)
          }
        })
      }
    });
    
    if(isAll){
      arr.map(function (value, index) {
        if (value.lists && value.lists.length > 0) {
          value.lists.map(function (value, index) {
            value.isSelect = true;
            selectedIds.push(value.id);
          })
        }
      })
      that.setData({
        isSelectAll: true,
        selectedIds: selectedIds
      });
      console.log('is All')
    }
    console.log(selectedIds)
    
  },
  //切换全选
  selectAll:function(){
    let arr = this.data.browseHistoryLists;
    let selectedIds=[];
    if (this.data.isSelectAll){
      arr.map(function (value, index) {
        if (value.lists && value.lists.length > 0) {
          value.lists.map(function (value, index) {
            value.isSelect=false;
          })
        }
      });
    }else{
      arr.map(function (value, index) {
        if (value.lists && value.lists.length > 0) {
          value.lists.map(function (value, index) {
            value.isSelect = true;
            selectedIds.push(value.id);
          })
        }
      })
    };
    this.setData({
      browseHistoryLists:arr,
      isSelectAll: !this.data.isSelectAll,
      selectedIds: selectedIds
    });
    // console.log(this.data.selectedIds)
  }

})