exports.fn = {
  autoClose: v => {
    $f.sleep($page.getParams('autoClose').autoClose).then(() => {
      unsafeWindow.close()
    })
  },
  autoRun: v => {
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
  html: v => {
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
  htmlScore: v => {
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
  img: v => {
    $page.downImg(`[通用_${document.title}]`, $('body')[0], [0, 500, 500, 100], imgLen => [500, imgLen * 1000])
  },
  keyword: v => {
    $f.sleep(1000).then(() => {
      $page.getKeywords('all', [document.title, location.href])
    })
  },
  list: v => {
    $page.getList()
  }
}
