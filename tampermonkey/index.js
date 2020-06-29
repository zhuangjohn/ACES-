eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnAPI.js').body)
eval(require('syncrequest').sync('http://www.actualchoice.club/web/localServer.js').body)
let $f = new john()
let $ls = new johnLocal()
let fs = require('fs')
let path = require('path')

let headString = `// ==UserScript==
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
let $page=new WC(location.href)`


$ls.file('readAll', { dir: './files' }).then(allFiles => {
  //配置并获取position
  let pageConfigString = ''
  allFiles
    .filter(v => /pageConfig/.test(path.basename(v.filePath))).map(value => {
      let pageConfig=fs.readFileSync(value.filePath).toString()
      pageConfigString+=pageConfig+'\n'
    })
pageConfigString = `//配置页面属性
$page.pageConfig={
  default:/https?/,
  ${pageConfigString}
}
$page.getPosition()
let position=$page.page.position`
  //配置页面临时函数
  let temFnString = ''
  allFiles
    .filter(v => /temFn/.test(path.basename(path.dirname(v.filePath))))
    .map(value => {
      let temFnJson = require(value.filePath).fn
      $f.faceJson(temFnJson, (v, i, key) => {
        temFnString += '\n' + 'function ' + v.toString()
      })
    })
 //执行先置函数
 let firstFnString = ''
 allFiles
   .filter(v => /firstFn/.test(path.basename(path.dirname(v.filePath))))
   .map(value => {
     let temString= fs.readFileSync(value.filePath).toString()
     firstFnString += '\n' +  temString.toString()
   })
  //配置页面匹配position函数pageFn
  let pageFnString = '\nlet pageFn={\n'
  allFiles
    .filter(v => /pageFn.js/.test(v.fileName))
    .map(value => {
      let pageFnJson = require(value.filePath).fn
      let myPosition = path.basename(path.dirname(value.filePath))
      
        $f.faceJson(pageFnJson, (v, i, key) => {
          if(myPosition=='000default'){
            pageFnString += `    [position+'${key}']:${v.toString()},\n`
          }else{
            pageFnString += `    ${myPosition + key}:${v.toString()},\n`
          }
        })
     
      
    })

  pageFnString =
    pageFnString +
    `}
$page.pageFn={}
$f.faceJson(pageFn,(v,i,key)=>{
  if(new RegExp(position).test(key)&&!$f.isErr(position)){
    $page.pageFn[key]=pageFn[key]
  }
})
`
  // console.log(pageFnString)

  //配置启动器doWhile
  let doWhileString = `let doWhileFn={\n`
  allFiles
    .filter(v => /doWhile.js/.test(v.fileName))
    .map(value => {
      let doWhileJson = require(value.filePath).fn
      let myPosition = path.basename(path.dirname(value.filePath))
      $f.faceJson(doWhileJson, (v, i, key) => {
        if(myPosition=='000default'){
          doWhileString += `    [position + '_' +position + '${key}']:${v.toString()},\n`
        }else{
          doWhileString += `    ${myPosition + '_' + myPosition + key}:${v.toString()},\n`
        }
        
      })
    })
  doWhileString =
    doWhileString +
    `}
$f.faceJson(doWhileFn,(v,i,key)=>{
  $page.doWhile({
    [key]:v
  })
})`
  //配置启动器btn
  let btnString = ''
  let loopBtnName=[]
  let loopBtnString = ''
  allFiles
    .filter(v => /btn.js/.test(v.fileName))
    .map(value => {
      let myPosition = path.basename(path.dirname(value.filePath))
      let btnArr = require(value.filePath).btnName
      btnArr
        .filter(myBtn => !$f.isErr(myBtn[3]))
        .map(myBtn => {
          loopBtnName.push(myPosition + myBtn[3])
          if(myPosition=='000default'){
            btnString += `
$page.setBtn({
  [position]:['${myBtn[0]}','${myBtn[1]}','${myBtn[2]}',position+'${myBtn[3]}']
})`
          }else{
            btnString += `
$page.setBtn({
  '${myPosition}':['${myBtn[0]}','${myBtn[1]}','${myBtn[2]}','${myPosition + myBtn[3]}']
})`
          }
          
        })

      btnArr
        .filter(myBtn => $f.isErr(myBtn[3]))
        .map(myBtn => {
          loopBtnString += `'${myPosition}':[\'${myBtn[0]}\',\'${myBtn[1]}\',\'${myBtn[2]}\',key],\n`
        })
    })
    loopBtnString=`
$f.safe(()=>{
  $f.faceJson($f.notJson(${JSON.stringify(loopBtnName)},$page.pageFn),(v,i,key)=>{
    $page.setBtn({`+loopBtnString+ `})
  })
})`
  fs.writeFileSync(
    './files/tampermonkey.js',
    `${headString}
${pageConfigString}
${temFnString}
${firstFnString}
${pageFnString}
${doWhileString}
${btnString}
${loopBtnString}`
  )
})
