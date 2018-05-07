/**
 * 格式化时间
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 格式化数字
 * @param  {Number} n 数字
 * @return {string}   数字字符串
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 封装头部
 */
// var buildAuthHeader = function() {
//   var header = {
//     appid: 'weixin',
//     version:'1.0.0',
//     dmixt:1,
//     sign:'miniprogress',
//     tokenId: wx.getStorageSync("tk") ? wx.getStorageSync("tk") : "a64872a5baf3554dc9d15548a3ed2a1d"
//   };
//   return JSON.stringify(header);
// }
/**
 * 封装微信小程序request API
 * @type {Object}
 */
function request(url, data = {}, method = "POST") {
  return new Promise(function (resolve,reject) {
    wx.getNetworkType({
      success:function (res) {
        if (res.networkType!='none') {
          wx.request({
            url: url,
            data: data,
            method: method,
            header: {
              'Content-Type': 'application/json',
            },
            success: function (res) {
              if (res.statusCode == 200) {
                resolve(res.data);
              } else {
                reject(res.errMsg);
              }

            },
            fail: function (err) {
              reject(err)
              console.log("failed")
            },
            complete: function (res) {
              // console.log(res);
            }
          })
        }else{
          wx.showToast({
            title:"请检查网络",
            image:'/images/error.png',
            duration:1000
          })
        }
      },
      fail:function (res) {
       //
      }
    })
  })
 }
module.exports = {
  formatTime: formatTime,
  request:request
}
