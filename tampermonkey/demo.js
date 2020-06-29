// ==UserScript==
// @name         000图片下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       http://*
// @include https://*
// @grant        unsafeWindow
// @grant GM_download
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require http://www.actualchoice.club/web/johnAPI.js
// @require http://www.actualchoice.club/web/WC.js
// ==/UserScript==
let $f = new john()
let $page = new WC(location.href)
//配置页面属性
$page.pageConfig = {
  // "default": /https?:\/\/*/,
  baidu: /baidu/,
  sougou: /sougou/
}
$page.getPosition()
let position = $page.page.position

function deepClick(selector, callback) {
  $f.safe(() => {
    let dom = $(selector)
    if (dom[0].style.display == '') {
      $f.safe(() => {
        dom[0].click()
        $f.sleep(200).then(() => {
          deepClick(selector, callback)
        })
      })
    } else {
      callback()
    }
  })
}

$page.pageFn = {
  click: v => {
    alert(23)
  },
  img: v => {
    $page.downImg(`[通用_${document.title}]`, $('body')[0], [0, 500, 500, 100], imgLen => [500, imgLen * 1000])
  },
  baiduwenku: v => {
    $f.safe(() => {
      $('.moreBtn')[0].click()
    })
    let dom = $('#flow-ppt-wrap')[0] || $('.bd')[0]
    $page.downImg(`[百度文库_${document.title}]`, dom, [0, 800, 500, 200], imgLen => [500, imgLen * 1000], 'img')
  },
  ishare: v => {
    deepClick('.state-bottom a', () => {
      let dom = $('.detail-pro-con')[0]
      $page.downImg(`[爱问知识_${document.title}]`, dom, [0, 500, 500, 200], imgLen => [500, imgLen * 1000], 'img', {
        img: 'src'
      })
    })
  },
  mbang: v => {
    deepClick('.banner-more-btn span', () => {
      let dom = $('#pageContainer')[0]
      $page.downImg(`[皮匠网_${document.title}]`, dom, [0, 500, 500, 200], imgLen => [500, imgLen * 1000], 'img', {
        img: 'src'
      })
    })
  },
  nineIT_art: v => {
    $page.downImg(
      `[199it_${document.title}]`,
      $('article>div'),
      [0, 500, 500, 5],
      imgLen => [500, imgLen * 1000],
      'p a'
    )
  },
  autoHome_news: v => {
    $page.downImg(
      `[汽车之家_${document.title}]`,
      $('.article-content'),
      [0, 500, 500, 10],
      imgLen => [500, imgLen * 1000],
      'img',
      { attr: 'data-imageurl' }
    )
  },
  autoHome_bbs: v => {
    $page.downImg(
      `[汽车之家BBS_${document.title}]`,
      $('.tz-picture'),
      [0, 800, 500, 50],
      imgLen => [500, imgLen * 1000],
      'img'
    )
  },
  autoHome_dealer: v => {
    $page.downImg(
      `[汽车之家Dealer_${document.title}]`,
      $('.banner-cont,.focusimg-pic li img'),
      [0, 800, 500, 50],
      imgLen => [500, imgLen * 1000],
      'img'
    )
  },
  souhu_art: v => {
    $page.downImg(`[搜狐汽车_${document.title}]`, $('article'), [0, 800, 500, 2], imgLen => [500, imgLen * 1000], 'img')
  },
  sina_art: v => {
    $page.downImg(
      `[新浪汽车_${document.title}]`,
      $('.article'),
      [0, 800, 500, 2],
      imgLen => [500, imgLen * 1000],
      'img'
    )
  },
  bitauto_art: v => {
    $page.downImg(
      `[易车_${document.title}]`,
      $('.article-content'),
      [0, 800, 500, 2],
      imgLen => [500, imgLen * 1000],
      'img'
    )
  },
  dongchedi: v => {
    $page.downImg(
      `[懂车帝_${document.title}]`,
      $('.article-content'),
      [0, 800, 500, 5],
      imgLen => [1000, imgLen * 1000],
      'img'
    )
  }
}
let pageFn = $page.pageFn
let doWhileFn = {
  baidu_click: $page.getParams('a').a == 1,
  baidu_img: $page.getParams('imgDownload').imgDownload == 2
}
let positionFn = []
$f.faceJson(doWhileFn, (v, i, key) => {
  key = key.split('_')
  if (new RegExp(position).test(key[0])) {
    positionFn.push({
      position: key[0],
      fnName: key[1],
      condition: v
    })
  }
})
positionFn
  .filter(v => !$f.isErr(v.fnName))
  .map((v, i) => {
    $page.doWhile({
      [v.position + '_' + v.fnName]: v.condition
    })
  })

positionFn
  .filter(v => $f.isErr(v.fnName))
  .map((v, i) => {
    $page.doWhile({
      [v.position]: v.condition
    })
  })
