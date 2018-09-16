//index.js
//获取应用实例
var API = require('../../utils/api.js')
Page({

  data: {
    photographyArray: [],
    essayArray: [],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, //指示点
    autoplay: true,   // 自动切换
    interval: 1000, //  自动切换间隔
    duration: 1000 //   滑动时长
  },
  // 指示点
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  // 自动播放
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  // 间隔
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  // 持续时间
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    API.ajax('', function (res) {
      that.setData({
        photographyArray: res.photographyData,
        essayArray: res.essayData
      })
    })
  }
})