// pages/me/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageToolText:'编辑',
    pageTitle:[
      {title:'关注商品',id:0},
      { title: '关注店铺', id: 1}
    ],
    modalHidden:true,
    searchLoading:false,
    initIndex:0,
    isEdit: true,
    selectedIds: [],
    browseHistoryLists: [
      {
        lists: [
          {
            id: 'a1',
            imgSrc: '../../images/quality.png',
            title: '12321',
            textIcon: '../../images/details_img_frank.png',
            price: '299',
            isSelect: false
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
  //切换标题
  toggleTitle:function(obj){
    //若果点击未关注店铺则跳转
    if(obj.detail.obj.val.target.id==1){
    //跳转到关注店铺
      wx.navigateTo({
        url: '/pages/me/attention',
      })
    }

  },

  onPullDownRefresh: function () {
    //wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  //删除数组中的某个元素
  deleteArray(initArray, obj) {
    let initIndex = -1;
    initArray.map(function (value, index) {
      if (value == obj) {
        initIndex = index;
      }
    })
    if (initIndex != -1) {
      initArray.splice(initIndex, 1);
    }
    return initArray;
  },
  //判断数组中是否存在某个元素
  containArray(initArray, obj) {
    let initIndex = -1;
    for (let n = 0; n < initArray.length; n++) {
      if (initArray[n] == obj) {
        initIndex = n;
        break;
      }
    };
    return initIndex;
  },
  //切换编辑完成
  pageToolFn: function () {
    let text = this.data.pageToolText;
    if (text.trim() == '编辑') {
      this.setData({
        pageToolText: '完成',
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
  toggleSelect: function (obj) {
    let e = obj.detail.myEventDetail.val;
    const that = this;
    let shopId = e.currentTarget.dataset.id;
    let parentIndex = e.currentTarget.dataset.parentindex;
    let selfIndex = e.currentTarget.dataset.selfindex;
    let arr = this.data.browseHistoryLists;
    let selectedIds = this.data.selectedIds;
    arr[parentIndex].lists[selfIndex].isSelect = !arr[parentIndex].lists[selfIndex].isSelect;
    this.setData({
      browseHistoryLists: arr
    });
    //判断是否全部选中，显示全选按钮是否选中
    let isAll = true;
    arr.map(function (value, index) {
      if (value.lists && value.lists.length > 0) {
        value.lists.map(function (value, index) {
          //如果没被选中
          if (!value.isSelect) {
            that.setData({
              isSelectAll: false
            });
            isAll = false;
            //删除数组中的某个元素
            selectedIds = that.deleteArray(selectedIds, value.id);
            // console.log(selectedIds)
            return;
          } else {
            //如果不存在则添加这个ID
            if (that.containArray(selectedIds, value.id) == -1) {
              //如果被选中添加ID
              selectedIds.push(value.id);
            }
          }
        })
      }
    });

    if (isAll) {
      that.setData({
        isSelectAll: true,
      });
      //console.log('is All')
    }
    console.log(selectedIds)
  },
  //切换全选
  selectAll: function () {
    let arr = this.data.browseHistoryLists;
    let selectedIds = [];
    if (this.data.isSelectAll) {
      arr.map(function (value, index) {
        if (value.lists && value.lists.length > 0) {
          value.lists.map(function (value, index) {
            value.isSelect = false;
          })
        }
      });
    } else {
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
      browseHistoryLists: arr,
      isSelectAll: !this.data.isSelectAll,
      selectedIds: selectedIds
    });
    console.log(this.data.selectedIds)
  },
  //删除选中的元素
  removeSelect: function () {
    //弹出对话框
    this.setData({
      modalHidden: false
    })
  },
  //取消对话框
  modalBindcancel: function () {
    this.setData({
      modalHidden: true
    })
  },
  //确定对话框
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: true
    })
  },
  //滚动到底部下载更多
  loadmore: function () {
    console.log('loadmore')
  },
  //上拉触底
  onReachBottom: function () {
    console.log(111)
  },
  //返回个人中心
  goBack: function () {
    wx.switchTab({
      url: '/pages/me/me',
    })
  }


})