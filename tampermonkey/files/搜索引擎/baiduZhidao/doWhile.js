
exports.fn={
  //键值配置指定函数名，值配置启动条件
  autoClose:`$page.getParams('autoClose').autoClose`,
  autoRun:`$page.getParams('autoRun').autoRun`,
  html:`$page.getParams('htmlDownload').htmlDownload==1`,
  htmlScore:`$page.getParams('htmlScore'). htmlScore==1`,
  img:`$page.getParams('imgDownload').imgDownload==1`,
  keyword:`$page.getParams('keywordDownload'). keywordDownload==1`,
  list:`$page.getParams('listDownload').listDownload==1`
}