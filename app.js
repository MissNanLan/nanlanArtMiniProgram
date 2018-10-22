let API = require('./utils/api.js');
App({
  onLaunch: function () {
    let p = new Promise(function(reslove,reject){
      //service.indentityCheck(reslove,reject);
    })
    this.globalData.promise = p;
 
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false,
    token: ''
  },
  globalData:{
    promise: null
  }
})