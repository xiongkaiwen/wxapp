// pages/address/getAddress.js
const app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyNavs:[
      { id: 1, text: '热卖套餐' }, { id: 2, text: '热卖套餐' }, { id: 3, text: '热卖套餐' }, { id: 4, text: '热卖套餐' },
    ],
    navIndex:0,
    imgUrls: [
      {
        id: 1,
        lists: [
          {
            id: 1,
            src: '/images/goods.jpg',
            title:'洗护套餐',
            intro:'承包家庭一年洗护所需',
            isSelect:true
          },
          {
            id: 2,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 3,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
        ]
      },
      {
        id: 2,
        lists: [
          {
            id: 21,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 2,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
          {
            id: 3,
            src: '/images/goods.jpg',
            title: '洗护套餐',
            intro: '承包家庭一年洗护所需',
            isSelect: false
          },
        ]
      },

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    current:0,
    name:'',
    telphone:'',
    idCard:'',
    email:'',
    inviteCode:'Hello2018',
    isValidation1: false,
    isValidation2: false,
    isValidation3: false,
    tips:'错误信息',
    modalHidden:true
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
  //返回按钮
  goBack:function(){
    wx.navigateBack({
      delta:1
    })
  },
  //swiper滑动时
  swiperChange:function(e){
    this.setData({
      current: e.detail.current
    })
  },
  //导航点点击时候
  swiperNav:function(e){
    this.setData({
      current: e.currentTarget.dataset.index
    })
  },
  //分类导航点击事件
  classifyNavs:function(e){
    this.setData({
      navIndex: e.currentTarget.dataset.index
    })
  },
  //切换select
  toggleSelect:function(e){
    let index =e.currentTarget.dataset.index;
    let parentIndex =e.currentTarget.dataset.parentindex;
    let arr = this.data.imgUrls;
    console.log(e.currentTarget.dataset)
  },
  nameInput:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  telphoneInput: function (e) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(e.detail.value)) {
      this.setData({
        isValidation1:false,
        tips:'手机号格式错误',
        modalHidden:false
      })
      console.log('no')
    } else {
      this.setData({
        telphone: e.detail.value,
        isValidation1:true
      });
      console.log('yes')
    }  
  },
  idCardInput: function (e) {
    var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!myreg.test(e.detail.value)) {
      this.setData({
        isValidation2: false,
        tips:'身份证号码格式错误',
        modalHidden:false
      })
    } else {
      this.setData({
        idCard: e.detail.value,
        isValidation2:true
      })
    }  

  },
  inviteCodeInput: function (e) {
    this.setData({
      inviteCode: e.detail.value
    })
  },
  emailInput: function (e) {
    var myreg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    if (!myreg.test(e.detail.value)) {
      this.setData({
        isValidation3: false,
        tips:'邮箱格式错误',
        modalHidden:false
      })
    } else {
      this.setData({
        email: e.detail.value,
        isValidation3: true
      })
    }  
  },
  //提交列表
  onSubmit:function(){
    const that = this;
    let name = that.data.name;
    let telphone = that.data.telphone;
    let idCard = that.data.idCard;
    let inviteCode = that.data.inviteCode;
    let email = that.data.email;
    let isValidation1 = that.data.isValidation1;
    let isValidation2 = that.data.isValidation2;
    let isValidation3 = that.data.isValidation3;
    if (isValidation1 && isValidation2 && isValidation3){
      console.log('ok')
    }else{
      this.setData({
        tips: '请填写正确的信息',
        modalHidden: false
      })
    }
    console.log(telphone+':'+idCard+inviteCode+email)
  },
  //隐藏对话框
  modalBindconfirm:function(){
    this.setData({
      modalHidden:true
    })
  },
  modalBindcancel:function(){
    this.setData({
      modalHidden: true
    })
  }
})