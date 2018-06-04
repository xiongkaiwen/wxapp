Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    firstNavs: {
      type: Array
    },
    brandNavs:{
      type: Array
    },
    firstNavIndex:{
      type:Number,
      value:0
    },
    brandNavIndex:{
      type: Number,
      value: 0
    },
    isScreen:{
      type:Boolean
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    brandAll:true,
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
    //切换全部
    toggleBrand:function(){
      this.setData({
        brandAll: !this.data.brandAll
      })
    },
    //切换一级分类
    toggleFirstNav:function(e){
      let obj={
        firstIndex: e.currentTarget.dataset.index
      };
      this.triggerEvent("toggleFirstNav",obj);
    },
    //切换品牌分类
    toggleBrand: function (e) {
      let obj = {
        firstIndex: e.currentTarget.dataset.index
      };
      this.triggerEvent("toggleBrand",obj);
    },
    //重置
    reset:function(){
      this.triggerEvent("reset")
    },
    //确定
    confirm:function(){
      this.triggerEvent("confirm")
    }

  }
})