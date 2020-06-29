// ==UserScript==
// @name         000tampermonkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       http://*
// @include https://*
// @grant        unsafeWindow
// @grant GM_download
// @grant GM_request
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require http://www.actualchoice.club/web/johnAPI.js
// @require http://www.actualchoice.club/web/WC.js
// ==/UserScript==
let $f=new john()
let $page=new WC(location.href)
//配置页面属性
$page.pageConfig={
  default:/https?/,
  csvToJson:/www.bejson.com\/json\/col2json/,
actualchoice:/www.actualchoice.club\/web/,
baiduZhidao:/https?:\/\/(zhidao).baidu.com\/search/,
baiduSearch:/https?:\/\/(www).baidu.com\/s/,
sougouSearch:/https?:\/\/weixin.sogou.com\/weixin/,
magiSearch:/magi.com/,
//汽车媒体
autoHomeSearch:/https:\/\/sou.autohome.com.cn\/zonghe/,
souhuSearch:/http:\/\/s.auto.sohu.com\/new\/search.at/,
dcdSearch:/https:\/\/www.dcdapp.com\/search/,
//社区
zhihuSearch:/https:\/\/www.zhihu.com\/search/,
//电商
tmallSearch:/https:\/\/list.tmall.com\/search_product.htm/,

//报告
nineItSearch:/https?:\/\/search.199it.com/,

brandmaxMail:/mail.qiye.163.com\/js6\/main.jsp/,
mapbar:/https?:\/\/poi.mapbar.com/,
//汽车之家车型产品
autoHomeProduct:/https?:\/\/car.autohome.com.cn\/price/,
yiche:/https:\/\/dealer.bitauto.com/,
dealers:/dealer.autohome.com.cn/,
//太平洋汽车经销商
pcauto:/https:\/\/price.pcauto.com.c\/shangjia\/c3\/p2.html/,
//汽车销量
souhu:/http:\/\/db.auto.sohu.com/,
//汽车之家车型产品
autoHomeProduct:/https?:\/\/car.autohome.com.cn\/price/,
autoHomeSearchRes:/sou.autohome.com.cn\/wenzhang/,
autoHomeBrandmatrix:/autohome.com.cn\/hangye\/brandmatrix/,
//大麦网
damai:/damai.cn/,
piaoniu:/piaoniu.com/,
huodongxing:/huodongxing.com\/events/,

}
$page.getPosition()
let position=$page.page.position

