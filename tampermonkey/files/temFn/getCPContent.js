exports.fn = {
  getCPContent(cpName, attrSet, nextPageCallback, isEncode) {
    let cpRes
    if (isEncode == true) {
      cpRes = $page.getCPHref(cpName, v => encodeURI(v))
    } else {
      cpRes = $page.getCPHref(cpName)
    }
    //alert(cpRes)
    let hrefList = $f.trans(cpRes).href
    $f.goByTime([500, hrefList.length * 500], i => {
      let myPage = new WC(hrefList[i])
      let keywords = cpRes[i].keywords
      let type = cpRes[i].type
      let params = cpRes[i].params
      let name = cpRes[i].name
      for (let j = 0; j < 10; j++) {
        myPage.setParams(nextPageCallback(j))
        $f.find(myPage.page.url.href).then(res => {
          $f.sleep(2000).then(() => {
            //let outData=myPage.getAttr($(attrSet.selector,$(res)),attrSet.attr)
            //outData.map((value,index)=>{
            //outData[index]=$page.vCallback(value)
            //})
            let outData = {}
            let len
            $f.faceJson(attrSet.attr, (v, i, key) => {
              outData[key] = myPage.getAttr($(attrSet.selector, $(res)), { [key]: v })
              outData[key].map((value, index) => {
                outData[key][index] = $page.vCallback(value)
              })
              len = outData[key].length
            })
            outData.keywords = Array(len).fill(keywords)
            outData.params = Array(len).fill(params)
            outData.type = Array(len).fill(type)
            outData.name = Array(len).fill(name)
            outData = $f.tranList(outData)
            $f.makeList(outData, (item, { v, i, key }) => {
              item.v[key] = myPage.vCallback(v)
              item.v[key + 'Score'] = $f.getScore(
                v,
                $f
                  .replace($f.toArray(item.v.keywords).join(''), /\d|\w/, '')
                  .split('')
                  .filter(v => !/[有|限|公|司|集|团|股|份|贸|易|招|聘|贷|百|度|百|科]/.test(v))
              )
            })
            outData = outData.filter(
              v =>
                $f.deepTest(v.title, {
                  company: '企查查、天眼查、注册、工商、商标、启信宝'.split('、'),
                  baidu: '百度知道、百科、百度地图、百度图片'.split('、'),
                  info: '文库、文档、豆丁、学术、爱问共享、道客巴巴、下载、幻灯片、doc、xls、ppt、pdf、PDF、DOC、PPT、XLS'.split(
                    '、'
                  ),
                  contact: '联系方式、电话、地址、拨打'.split('、'),
                  ad: '领取、咨询、赶紧、赶快、免费'.split('、'),
                  employee: '职场、职业、前景、待遇、人才、工资、福利、薪资、招聘、求职、普工、前程、无忧、58同城、智联、job、职友集、大街网、看准网、猎聘、卓聘、直聘、聘'.split(
                    '、'
                  ),
                  question: '怎么样、怎样、什么、好吗'.split('、'),
                  other: '地图、贷款、信用、法院、诉讼、法律、口碑、失信、破产、判决'.split('、')
                }) == 0
            )
            //outData=outData.filter(v=>v.titleScore>0)
            $f.safe(() => {
              $f.toCsv(
                outData,
                Object.keys(outData[0]),
                `[${name + '_files_' + keywords.split(' ')[0]}]_page${$f.toNumString(j, 2)}_${
                  $page.time
                }_${$f.toNumString(i, 5)}.csv`,
                'johnErr'
              )
            })
          })
        })
      }
    })
  }
}
