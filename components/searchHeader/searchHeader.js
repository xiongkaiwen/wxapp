Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    pageTitle:{
      type:String,
      value:'标题'
    },
    pageTool:{
      type: String,
      value: ''
    },
    searchTitile:{
      type:String,
      value:'请输入搜索名称'
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data:{
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
    //头部按钮点击事件
    pageTool:function(){
      this.triggerEvent("pageToolFn");
    },
    //返回按钮
    _goBack:function(){
      this.triggerEvent("goBack");
    },
    //点击搜索
    search:function(){
      this.triggerEvent("search")
    }

  }
})