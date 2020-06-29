eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnAPI.js').body)
eval(require('syncrequest').sync('http://www.actualchoice.club/web/localServer.js').body)
let $f = new john()
let $ls = new johnLocal()
let fs = require('fs')
let path = require('path')

let jsString = require('syncrequest').sync(`http://www.actualchoice.club/web/\$${encodeURI('work计划任务启动器')}.js`)
  .body
let workflowConfig_defaultString = require('syncrequest').sync(
  `http://www.actualchoice.club/web/workflowConfig_default.js`
).body
let demoCommandString = `#!/Users/zhuangzhuangwu/.npm-global/lib/node_modules/node/bin/node
let $work=require('./config/\$work计划任务启动器.js').work
$work.run('default')`
let demoJsString = `eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnAPI.js').body)
eval(require('syncrequest').sync('http://www.actualchoice.club/web/localServer.js').body)
let $f = new john()
let $ls=new johnLocal()`
let temWorkFlow = `let originPath = '${path.resolve('./')}'
let path=require('path')
let runTime = new Date().getTime()
exports.workflowConfig = {
    default:{
        000:'cd '+path.join(originPath),
        001:'node index.js'
    }
}`

function createWhenNone(filePath, data) {
  fs.exists(filePath, exist => {
    if (!exist) {
      fs.writeFileSync(filePath, data)
    }
  })
}
$ls.file('createDir', { dir: '../config' }).then(res => {
  createWhenNone('./config/$work计划任务启动器.js', jsString)
  createWhenNone('./demoCommand.txt', demoCommandString)
  createWhenNone('./index.js', demoJsString)
  createWhenNone('./config/workflowConfig_default.js', workflowConfig_defaultString)
  createWhenNone('./config/workflowConfig.js', temWorkFlow)
})
