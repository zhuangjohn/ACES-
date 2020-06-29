exports.fn = {
  // cpSearch
  cpSearch: v => {
    let hrefInfo=$page.getCPHref('sougouSearch',v=>v)
    let len=hrefInfo.length
    $f.goByTime([5000,6000*len],i=>{
        if(i<len){
            let myHref=new WC(hrefInfo[i].href)
            myHref.setParams({listDownload:1,autoClose:15000,currTab:1,cpSearch:0})
            $f.safe(()=>{
                //getWechatPage(myHref.getParams('query').query,1)
                unsafeWindow.open(myHref.page.href)
            })
        }

    })
  },
  //新开页面
  newPage:v=>{
    $f.faceArr($('.news-box h3 a'),(v,i)=>{
      $f.sleep(2000*(1+Math.random())).then(()=>{
          v.click()
      })
   })
  }
}
