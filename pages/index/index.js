var fetch =require( "../../untils/fetch.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideList: [],
    navList:[]
  },
// 获取轮播
getSwiperData:function(){
  fetch('https://locally.uieee.com/slides',"GET").then((resolve)=>{
    this.setData({
      slideList:resolve.data
    })
  })
},
//获取列表
getNavList:function(){
  fetch("https://locally.uieee.com/categories","GET").then((resolve)=>{
    this.setData({
      navList:resolve.data
    })
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData()
    this.getNavList()
    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   success:(res)=>{
    //     this.setData({
    //       slideList:res.data
    //     })
    //   }
    // })
    /* 2.请求导航 */
    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success:(res)=>{
    //     this.setData({
    //       navList:res.data
    //     })
    //   }
    // })
    
  },
onReady:function(){

},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(()=>wx.hideNavigationBarLoading(),2000)
   
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