function getCPContent(cpName, attrSet, nextPageCallback, isEncode) {
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
function imgSrcCheck(node, arr) {
    arr = $f.toArray(arr)
    arr.map(v => {
      if (!$f.isErr(node[v])) {
        node.src = node[v]
      }
    })
  }
function sleepGoByTime(sleepTime, goByTimeSet,fn) {
    $f.sleep(sleepTime).then(()=>{
      $f.goByTime(goByTimeSet,fn)
    })
  }
function sougouLinkTrans(temLink) {
    return new Promise((goto, failto) => {
      GM_xmlhttpRequest({
        url: temLink,
        onload: function(res) {
          let fun = $f.deepReg(res.responseText, /var url[\d|\D]+?url.replace\("@", ""\)/)[0]
          eval(fun)
          try {
            goto(url)
          } catch (e) {
            let url = ''
            goto(url)
            failto(url)
          }
        }
      })
    })
  }

$page.setWebTaskConfig({
    fileDownload:{
        baidu:{
            url:'http://www.baidu.com',
            fn:['listDownload']
        },
        wangyi:{
            url:'http://news.163.com/rank/',
            fn:['listDownload']
        }
    }
})
$page.setCpConfig({
    baiduSearch:['wd',' '],
    sougouSearch:['query',' '],
    dcdSearch:['keyword',' '],
    magiSearch:['q',' '],
    autoHomeSearch:['q',' '],
    souhuSearch:['keyword',' '],
    zhihuSearch:['q',' '],
    tmallSearch:['q',' '],
})
$page.setListConfig({
    baiduSearchRes: {
      table: '#content_left',
      tr: '.result',
      td: ['.t', '.c-abstract', '.f13']
    },
    sougou: {
      table: '#wrapper',
      tr: '.news-list li',
      td: ['h3 a', '.txt-info', '.s-p a', '.s-p span']
    },
    magi: {
      table: 'main',
      tr: '.card',
      td: ['h3', 'time', 'cite', 'p']
    },
    qimai_globalrank: {
      table: '.data-table',
      tr: 'tr',
      td: ['td', 'th']
    },
    qimai_float: {
      table: 'table',
      tr: 'tr',
      td: ['td', 'th']
    },
    mapbar: {
      table: '.sortC',
      tr: 'dd',
      td: ['a']
    },
    souhu: {
      table: '.area_box table,.sales_box',
      tr: 'tr',
      td: ['td', 'th']
    },
    autoHomeProduct: {
      table: '.brandtab-cont',
      tr: '.list-cont-bg',
      td: ['.main-title .font-bold', '.main-title .score-cont', '.main-lever-right>div:nth-child(1)', 'li']
    },
    autoHomeSearchRes: {
      table: '.result-list',
      tr: '.list-dl',
      td: ['dt a', 'dd']
    },
    autoHomeBrandmatrix: {
      table: '.main',
      tr: '.info',
      td: ['h3', '.intro', '.more-l.span', '.more-r span']
    },
    dcdapp: {
      table: '.container',
      tr: '.info',
      td: ['.title', '.footer span']
    },
    pcauto: {
      table: '.listTb',
      tr: '.liFc',
      td: ['p']
    },
    dealers: {
      table: '.list-box',
      tr: '.list-item',
      td: ['.info-wrap li', 'a']
    },
    yiche: {
      table: '.dealer-box',
      tr: '>div',
      td: ['h6 a', 'p']
    },
    newrank: {
      table: 'html',
      tr: '#table_header',
      td: ['th']
    },
    chuanboyi: {
      table: '#list_content',
      tr: 'tr',
      td: ['th', 'td']
    },
    pharmnet: {
      table: '#center',
      tr: 'ul',
      td: ['li']
    },
    pharmnetCompany: {
      table: '#right',
      tr: 'ul',
      td: ['li']
    },
    piaoniu: {
      table: '.results-container',
      tr: '.item .info',
      td: ['>div', '>a']
    },
    huodongxing: {
      table: '.search-tab-content-list-check',
      tr: '.search-tab-content-item-mesh',
      td: [
        '>a div >.date-pp',
        '>a .item-mesh-conter .item-title',
        '>a .item-mesh-conter .item-dress',
        '>a .item-bottom-left',
        '.browse-div'
      ]
    },
    sasa: {
      table: '.content',
      tr: '.category li',
      td: ['.sub-category a']
    },
    tmall: {
      table: '#content',
      tr: '.item',
      td: ['.detail .item-name', '>dd .sale-area', '>dd .cprice-area', '>dd .title']
    },
    bilibili: {
      table: '.video-list',
      tr: 'li',
      td: ['.title', '.watch-num', '.time', '.up-name', '.so-imgTag_rb']
    },
    cuo: {},
    event_tap: {
      table: '.category-search',
      tr: '.v-expansion-panel__container',
      td: ['.title-text', '.v-btn__content']
    },
    alibaba_tap: {
      table: '.menu-body',
      tr: 'ul',
      td: ['h1', 'h2', 'li']
    },
    lianjiaCity: {
      table: '.city_selection_section',
      tr: 'li',
      td: ['a']
    }
  })

let pageFn={
    [position+'autoClose']:v => {
    $f.sleep($page.getParams('autoClose').autoClose).then(() => {
      unsafeWindow.close()
    })
  },
    [position+'autoRun']:v => {
    //配置间隔时间和执行次数
    let autoRunTime = Number($page.getParams('autoRunTime').autoRunTime) || 3000
    let autoRunIndex = Number($page.getParams('autoRunIndex').autoRunIndex) || 0
    let maxRunIndex = Number($page.getParams('maxRunIndex').maxRunIndex) || 10
    let task = $page.getParams('autoRun').autoRun.split(',')
    $f.sleep(autoRunTime).then(() => {
      task.map((v, i) => {
        $page.setParams({
          [v]: 1
        })
      })
      if (autoRunIndex < maxRunIndex) {
        autoRunIndex++
        $page.setParams({
          autoRunTime,
          autoRunIndex,
          maxRunIndex
        })
        unsafeWindow.location.href = $page.page.href
      }
    })
  },
    [position+'html']:v => {
    $f.sleep(500).then(() => {
      $page.scroll(
        0,
        1000,
        800,
        30,
        () => {
          $page.downHtml(`[html下载]${document.title}_${$page.time}.html`, 'img', document, node => {
            node.src = $f.replace(node.src, /"\/\//, '"https://')
            imgSrcCheck(node, 'data-src')
            return node.width > 200
          })
        },
        html => {
          let bgImgList = $('*').filter((i, v) => !v.style.backgroundImage == '')
          bgImgList.map((index, imgNode) => {
            let src = imgNode.style.backgroundImage
            src = $f.replace(src, /"\/\//, '"https://')
            src = src.split('"')[1]
            if (!$f.isErr(src)) {
              let newImg = document.createElement('img')
              newImg.src = src
              $('body', html).append(newImg)
            }
          })
          return html
        }
      )
    })
  },
    [position+'htmlScore']:v => {
    let typeScore = $f.typeScore(document.body.innerText, $page.cpConfig.cpWord)
    let msg = ''
    let typeText = ''
    typeScore.map((v, i) => {
      typeText += `${v.type}_`
      msg += `${v.type}得分${v.score}\n`
      typeScore[i].href = location.href
      typeScore[i].description = $page.vCallback(document.title)
    })
    $page.downHtml(`[${typeScore[0].type}]${typeScore[0].score}.html`, ['div', 'p'])
    // alert(msg)
    //$f.toCsv(typeScore,Object.keys(typeScore[0]),'[页面得分].csv')
  },
    [position+'img']:v => {
    $page.downImg(`[通用_${document.title}]`, $('body')[0], [0, 500, 500, 100], imgLen => [500, imgLen * 1000])
  },
    [position+'keyword']:v => {
    $f.sleep(1000).then(() => {
      $page.getKeywords('all', [document.title, location.href])
    })
  },
    [position+'list']:v => {
    $page.getList()
  },
    csvToJsonsougouLink:v=> {
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
    csvToJsonlinkFind:v => {
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
    csvToJsoncross:v => {
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
    csvToJsonwechatClear:v=>{
    let a=$f.parse($('#result').val())
    a=JSON.stringify(a)
    a=$f.replace(a,/(<title><\!\[CDATA\[)|(\]\]><\/title>)|(<des><\!\[CDATA\[)|(\]\]><\/des>)|(<url><\!\[CDATA\[)|(#rd\]\]><\/url>)/,'')
    a=$f.parse(a)
    a=$f.tranList($f.trans(a))
    $f.toCsv(a,Object.keys(a[0]),`[json计算]_微信监测干净版${$page.time}.csv`,'johnErr')
},
    csvToJsontransList:v=>{
    let a=$f.parse($('#result').val())
    a=$f.trans(a)
    $f.export('[json计算]_trans.txt',JSON.stringify(a))
  },
    actualchoicefileDownload:v=>{
    $page.doTask('fileDownload')
  },
    autoHomeSearchcpSearch:v => {
    getCPContent('autoHomeSearch',{
      selector:'#cresult dt a',
      attr:{title:'innerText',a:'href'}
  },j=>{page:j+1},true)
  },
    baiduSearchcpSearch:v => {
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
    baiduSearchnewPage:v=>{
    $f.faceArr($('#content_left h3 a,#content_left h2 a'),(v,i)=>{
      v.click()
    })
  },
    baiduSearchturn:v => {
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
    baiduSearchlist:v=>{
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
  },
    baiduZhidaoautoClose:v => {
    $f.sleep($page.getParams('autoClose').autoClose).then(() => {
      unsafeWindow.close()
    })
  },
    baiduZhidaoautoRun:v => {
    //配置间隔时间和执行次数
    let autoRunTime = Number($page.getParams('autoRunTime').autoRunTime) || 3000
    let autoRunIndex = Number($page.getParams('autoRunIndex').autoRunIndex) || 0
    let maxRunIndex = Number($page.getParams('maxRunIndex').maxRunIndex) || 10
    let task = $page.getParams('autoRun').autoRun.split(',')
    $f.sleep(autoRunTime).then(() => {
      task.map((v, i) => {
        $page.setParams({
          [v]: 1
        })
      })
      if (autoRunIndex < maxRunIndex) {
        autoRunIndex++
        $page.setParams({
          autoRunTime,
          autoRunIndex,
          maxRunIndex
        })
        unsafeWindow.location.href = $page.page.href
      }
    })
  },
    baiduZhidaohtml:v => {
    $f.sleep(500).then(() => {
      $page.scroll(
        0,
        1000,
        800,
        30,
        () => {
          $page.downHtml(`[html下载]${document.title}_${$page.time}.html`, 'img', document, node => {
            node.src = $f.replace(node.src, /"\/\//, '"https://')
            imgSrcCheck(node, 'data-src')
            return node.width > 200
          })
        },
        html => {
          let bgImgList = $('*').filter((i, v) => !v.style.backgroundImage == '')
          bgImgList.map((index, imgNode) => {
            let src = imgNode.style.backgroundImage
            src = $f.replace(src, /"\/\//, '"https://')
            src = src.split('"')[1]
            if (!$f.isErr(src)) {
              let newImg = document.createElement('img')
              newImg.src = src
              $('body', html).append(newImg)
            }
          })
          return html
        }
      )
    })
  },
    baiduZhidaohtmlScore:v => {
    let typeScore = $f.typeScore(document.body.innerText, $page.cpConfig.cpWord)
    let msg = ''
    let typeText = ''
    typeScore.map((v, i) => {
      typeText += `${v.type}_`
      msg += `${v.type}得分${v.score}\n`
      typeScore[i].href = location.href
      typeScore[i].description = $page.vCallback(document.title)
    })
    $page.downHtml(`[${typeScore[0].type}]${typeScore[0].score}.html`, ['div', 'p'])
    // alert(msg)
    //$f.toCsv(typeScore,Object.keys(typeScore[0]),'[页面得分].csv')
  },
    baiduZhidaoimg:v => {
    $page.downImg(`[通用_${document.title}]`, $('body')[0], [0, 500, 500, 100], imgLen => [500, imgLen * 1000])
  },
    baiduZhidaokeyword:v => {
    $f.sleep(1000).then(() => {
      $page.getKeywords('all', [document.title, location.href])
    })
  },
    baiduZhidaolist:v => {
    $page.getList()
  },
    dcdSearchcpSearch:v => {
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
    dcdSearchlist:v=>{
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
  },
    nineItSearchnewPage:v => {
    $f.sleep(800).then(() => {
      $f.faceArr($('.rows .row >a'), (v, i) => {
        v.click()
      })
    })
  },
    sougouSearchcpSearch:v => {
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
    sougouSearchnewPage:v=>{
    $f.faceArr($('.news-box h3 a'),(v,i)=>{
      $f.sleep(2000*(1+Math.random())).then(()=>{
          v.click()
      })
   })
  },
    souhuSearchcpSearch:v => {
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
    souhuSearchlist:v=>{
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
  },
    tmallSearchcpSearch:v => {
    getCPContent(
      'tmall',
      {
        selector: '#J_ItemList .product-iWrap .productTitle a',
        attr: { text: 'innerText', href: 'href' }
      },
      j => {
        page: j + 1
      }
    )
  },
    zhihuSearchcpSearch:v => {
    getCPContent(
      'zhihuSearch',
      {
        selector: '.ContentItem-title a',
        attr: { title: 'innerText', a: 'href' }
      },
      j => ''
    )
  },
    brandmaxMailoutMail:()=>{
    let timeSet=[6000,6000*60]
    sleepGoByTime(500,timeSet,()=>{
      $('.nui-chk-symbol')[0].click()
    })
    sleepGoByTime(1000,timeSet,()=>{
      $('.nui-dropdownBtn-arr')[3].click()
    })
    sleepGoByTime(1500,timeSet,()=>{
      $f.filter($('.nui-menu-item-link .nui-menu-item-text'),v=>/导出/.test(v.innerText))[0].click()
    })
    sleepGoByTime(3500,timeSet,()=>{
      $('.nui-btn-icon')[5].click()
    })
  },
    mapbarlist:v => {
    $f.sleep(500).then(()=>{
      $page.getList(['mapbar'])
  })
  },
    autoHomeProductlist:v => {
    $f.sleep(500).then(()=>{
      $page.getList(['autoHomeProduct'])
  })
  },
    dealerslist:v => {
    $f.sleep(500).then(()=>{
      $page.getList(['dealers'])
  })
  },
    pcautolist:v => {
    $f.sleep(500).then(()=>{
      $page.getList(['pcauto'])
  })
  },
    yichelist:v => {
    $f.sleep(500).then(() => {
      $page.getList(['yiche'])
    })
  },
    autoHomeBrandmatrixlist:v => {
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
  },
    souhulist:v => {
    $f.sleep(500).then(()=>{
      $page.getList(['souhu'])
  })
  },
    damailist:v => {
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
  },
    huodongxinglist:v => {
    $f.sleep(500).then(()=>{
      $f.safe(()=>{
          $page.getList(['huodongxing'])
      })
    })
  },
    piaoniulist:v => {
    $f.sleep(500).then(() => {
      $f.safe(() => {
        $page.getList(['piaoniu'])
      })
    })
  },
}
$page.pageFn={}
$f.faceJson(pageFn,(v,i,key)=>{
  if(new RegExp(position).test(key)&&!$f.isErr(position)){
    $page.pageFn[key]=pageFn[key]
  }
})

let doWhileFn={
    [position + '_' +position + 'autoClose']:$page.getParams('autoClose').autoClose,
    [position + '_' +position + 'autoRun']:$page.getParams('autoRun').autoRun,
    [position + '_' +position + 'html']:$page.getParams('htmlDownload').htmlDownload==1,
    [position + '_' +position + 'htmlScore']:$page.getParams('htmlScore'). htmlScore==1,
    [position + '_' +position + 'img']:$page.getParams('imgDownload').imgDownload==1,
    [position + '_' +position + 'keyword']:$page.getParams('keywordDownload'). keywordDownload==1,
    [position + '_' +position + 'list']:$page.getParams('listDownload').listDownload==1,
    csvToJson_csvToJsonsougouLink:$page.getParams('sougouLink').sougouLink==1,
    csvToJson_csvToJsonlinkFind:$page.getParams('linFind').linFind==1,
    csvToJson_csvToJsoncross:$page.getParams('cross').cross==1,
    csvToJson_csvToJsonwechatClear:$page.getParams('wechatClear').wechatClear==1,
    csvToJson_csvToJsontransList:$page.getParams('transList').transList==1,
    actualchoice_actualchoicefileDownload:$page.getParams('taskDownFile').taskDownFile==1,
    autoHomeSearch_autoHomeSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    baiduSearch_baiduSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    baiduSearch_baiduSearchnewPage:$page.getParams('newPage').newPage==1,
    baiduSearch_baiduSearchturn:$page.getParams('nextPage').nextPage==1,
    baiduSearch_baiduSearchlist:$page.getParams('listDownload').listDownload==1,
    baiduZhidao_baiduZhidaoautoClose:$page.getParams('autoClose').autoClose,
    baiduZhidao_baiduZhidaoautoRun:$page.getParams('autoRun').autoRun,
    baiduZhidao_baiduZhidaohtml:$page.getParams('htmlDownload').htmlDownload==1,
    baiduZhidao_baiduZhidaohtmlScore:$page.getParams('htmlScore'). htmlScore==1,
    baiduZhidao_baiduZhidaoimg:$page.getParams('imgDownload').imgDownload==1,
    baiduZhidao_baiduZhidaokeyword:$page.getParams('keywordDownload'). keywordDownload==1,
    baiduZhidao_baiduZhidaolist:$page.getParams('listDownload').listDownload==1,
    dcdSearch_dcdSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    dcdSearch_dcdSearchlist:$page.getParams('listDownload').listDownload==1,
    nineItSearch_nineItSearchnewPage:$page.getParams('newPage').newPage==1,
    sougouSearch_sougouSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    sougouSearch_sougouSearchnewPage:$page.getParams('newPage').newPage==1,
    souhuSearch_souhuSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    souhuSearch_souhuSearchlist:$page.getParams('listDownload').listDownload==1,
    tmallSearch_tmallSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    zhihuSearch_zhihuSearchcpSearch:$page.getParams('cpSearch').cpSearch==1,
    brandmaxMail_brandmaxMailoutMail:$page.getParams('outMail').outMail==1,
    mapbar_mapbarlist:$page.getParams('listDownload').listDownload==1,
    autoHomeProduct_autoHomeProductlist:$page.getParams('listDownload').listDownload==1,
    dealers_dealerslist:$page.getParams('listDownload').listDownload==1,
    pcauto_pcautolist:$page.getParams('listDownload').listDownload==1,
    yiche_yichelist:$page.getParams('listDownload').listDownload==1,
    autoHomeBrandmatrix_autoHomeBrandmatrixlist:$page.getParams('listDownload').listDownload==1,
    souhu_souhulist:$page.getParams('listDownload').listDownload==1,
    damai_damailist:$page.getParams('listDownload').listDownload==1,
    huodongxing_huodongxinglist:$page.getParams('listDownload').listDownload==1,
    piaoniu_piaoniulist:$page.getParams('listDownload').listDownload==1,
}
$f.faceJson(doWhileFn,(v,i,key)=>{
  $page.doWhile({
    [key]:v
  })
})

$page.setBtn({
  [position]:['body','','获取关键词>>',position+'keyword']
})
$page.setBtn({
  [position]:['body','','IMGHTML下载>>',position+'html']
})
$page.setBtn({
  [position]:['body','','页面得分>>',position+'htmlScore']
})
$page.setBtn({
  [position]:['body','','图片下载>>',position+'img']
})
$page.setBtn({
  [position]:['body','','表单下载>>',position+'list']
})
$page.setBtn({
  'csvToJson':['body','','将sougou临时链接转为长期链接','csvToJsonsougouLink']
})
$page.setBtn({
  'csvToJson':['body','','获取from_to链式','csvToJsonlinkFind']
})
$page.setBtn({
  'csvToJson':['body','','两列交叉组合','csvToJsoncross']
})
$page.setBtn({
  'csvToJson':['body','','提取微信监测中的信息','csvToJsonwechatClear']
})
$page.setBtn({
  'csvToJson':['body','','trans函数表格转置','csvToJsontransList']
})
$page.setBtn({
  'actualchoice':['body','','获取榜单大全','actualchoicefileDownload']
})
$page.setBtn({
  'autoHomeSearch':['body','','cpSearch>>','autoHomeSearchcpSearch']
})
$page.setBtn({
  'baiduSearch':['body','','cpSearch>>','baiduSearchcpSearch']
})
$page.setBtn({
  'dcdSearch':['body','','cpSearch>>','dcdSearchcpSearch']
})
$page.setBtn({
  'nineItSearch':['body','','cpSearch>>','nineItSearchcpSearch']
})
$page.setBtn({
  'sougouSearch':['body','','cpSearch>>','sougouSearchcpSearch']
})
$page.setBtn({
  'souhuSearch':['body','','cpSearch>>','souhuSearchcpSearch']
})
$page.setBtn({
  'tmallSearch':['body','','cpSearch>>','tmallSearchcpSearch']
})
$page.setBtn({
  'zhihuSearch':['body','','cpSearch>>','zhihuSearchcpSearch']
})
$page.setBtn({
  'brandmaxMail':['body','','导出之后的每一页','brandmaxMailoutMail']
})
$page.setBtn({
  'mapbar':['body','','poi>>','mapbarlist']
})
$page.setBtn({
  'autoHomeProduct':['body','','下载产品>>','autoHomeProductlist']
})
$page.setBtn({
  'dealers':['body','','下载经销商信息>>','dealerslist']
})
$page.setBtn({
  'pcauto':['body','','下载经销商信息>>','pcautolist']
})
$page.setBtn({
  'yiche':['body','','下载经销商信息>>','yichelist']
})
$page.setBtn({
  'autoHomeBrandmatrix':['body','','下载品牌矩阵>>','autoHomeBrandmatrixlist']
})
$page.setBtn({
  'souhu':['body','','下载销量>>','souhulist']
})
$page.setBtn({
  'damai':['body','','下载票务>>','damailist']
})
$page.setBtn({
  'huodongxing':['body','','下载票务>>','huodongxinglist']
})
$page.setBtn({
  'piaoniu':['body','','下载票务>>','piaoniulist']
})

$f.safe(()=>{
  $f.faceJson($f.notJson(["000defaultkeyword","000defaulthtml","000defaulthtmlScore","000defaultimg","000defaultlist","csvToJsonsougouLink","csvToJsonlinkFind","csvToJsoncross","csvToJsonwechatClear","csvToJsontransList","actualchoicefileDownload","autoHomeSearchcpSearch","baiduSearchcpSearch","dcdSearchcpSearch","nineItSearchcpSearch","sougouSearchcpSearch","souhuSearchcpSearch","tmallSearchcpSearch","zhihuSearchcpSearch","brandmaxMailoutMail","mapbarlist","autoHomeProductlist","dealerslist","pcautolist","yichelist","autoHomeBrandmatrixlist","souhulist","damailist","huodongxinglist","piaoniulist"],$page.pageFn),(v,i,key)=>{
    $page.setBtn({})
  })
})