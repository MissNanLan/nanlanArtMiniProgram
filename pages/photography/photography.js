// photography.js
var app = getApp()
var API = require('../../utils/api.js')
Page({

  data: {
    photographyArray: []
  },
  // 查看更多
  viewMorePhotograph: function (event) {
    var currentId = event.currentTarget.dataset.currentid;
    wx.navigateTo({
      url: '../photography-category/photography-category?id=' + currentId
    })
  },
  onLoad: function () {

  }
})