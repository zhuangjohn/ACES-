eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnAPI.js').body)
eval(require('syncrequest').sync('http://www.actualchoice.club/web/localServer.js').body)
let $f = new john()
let $ls = new johnLocal()
let fs = require('fs')
let path = require('path')

let btnJs = `exports.btnName=[
  ['body','','图片下载>>','test'],
]`
let doWhileJs=`
exports.fn={
  //键值配置指定函数名，值配置启动条件
  test:\`$page.getParams('a').a==1\`,
}`
let pageFnJs=`exports.fn={
  test:v=>{
      alert('i am test')
  },
}`

let temFnJs=`exports.fn={
  test(a){alert(a)
  }
}`
let pageConfigJs=`"demoPosition":/baidu/,`
let firstFnJs=`alert(23)`
function createWhenNone(filePath, data) {
  fs.exists(filePath, exist => {
    if (!exist) {
      fs.writeFileSync(filePath, data)
    }
  })
}
$ls.file('createDir', { dir: './demoTask/demoPosition' }).then(res => {
  createWhenNone('./files/demoTask/demoPosition/btn.js', btnJs)
  createWhenNone('./files/demoTask/demoPosition/doWhile.js', doWhileJs)
  createWhenNone('./files/demoTask/demoPosition/pageFn.js',pageFnJs)
})

$ls.file('createDir', { dir: './temFn' }).then(res => {
  createWhenNone('./files/temFn/demo.js',temFnJs)
})
$ls.file('createDir', { dir: './firstFn' }).then(res => {
  createWhenNone('./files/firstFn/demo.js',firstFnJs)
})
createWhenNone('./files/demoTask/pageConfig.txt',pageConfigJs)