let originPath = '/Users/zhuangzhuangwu/Desktop/005文件打分'
let runTime = new Date().getTime()
exports.workflowConfig = {
  // 文件重命名
  renameConfig: {
    000: 'open ' + originPath + '/cityWatcher/003系统操作/文件重命名/renameConfig.js',
    001: 'open ' + originPath + '/cityWatcher/003系统操作/重命名区'
  },
  rename: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/重命名区',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/文件重命名/文件重命名.js',
    002: 'open ' + originPath + '/cityWatcher/003系统操作/重命名区'
  },
  checkDealer: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/重命名区',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/文件重命名/清点.js',
    002: 'open ' + originPath + '/cityWatcher/003系统操作/重命名区'
  },
  // mongo: {
  //   000: 'mongod --dbpath '+originPath+'/DB/27021ACES --port 27021', //启动数据库
  //   001: 'cd '+originPath+'/DB/mongodbExpress', //启动mongoExpress
  //   002: 'node '+originPath+'/DB/mongodbExpress/app.js' //启动mongoExpress
  // },
  // aces: {
  //   001: 'cd '+originPath+'/cityWatcher/Nodejs', //启动基础库
  //   002: 'node '+originPath+'/cityWatcher/Nodejs/mainServer.js'
  // },
  // aces_johnPath: {
  //   003: 'cd '+originPath+'/cityWatcher/5008johnpath', //启动前端
  //   004: 'npm run dev' //启动前端
  // },
  // 聊天监测
  wechatListen: {
    000: 'cd ' + originPath + '/cityWatcher/python/000社群管理助手',
    001: 'python3 main.py'
  },
  //建立百度检索库
  createHouse: {
    000:
      'open ' +
      `'https://www.baidu.com/s?ie=UTF-8&wd=雷克萨斯新RX 上市发布会圆满落幕&listDownload=1&newPage=1&anotherPage=1'`
    // 000:'open '+`'https://www.baidu.com/s?ie=UTF-8&wd=全新林肯飞行家上市发布会圆满落幕&listDownload=1&newPage=1&anotherPage=1'`
  },
  //提取百度链接
  getBaiduPwd: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/提取百度链接',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/提取百度链接/提取百度链接.js'
  },
  //启动博客
  blog: {
    '000_environment': 'cd ' + originPath + '/johnBlog',
    '001_run': 'hexo s',
    '002_open': 'open http://localhost:4000/'
  },
  //启动MC
  MC: {
    000: 'cd ' + originPath + '/001marketingCenter',
    001: 'hexo s',
    002: 'open http://localhost:4001/'
  },
  //新建文章
  newMCPage: {
    000: 'cd ' + originPath + '/001marketingCenter',
    001: `hexo new mc${runTime}`,
    002: `open '+originPath+'/001marketingCenter/source/_posts/mc${runTime}.md`
  },
  // 文件打分
  recordArticle: {
    000: 'open ' + originPath + '/article.txt'
  },
  articleScore: {
    000: 'cd ' + originPath ,
    001: 'node ' + originPath + '/000打分.js',
    002: 'open ' + originPath + '/打分记录'
  },
  // 百度翻译
  fanyiOpen: {
    000: 'open ' + originPath + '/cityWatcher/006文件翻译/data.xlsx'
  },
  fanyiRun: {
    000: 'cd ' + originPath + '/cityWatcher/006文件翻译',
    001: 'python3 ' + originPath + '/文件翻译/main.py'
  },
  fanyiRes: {
    002: 'open ' + originPath + '/cityWatcher/006文件翻译/result.xlsx'
  },
  //百度搜索
  baiduSearch: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行/URL深度获取',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/URL深度获取/百度搜索.js'
  },
  sougouSearch: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行/URL深度获取',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/URL深度获取/搜狗搜索.js'
  },
  baiduSearchMerge: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/百度查找结果',
    001: 'cat *.csv>000百度结果.csv',
    002: 'open 000百度结果.csv'
  },
  sougouSearchMerge: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/搜狗cpSearch',
    001: 'cat *.csv>000搜狗结果.csv',
    002: 'open 000搜狗结果.csv'
  },
  urlConfig: {
    000: 'open ' + originPath + '/cityWatcher/001批量执行/URL深度获取/url.txt'
  },
  // 关键词监测
  urlToKeywords: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行/URL深度获取',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/URL深度获取/关键词下载.js'
  },
  mergeKeywords: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/关键词',
    001: 'cat *.csv>000关键词合并.csv',
    002: 'open 000关键词合并.csv'
  },
  // html监测
  urlToHtml: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行/URL深度获取',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/URL深度获取/html下载.js'
  },
  mergeHtml: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/html下载',
    001: 'cat *.html>000合并.html',
    002: 'open 000合并.html'
  },
  // list监测
  urlToList: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行/URL深度获取',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/URL深度获取/list下载.js'
  },
  // mergeList:{
  //   000:'cd '+originPath+'/cityWatcher/001批量执行/URL深度获取',
  //   001:'cat *.csv>000合并.csv'
  // },
  //榜单监测
  listWatch: {
    '000_environment': 'cd ' + originPath + '/cityWatcher/004行业监测',
    '001_run': 'node ' + originPath + '/cityWatcher/004行业监测/htmltoPDF定时任务.js'
  },
  // 懂车帝监测
  consumerListen: {
    000: 'cd ' + originPath + '/cityWatcher/000城市监测',
    001: 'node ' + originPath + '/cityWatcher/000城市监测/type0cpSearch版懂车帝监测_消费者.js'
  },
  jeepProductListen: {
    000: 'cd ' + originPath + '/cityWatcher/000城市监测',
    001: 'node ' + originPath + '/cityWatcher/000城市监测/type0cpSearch版懂车帝监测_本品.js'
  },
  jeepCompetitionListen: {
    000: 'cd ' + originPath + '/cityWatcher/000城市监测',
    001: 'node ' + originPath + '/cityWatcher/000城市监测/type0cpSearch版懂车帝监测_竞品.js'
  },
  industryListen: {
    000: 'cd ' + originPath + '/cityWatcher/000城市监测',
    001: 'node ' + originPath + '/cityWatcher/000城市监测/type0cpSearch版懂车帝监测_市场行情.js'
  },
  //汽车之家监测
  autoHomeDealer: {
    000: `open 'https://dealer.autohome.com.cn/beijing/0/0/0/0/0/0/0/0.html'`
  },
  mergePriceList: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/汽车之家经销商',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/按文件夹合并内容.js',
    002: 'open ' + originPath + '/cityWatcher/003系统操作/files/未分类/汽车之家经销商/files'
  },
  //搜狐汽车监测
  souhuMerge: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/搜狐汽车检索',
    001: 'cat *.csv>搜狐汽车检索.csv'
  },
  //懂车帝汽车监测
  dcdMerge: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/懂车帝',
    001: 'cat *.csv>懂车帝.csv'
  },
  //搜狗监测
  sougouMerge: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作/files/未分类/搜狗cpSearch',
    001: 'cat *.csv>搜狗cpSearch.csv',
    002: 'open ' + originPath + '/cityWatcher/003系统操作/files/未分类/搜狗cpSearch'
  },

  //获取城市经销商:
  getDealer: {
    // 000:`open 'https://dealer.autohome.com.cn/zhongshan/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 001:`open 'https://dealer.autohome.com.cn/huizhou/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 002:`open 'https://dealer.autohome.com.cn/zhanjiang/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 003:`open 'https://dealer.autohome.com.cn/maoming/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 004:`open 'https://dealer.autohome.com.cn/qingyuan/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 005:`open 'https://dealer.autohome.com.cn/jieyang/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 006:`open 'https://dealer.autohome.com.cn/yangjiang/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // 007:`open 'https://dealer.autohome.com.cn/zhaoqing/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // '008':`open 'https://dealer.autohome.com.cn/shaoguan/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // '009':`open 'https://dealer.autohome.com.cn/heyuan/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // '010':`open 'https://dealer.autohome.com.cn/shantou/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    // '011':`open 'https://dealer.autohome.com.cn/jiangmen/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    '012': `open 'https://dealer.autohome.com.cn/zhuhai/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    '013': `open 'https://dealer.autohome.com.cn/chaozhou/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    '014': `open 'https://dealer.autohome.com.cn/meizhou/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    '015': `open 'https://dealer.autohome.com.cn/yunfu/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`,
    '016': `open 'https://dealer.autohome.com.cn/shanwei/0/0/0/0/1/1/0/0.html?listDownload=1&anotherPage=1'`
  },
  // 经销商页面监测
  dealerWatch: {
    000: 'cd ' + originPath + '/cityWatcher/001批量执行',
    001: 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页_jeep经销商页面监测_广东.js',
    002: 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页_jeep经销商页面监测_河南.js',
    003: 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页_jeep经销商页面监测_江西.js',
    004: 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页_jeep经销商页面监测_湖南.js',
    005: 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页_jeep经销商页面监测_湖北.js'
  },
  //获取文件目录
  getFileContents: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/生成文件目录.js'
  },
  //文件聚类
  clusterFile: {
    '000_environment': 'cd ' + originPath + '/cityWatcher/003系统操作',
    '001_run': 'node ' + originPath + '/cityWatcher/003系统操作/文件操作.js'
  },
  //文件分组
  clusterFileByFileName: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/根据名称命名分组.js'
  },
  //批量转PPTX
  clusterToPPTX: {
    '000_environment': 'cd ' + originPath + '/cityWatcher/003系统操作',
    '001_run': 'node ' + originPath + '/cityWatcher/003系统操作/批量转PPTX.js'
  },
  //批量转md
  clusterTomd: {
    '000_environment': 'cd ' + originPath + '/cityWatcher/003系统操作',
    '001_run': 'node ' + originPath + '/cityWatcher/003系统操作/批量转md.js'
  },
  //等分
  equalFile: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/数量等分.js'
  },
  downMerge: {
    '000_environment': 'cd  ' + originPath + '/cityWatcher/003系统操作/files',
    '001_run': 'cat *.csv>all.csv'
  },
  // 微信文件提取
  filterFile: {
    000: 'cd ' + originPath + '/cityWatcher/003系统操作',
    001: 'node ' + originPath + '/cityWatcher/003系统操作/微信文件提取'
  },
  //  打开网页
  openHtml: {
    '000': 'cd ' + originPath + '/cityWatcher/001批量执行',
    '001': 'node ' + originPath + '/cityWatcher/001批量执行/批量打开网页.js'
  },
  // 爬机票
  xiecheng: {
    000: `open 'https://flights.ctrip.com/?xiecheng=1'`
  },
  //爬医药
  pharmnet: {
    '000': 'open http://www.pharmnet.com.cn/cgi/company.cgi?anotherPage=1&newPage=1&p=158&auto=1'
  },
  yaopin: {
    000: 'open https://www.yaopinnet.com/c0/jiangxi.htm&listDownload=1'
  },
  //爬票务
  piaoniu: {
    '000': 'open http://www.piaoniu.com/gz-all/hottest?anotherPage=1&listDownload=1',
    '001': 'open http://www.piaoniu.com/sh-all/hottest?anotherPage=1&listDownload=1',
    '002': 'open http://www.piaoniu.com/fs5-all/hottest?anotherPage=1&listDownload=1',
    '003': 'open http://www.piaoniu.com/zh-all/hottest?anotherPage=1&listDownload=1',
    '004': 'open http://www.piaoniu.com/zq-all/hottest?anotherPage=1&listDownload=1',
    '005': 'open http://www.piaoniu.com/zj3-all/hottest?anotherPage=1&listDownload=1'
  },
  damai: {
    '000': `open 'https://search.damai.cn/search.htm?spm=a2oeg.home.top.dcategory.591b23e1hCKilW&order=1&damai=1'`
  },
  huodongxing: {
    '000': `open 'https://www.huodongxing.com/events?orderby=o&status=1&city=上海&anotherPage=1&listDownload=1'`,
    '001': `open 'https://www.huodongxing.com/events?orderby=o&status=1&city=广州&anotherPage=1&listDownload=1'`,
    '002': `open 'https://www.huodongxing.com/events?orderby=o&status=1&city=佛山&anotherPage=1&listDownload=1'`,
    // '003':`open 'https://www.huodongxing.com/events?orderby=o&status=1&city=深圳&anotherPage=1&listDownload=1'`,
    // '004':`open 'https://www.huodongxing.com/events?orderby=o&status=1&city=珠海&anotherPage=1&listDownload=1'`,
    '005': `open 'https://www.huodongxing.com/events?orderby=o&status=1&city=湛江&anotherPage=1&listDownload=1'`
  },
  //爬美妆
  xianggangsasa: {
    '000': 'open https://www.hksasa.cn/brand/list.html?listDownload=1'
  },
  sasaBrand: {
    '000': 'open '
  }
}