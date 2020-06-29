exports.fn = {
  // cpSearch
  cpSearch: v => {
    getCPContent(
      'baiduSearch',
      {
        selector: 'h3 a,h2 a',
        attr: { title: 'innerText', a: 'href' }
      },
      j => {
        pn: j * 10
      }
    )
  },
  newPage:v=>{
    $f.faceArr($('#content_left h3 a,#content_left h2 a'),(v,i)=>{
      v.click()
    })
  },
  //翻页
  turn: v => {
    $page.setTurn({
      baidu_search: v => $page.setParams({ pn: v * 10, nextPage: 1, newPage: 1 })
    })
    if ($f.isErr($page.getParams('pn').pn)) {
      unsafeWindow.location.href = $page.setParams({ pn: 0 })
    }
    let num = $('#page .fk_cur+span')[0].innerText
    if (num < 30) {
      $page.turn('baidu_search', num, 3000, true)
    }
  },
  //下载表单
  list:v=>{
    $f.sleep(1000).then(()=>{
      $page.setListConfig({
        temTable:{
            table:'#content_left'    ,
            tr:'.result',
            td:['.t','.c-abstract','.f13']
        }
      })
      let wd=$page.getParams('wd').wd
      $page.getList('temTable',false,false,false,list=>{
        $f.safe(()=>{
          list.map((v,i)=>{
            $f.faceJson(v,(vv,index,key)=>{
                list[i][key+'_Score']=$f.getScore(vv,wd.split(' ').filter(v!==''))
            })
        })
      })
        return list
      },wd)
    })
  }
}
