exports.fn = {
  // cpSearch
  cpSearch: v => {
    let hrefInfo=$page.getCPHref('dcdSearch',v=>v)
    let len=hrefInfo.length
    $f.goByTime([5000,6000*len],i=>{
        if(i<len){
            let myHref=new WC(hrefInfo[i].href)
            myHref.setParams({listDownload:1,autoClose:10000,currTab:1,cpSearch:0,htmlScore:1})
            $f.safe(()=>{
                unsafeWindow.open(myHref.page.href)
            })
        }

    })
  },
  list:v=>{
    let baseHref=`https://www.dcdapp.com/motor/search/api/2/wap/search_content/?&count=20&cur_tab=1&motor_source=pc&format=json`
    //brandid=12&pageIndex=4
    let timeLen=30
    let keyword=$page.getParams('keyword').keyword
    $f.goByTime([500,500*timeLen],index=>{
        let page=new WC(baseHref)
        $f.find(page.setParams({keyword:encodeURI(keyword),offset:20*index})).then(info=>{
            let wantKeys=`datetime score keywordScore abstract motor_web_url media_name has_video is_dizao repin_count favorite_count comment_count go_detail_count bury_count show_play_effective_count`.split(' ')
            let data=$f.flat($f.parse(info).data).flatData
            let res=[]
            $f.makeList(data,(item,{v,i,key})=>{
                if(key=='datetime'){
                    item.v['datetime']=v.slice(0,10).split('-').join('')
                }
                if(key=='abstract'){
                    item.v['keywordScore']=$f.getScore($f.unique(v.split('')).join(''),$f.split(keyword,['']).filter(value=>$f.myTrim(value)!==''))
                }
                item.v[key]=$page.vCallback(v)
                res.push(item)
            })
            $f.toCsv(data,wantKeys,`[懂车帝]_${keyword}_${$page.time}_${index}.csv`,'johnErr')
        })
    })
  }
}
