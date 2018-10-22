const appData = getApp().globalData;
function indentityFilter(pageObject){
  if(pageObject.onShow){
    let _onShow = pageObject.onShow;
    pageObject.onShow = function(){
      appData.promise.then(()=>{
        wx.redirectTo({
          url: '/pages/login/login'
        });
      },()=>{
        let currentInstance = getPageInstance();
        _onShow.call(currentInstance);
      })
    }
  }
  return pageObject;
}