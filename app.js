//app.js
var util = require("utils/util.js");
var api = require("config/api.js");
App({
  onLaunch: function () {
    let tk = wx.getStorageSync('tk');
    let isJoin = wx.getStorageSync('isJoin');
    let loginData = wx.getStorageSync('loginData');
    let data = {
      phone: loginData.userphone,
      password: loginData.password
    };
    console.log(tk)
    if (tk&&isJoin) {
      util.request(api.userLogin,data).then(function (res) {
        if (res.success) {
          wx.setStorageSync("tk", res.data.token);
          wx.setStorageSync("loginData", loginData);
          wx.setStorageSync("userData", res.data);
          wx.setStorageSync("uid", res.data.Id);
          wx.setStorageSync('isJoin',res.data.isJoin);
          wx.setStorageSync('shareCode',res.data.shareCode);
          wx.setStorageSync('username',res.data.nickName);
        }
      })
    }else{
      //wx.clearStorage();
      // wx.reLaunch({
      //   url: '/pages/user/login/login',
      // });
    }
  },
  globalData: {
    util:util,
    api:api
  }
})