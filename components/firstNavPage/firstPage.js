Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // banner=''
    // secondNavs=''
    // ad=''
    // qualityGoods=''
    // adImgOne=''
    // shopLists=''
    // adImgTwo=''
    // shopListsTwo=''
    //banner图和导航
    banner:{
      type:Array,
      value: [
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
      observer: function (newVal, oldVal) {
        
      }
    },
    dd:{
      type:String,
      value:'11111111111'
    },
    secondNavs:{
      type:Array,
      value: [
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
        { src: '/images/icon.png', url: '', text: '爆款秒杀' },
      ],
    },
    // 弹窗标题
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    banner:[],
    secondNavs: [
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
    shops: [
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]初春新款薄绒卫衣女长袖纯色上衣打底衫初春新款薄绒卫衣女长袖纯色上衣打底衫', price: '99', sales: '666' },
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]', price: '99', sales: '666' },
      { src: '/images/goods.jpg', url: '', title: '初春新款薄绒卫衣女长袖纯色上衣打底衫[01]', price: '99', sales: '666' },
    ],
    adText: '选择你的精致生活',
    qualityText: '精品推荐',
    qualityButton: '秒抢好货',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */
    setBanner(val){
      this.setData({
        banner:val
      })
    },
    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})