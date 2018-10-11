module.exports=(url,type,data)=>{
return new Promise((resolve,reject)=>{
  wx.request({
    url:url,
    data:data,
    header:{
      "content-Type":"json"
    },
    method:type,
    dataType:"json",
    success:resolve,
    fail:reject
  })
})
}