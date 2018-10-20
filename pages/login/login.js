let API = require('../../utils/api.js');
let app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (options) {
    wx.getSetting({ // 获取用户当前的授权状态
      success: function (res) {
        if (res.authSetting['scope.userInfo']) { // 用户信息
          wx.getUserInfo({
            success: function (res) {  //用户已经授权过              
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
        }
      }
    })
  },

  bindGetUserInfo: (e) => {
    wx.showModal({
      title: '授权登录',
      content: '获得你公开的信息（昵称，头像等）',
      cancelText: '拒绝',
      confirmText: '允许',
      success: function (res) {
        if (res.confirm) {
          wx.login({
            success: (e) => {
              wx.getUserInfo({
                withCredentials: true, // 	是否带上登录态信息
                success: function (infoRes) {
                  let reqData = {}
                  reqData.type = 3;
                  reqData.encryptedData = infoRes.encryptedData; // 包括敏感数据在内的完整用户信息的加密数据
                  reqData.iv = infoRes.iv; // 加密算法的初始向量
                  reqData.code = e.code;
                  API.apiRequest('/login/onLogin', reqData, (callback) => {
                    const { status, msg, data } = callback.data;
                    if (status === 200) {
                      app.globalData.token = data.token;
                      wx.switchTab({
                        url: '/pages/index/index',
                      })
                      console.log("登陆成功");
                      this.getUserMes();
                    } else {
                      wx.showToast({
                        title: msg
                      })
                    }
                  });
                }
              })
            }
          })
        }
      }
    })
  },
  // 获取用户信息
  getUserMes:function() {
    API.apiRequest('/login/getUserInfo', '', (res) => {
      const { status, msg, data } = res.data;
      if (status === 200) {
        // app.globalData.userInfo = res.userInfo;
        // app.globalData.hasUserInfo = true;

      } else {

      }
    }, 'get', app.globalData.token)
  }
})
