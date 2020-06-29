exports.fn = {
  // list
  list: v => {
    let baseHref = 'https://search.damai.cn/searchajax.html'
    let infoHref = 'https://search.damai.cn/external/gl.html'
    let newPage = new WC(baseHref)
    let infoPage = new WC(infoHref)
    let city = ''
    //city='上海'
    newPage.setParams({
      cty: city,
      order: 1,
      pageSize: 30,
      currPage: 1
    })
    let maxPage = 160
    $f.goByTime([600, 800 * maxPage], i => {
      newPage.setParams({
        currPage: i
      })
      $f.find(newPage.page.url.href).then(res => {
        let pageData = $f.parse(res)
        infoPage.setParams({ projects: pageData.ids })
        let keys = [
          'categoryname',
          'cityname',
          'name',
          'nameNoHtml',
          'price',
          'pricehigh',
          'showstatus',
          'showtime',
          'subcategoryname',
          'subhead',
          'venue',
          'venuecity',
          'verticalPic'
        ]
        //$f.export('1.json',pageData.pageData.resultData)
        let outData = pageData.pageData.resultData
        outData = $f.tranList($f.trans(outData))
        $f.makeList(outData, (item, { v, i, key }) => {
          item.v[key] = $page.vCallback(v)
        })
        $f.toCsv(outData, keys, `[大麦网]_${$page.time}_${city}_${i}.csv`, 'johnErr')
        $f.safe(() => {
          $f.find(infoPage.page.url.href).then(rs => {
            let exportData = $f.parse(rs).suggest
            exportData = $f.tranList($f.trans(exportData))
            $f.makeList(exportData, (item, { v, i, key }) => {
              item.v[key] = $page.vCallback(v)
            })
            keys = ['projectName', 'showTime', 'startTime', 'fold', 'price', 'venue', 'verticalPic', 'cityname']
            $f.toCsv(exportData, keys, `大麦网_推荐_${$page.time}_${city}_${i}.csv`, 'johnErr')
          })
        })
      })
    })
  }
}
