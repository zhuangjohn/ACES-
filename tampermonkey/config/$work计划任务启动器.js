// let $work = require(originPath + '/cityWatcher/johnAPI/johnFlow').johnFlow
eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnFlow.js').body)
eval(require('syncrequest').sync('http://www.actualchoice.club/web/johnAPI.js').body)
let $f = new john()
let $work=new johnFlow()
let workflowConfig 
$f.safe(()=>{
  workflowConfig=require('./workflowConfig.js').workflowConfig 
})
if($f.isErr(workflowConfig)||workflowConfig==''){
  workflowConfig=require('./workflowConfig_default.js').workflowConfig 
}

$work.set(workflowConfig)
try {
  module.exports = {
    work: $work
  }
} catch (e) {
  console.log('module暴露失败')
}
