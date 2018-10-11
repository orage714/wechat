var fetch=require("../../untils/fetch.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    page:0,
    pageSize:20,
    catId:1,
    hasMore:true

  },
//获取分类数据
getShopList:function(){
  if (!this.data.hasMore) return wx.hideLoading()
  fetch("https://locally.uieee.com/categories/" + this.data.catId + "/shops","GET",{_limit:this.data.pageSize,_page:this.data.page++}).then((resolve)=>{
    //判断是否到达底部
    let flag = this.data.page * this.data.pageSize < (resolve.header['X-Total-Count']-0)
    
    var  newList = this.data.shopList.concat(resolve.data)
  this.setData({
    shopList:newList,
    hasMore:flag
    
  })
  console.log(this.data.hasMore)
  wx.hideLoading()
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  this.setData({
    catId: options.cat
  })
    if (options.title) {
      wx.setNavigationBarTitle({
        title: options.title,
      })
    }
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    // console.log("页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //下拉刷新 先初始化数据  再重新发起重新请求
   this.setData({
     shopList:[],
     page: 0,
     pageSize: 20,
    hasMore:true
   })
   this.getShopList()
   //请求成功后需手动关闭background三点
  wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showLoading({
      title: 'loading',
    })
  //  this.loadMore()
  this.getShopList()
  },
  onLaunch: function () {
    wx.showNavigationBarLoading()

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})