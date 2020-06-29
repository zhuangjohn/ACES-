exports.fn = {
  //将搜狗链接转为长期链接
  sougouLink:v=> {
    //        let href=`https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgSwDeVl5OzuLcs3XyLhXQz9UdbjEADrG7G1qXa8Fplpd99h0AiooEjEDrDUo2sO6bq8LI0iYrzxIAFRFibnFSsljiSRS57Im4GbOjJEQ-YzHpMGzJdmmgcofK-fInGGB3quy7TZv9rbnpsKlOulARizvDhSg1VR-0VE2QBSxNcwq4JWhnlWuypicqAXcP6DD3DjbhdF9K7ItCw5nQd9mts79Cy6umSSPEsg..&type=2&query=%E9%95%BF%E6%B2%99%20%E6%B1%BD%E8%BD%A6%20%E6%B4%BB%E5%8A%A8&token=21F316F582C7AF86333796BA8E3A50613337AB505EBC262B`
    let myUrl = []
    let temUrlList = $f.trans($f.parse($('#result').val())).url
    let len = temUrlList.length
    temUrlList.map((v, i) => {
      sougouLinkTrans(v).then(url => {
        myUrl.push([{ url: url }])
        if ((i = len - 1)) {
          $f.toCsv(myUrl, 'url', '[sougou链接].csv', 'johnErr')
        }
      })
    })
  },
  //通过列表[{from,to}]获取链式
  linkFind: v => {
    function go(list) {
      list.map((v, i) => {
        list[i].mid = []
        list.map((vv, ii) => {
          if (v.from == vv.to) {
            list[i].mid.push(v.from)
            list[i].from = vv.from
          }
        })
      })
      return list
    }
    function linkFrom(list) {
      list = go(list)
      $f.toCsv(list, Object.keys(list[0]), '[json计算]_链路追寻.csv', 'johnErr')
    }
    linkFrom($f.parse($('#result').val()))
  },
  //获取组合
  cross: v => {
    let x = $f.parse($('#result').val())
    let f = $f.trans(x)
    function beTrue(text) {
      if ($f.isErr(text)) {
        text = ''
      }
      return text
    }
    let res = []
    $f.supperMap(f[Object.keys(f)[0]], f[Object.keys(f)[1]], (v, vv, i) => {
      v = beTrue(v)
      vv = beTrue(vv)
      if (v != '' && vv !== '') {
        res.push(v + ' ' + vv)
      }
    })
    $f.export('[json计算]_交叉组合.txt', JSON.stringify(res))
  },
  //提取微信监测中的信息
  wechatClear:v=>{
    let a=$f.parse($('#result').val())
    a=JSON.stringify(a)
    a=$f.replace(a,/(<title><\!\[CDATA\[)|(\]\]><\/title>)|(<des><\!\[CDATA\[)|(\]\]><\/des>)|(<url><\!\[CDATA\[)|(#rd\]\]><\/url>)/,'')
    a=$f.parse(a)
    a=$f.tranList($f.trans(a))
    $f.toCsv(a,Object.keys(a[0]),`[json计算]_微信监测干净版${$page.time}.csv`,'johnErr')
},
//表格转置
  transList:v=>{
    let a=$f.parse($('#result').val())
    a=$f.trans(a)
    $f.export('[json计算]_trans.txt',JSON.stringify(a))
  }
}
