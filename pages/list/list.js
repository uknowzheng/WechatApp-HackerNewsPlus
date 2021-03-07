// pages/list/list.js
import HackerNewsService from '../../utils/hacker-news-api-service'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"hello",
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let api = new HackerNewsService();
    const list  = await api.getListByType();
    const firstPageData = list.splice(0,30);
    // console.log(firstPageData)
    const result = await (Promise.all(firstPageData.map((item)=>{
      return api.getItemByItemId(item);
    })));
    console.log(result)
    this.setData({
      message:"hello data",
      list:result
    });
    // console.log(this.data.listData)
    // console.log(result)
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