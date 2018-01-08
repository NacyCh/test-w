var config = require('../../comm/script/config')
var douban = require('../../comm/script/fetch')
var url = 'https://api.douban.com/v2/movie/coming_soon'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0,
    windowHeight: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    douban.fetchFilms.call(that, url, config.city, that.data.start, config.count)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight * 2
        })
      }
    })
  },
  scroll: function (e) {
  },
  scrolltolower: function () {
    var that = this
    douban.fetchFilms.call(that, url, config.city, that.data.start, config.count)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this
    that.setData({
      films: [],
      hasMore: true,
      showLoading: true,
      start: 0
    })
    douban.fetchFilms.call(that, url, config.city, that.data.start, config.count)
  }
})