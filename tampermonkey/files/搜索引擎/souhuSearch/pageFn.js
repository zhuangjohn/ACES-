exports.fn = {
  // cpSearch
  cpSearch: v => {
    let hrefInfo=$page.getCPHref('souhuSearch',v=>v)
    let len=hrefInfo.length
    $f.goByTime([5000,6000*len],i=>{
        if(i<len){
            let myHref=new WC(hrefInfo[i].href)
            myHref.setParams({listDownload:1,autoClose:6000,currTab:1,cpSearch:0,htmlScore:1})
            $f.safe(()=>{
                unsafeWindow.open(myHref.page.href)
            })
        }

    })
  },
  list:v=>{
    let keyword=$page.getParams('keyword').keyword
    $f.goByTime([500,500*30],(index)=>{
        $f.find($page.setParams({page:index})).then(html=>{
            $f.sleep(500).then(()=>{
                $f.setHtml($('.l_part',$(html)))
                $f.setTr('.sechCon_list')
                $f.setTd('h2')
                $f.setTd('.f_info a')
                $f.setTd('.f_info span')
                $f.setTd('.summary')
                let res=$f.toList(v=>v.innerText)
                res=$f.tranList($f.trans(res))
                $f.makeList(res,(item,{v,i,key})=>{
                    if(key==0){
                        res[item.i]['score']=$f.getScore(v,keyword.split(''))
                    }
                    res[item.i][key]=$page.vCallback(v)
                })
                $f.toCsv(res,Object.keys(res[0]),`搜狐汽车精准查找_${keyword}${$page.time}_${index}.csv`,'johnErr')
            })
        })

    })
  }
}
