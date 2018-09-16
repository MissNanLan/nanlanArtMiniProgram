// essay.js
var app = getApp()
var API = require('../../utils/api.js')

Page({

  data: {
    essayArray: []
  },

  onLoad: function () {
    var that = this;
    API.ajax('', function (res) {
      that.setData({
        essayArray: res.essayData
      })
    })
  },
  // 跳转到详细页面
  viewEssayDetail: function (event) {
    var currentId = event.currentTarget.dataset.currentid;
    wx.navigateTo({
      url: '../essay-detail/essay-detail?id=' + currentId
    })
  },
  // 点击分类跳转到更多文章页面
  viewMoreEssay: function(event){
    var currentId = event.currentTarget.dataset.currentid;
    wx.navigateTo({
      url: '../essay-category/essay-category?id=' + currentId
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})