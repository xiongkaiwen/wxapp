Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    //banner图和导航
    bannerLists: {
      type: Array,
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

    },
    //二级导航
    secondNav: {
      type: Array,
    },
    //轮播商品
    shopLists: {
      type: Array
    },
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    condiNavIndex:0,
    sales:false,
    toggleLength:true,
    condiNavs:[
      {
        text:'全部',
        imgs:[

        ]
      },{
        text:'销量',
        imgs:[
          '../../images/condiNav.png',
          '../../images/condiNav_up.png',
          '../../images/condiNav_down.png',
        ],
        select:0
      }, {
        text: '价格',
        imgs: [
          '../../images/condiNav.png',
          '../../images/condiNav_up.png',
          '../../images/condiNav_down.png',
        ],
        select:0
      }, {
        text: '筛选',
        imgs: [
          '../../images/condiNav_screen.png',
        ]
      }
    ]
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {

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
    },
    //触发条件导航点击事件 并且修改对应的样式图标
    _condiNav(e){
      console.log(e.currentTarget.offsetTop)
      let index = e.currentTarget.dataset.id
      this.setData({
        condiNavIndex: index
      })
      //如果点击是销量或者价格，修改对应数据的select，0：位初始，1：up 2：down
      if(index==1 || index==2){
        let selectIndex=this.data.condiNavs[index].select;
        let arr = this.data.condiNavs;
        if(selectIndex==0){
          arr[index].select=1;
          this.setData({
            condiNavs:arr
          })
        } else if (selectIndex == 1){
          arr[index].select = 2;
          this.setData({
            condiNavs: arr
          })
        } else if (selectIndex == 2) {
          arr[index].select = 1;
          this.setData({
            condiNavs: arr
          })
        }
      }
      //触发条件导航点击事件给父组件
      this.triggerEvent("condiNav");
    },
    //点击切换二级导航隐藏显示部分
    toggleLength:function(){
      this.setData({
        toggleLength: !this.data.toggleLength
      })
    }
  }
})