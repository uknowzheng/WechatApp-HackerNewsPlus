// pages/detail/detail.js
import HackerNewsService from '../../utils/hacker-news-api-service'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    detailUrl:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const {id} = options;
    let api = new HackerNewsService();
    const data  = await api.getItemByItemId(id);
    const {title,url} = data;
    this.setData({
      title,
      detailUrl:"https://www.uknowzheng.world"
    });

// by: "tosh"
// descendants: 0
// id: 27332686
// score: 1
// time: 1622376919
// title: "Let's Play with FFT"
// type: "story"
// url: "https://twitter.com/theshawwn/status/1398796224921321472"
    console.log(data)
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