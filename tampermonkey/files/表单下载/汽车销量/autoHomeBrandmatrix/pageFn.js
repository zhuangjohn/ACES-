exports.fn = {
  // list
  list: v => {
    let baseHref=`https://www.autohome.com.cn/Channel2/BrandMarked/ashx/GetBrandArticles.ashx`
        //brandid=12&pageIndex=4
        let timeLen=10

        $f.goByTime([500,500*timeLen],index=>{
            let page=new WC(baseHref)
            let brandName=$('.logo-tit')[0].innerText.split('品牌指数')[0]
            //            https://www.autohome.com.cn/Channel2/BrandMarked/ashx/GetBrandArticles.ashx?brandid=12&pageIndex=2
            let brandid=Number($page.page.href.match(/\/\d+/)[0].split('/').reverse()[0])
            $f.find(page.setParams({pageIndex:index,brandid})).then(info=>{
                let wantKeys=`brandName Title Title2 Publishtime Class1Name Summary LastUpdateTime ReplyCount ClickCount EditorName FirstCoverImg PcUrl`.split(' ')
                let data=$f.flat($f.parse(info).Article.Items).flatData
                let res=[]
                $f.makeList(data,(item,{v,i,key})=>{
                    if(key=='Title'){
                        item.v=$f.wantJson(wantKeys,item.v)
                        res.push(item.v)
                        item.v['brandName']=brandName
                    }
                    if(key=='LastUpdateTime'||key=='Publishtime'){
                        item.v[key]=new Date(Number($f.split(`/Date(1578140253000)/`,['\\(','\\)'])[1])).toISOString().slice(0,10).split('-').join('')
                    }
                })
                $f.toCsv(res,wantKeys,`汽车之家品牌矩阵_${brandName}_${$page.time}.csv`,'johnErr')
            })
        })
  }
}
