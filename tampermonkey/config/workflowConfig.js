let originPath = '/Users/zhuangzhuangwu/Documents/GitHub/ACES-/tampermonkey'
let path=require('path')
let runTime = new Date().getTime()
exports.workflowConfig = {
    default:{
        000:'cd '+path.join(originPath),
        001:'node index.js'
    }
}