<a name="top"></a>
# WC v1.0.0

WC是页面计算框架，帮助对页面进行操作，通常我们构造原型$page

 - [000](#000)
   - [导入](#导入)
 - [base](#base)
   - [判断链接内容是否为图片](#判断链接内容是否为图片)
   - [基础文本格式处理](#基础文本格式处理)
   - [配置链接params](#配置链接params)
 - [cpSearch](#cpSearch)
   - [复合搜索链接](#复合搜索链接)
   - [配置复合搜索](#配置复合搜索)
 - [download](#download)
   - [下载图片](#下载图片)
   - [下载表单](#下载表单)
   - [获取指定节点](#获取指定节点)
 - [get](#get)
   - [获取关键词](#获取关键词)
   - [获取节点属性](#获取节点属性)
   - [获取表单](#获取表单)
   - [获取链接params](#获取链接params)
   - [获取页面中的图片链接](#获取页面中的图片链接)
   - [获取页面内的链接](#获取页面内的链接)
   - [页面节点打分](#页面节点打分)
 - [init](#init)
   - [批量配置页面按钮](#批量配置页面按钮)
   - [配置条件启动器](#配置条件启动器)
   - [配置页面打开任务](#配置页面打开任务)
   - [配置页面按钮](#配置页面按钮)
   - [配置页面标签](#配置页面标签)
   - [配置页面的时间](#配置页面的时间)
 - [operate](#operate)
   - [配置翻页](#配置翻页)
   - [页面滚动](#页面滚动)

___


# <a name='000'></a> 000

## <a name='导入'></a> 导入
[Back to top](#top)

<p>引入框架，并构造原型</p>

```
方法 require/script
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| require | `/` | <p>后端引入</p> |
| script | `/` | <p>前端引入</p> |
| temperMonkey | `/` | <p>油桃引入，在浏览器控制台进行页面操作</p> |

### Parameters examples
`String` - require

```String
require('http://www.actualchoice.club/web/johnAPI.js).john
require('http://www.actualchoice.club/web/WC.js').WC
let href='http://www.baidu.com'
let $f=new john()
let $page=new WC(href)
```
`String` - script

```String
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<srcipt src='http://www.actualchoice.club/web/johnAPI.js'></script)
<script src='http://www.actualchoice.club/web/WC.js'></script>
<script>
 let $f=new john()
 let href='http://www.baidu.com'
 let $page=new WC(href)
</script>
```
`/` - temperMonkey

```/
// ==UserScript==
// @name         000接口数据
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.showapi.com/*
// @grant        unsafeWindow
// @grant GM_download
// @grant GM_xmlhttpRequest
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require http://www.actualchoice.club/web/johnAPI.js
// @require http://www.actualchoice.club/web/WC.js
// ==/UserScript==
let $f=new john(）
let $page=new WC(location.href)
unsafeWindow.$f=$f //将$f引入浏览器
unsafeWindow.$page=$page //将$page引入浏览器
//按F12 进入控制台进行页面计算
```

# <a name='base'></a> base

## <a name='判断链接内容是否为图片'></a> 判断链接内容是否为图片
[Back to top](#top)

<p>通过监测链接中是否存在图片格式的字符，比如png，从而判断链接是否为图片</p>

```
方法 $page.matchType(src)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| src | `String` | <p>初始数据</p> |

### Parameters examples
`String` - src

```String
let src='jfoiwefwe.png'
```

### Success response example

#### Success response example - `执行`

```/
$page.matchType(src)
```

#### Success response example - `返回`

```/
'png'
```

## <a name='基础文本格式处理'></a> 基础文本格式处理
[Back to top](#top)

<p>剔除对象中空格、换行，英文逗号等</p>

```
方法 $page.vCallback(v)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| v | `String` | <p>初始数据</p> |

### Parameters examples
`String` - v

```String
let v='flejf,'
```

### Success response example

#### Success response example - `执行`

```/
$page.vCallback(v)
```

#### Success response example - `返回`

```/
'flejf_'
```

## <a name='配置链接params'></a> 配置链接params
[Back to top](#top)

<p>更改params值</p>

```
方法 $page.setParams(paramsObj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| paramsObj | `Json` | <p>params值</p> |

### Parameters examples
`Json` - paramsObj

```Json
let paramsObj={
   a:1,
   b:2
}
```

### Success response example

#### Success response example - `执行`

```/
$page.setParams(paramsObj)
```

#### Success response example - `返回`

```/
'http://www.baidu.com?a=1&b=2
```

# <a name='cpSearch'></a> cpSearch

## <a name='复合搜索链接'></a> 复合搜索链接
[Back to top](#top)

<p>原页面Params中对应的值格式为复合标签和输入值时启用，如http://www.baidu.com?wd=case,jwefjoew</p>

```
方法 $page.getCpHref(cpFnName,paramsCallback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| cpFnName | `Json` | <p>配置标签</p> |
| paramsCallback | `Json` | <p>对params进行回调，返回新的params</p> |

### Parameters examples
`Json` - cpFnName

```Json
let cpFnName ='case'
```
`Json` - paramsCallback

```Json
let paramsCallback=v=>v+' hello'
```

### Success response example

#### Success response example - `执行`

```/
$page.getCPHref(cpFnName,paramsCallback)
```

#### Success response example - `返回`

```/
[{
}]
```

## <a name='配置复合搜索'></a> 配置复合搜索
[Back to top](#top)

<p>@apiParam {Json} set 配置CP函数</p>

```
方法 $page.setCpConfig(set)
```

### Parameters examples
`Json` - set

```Json
let set ={case:['wd',' ']}
```

### Success response example

#### Success response example - `执行`

```/
$page.setCpConfig(set)
```

#### Success response example - `返回`

```/
{cpFn:{
 connect:(a,b)=>`${a} ${b}`
},
params:{case:'wd'}}
```

# <a name='download'></a> download

## <a name='下载图片'></a> 下载图片
[Back to top](#top)

<p>@apiParam {String} fileName 文件命名，需带后缀,默认返回'test'</p>

```
方法 $page.downImg(fileName,dom,scrollSet,timeSetCallback,imgSelector,attrSet)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| dom | `dom` | <p>目标页面节点，默认为document.body</p> |
| scrollSet | `Array` | <p>滚动设置</p> |
| timeSetCallback | `Function` | <p>时间回调函数，控制下载发起速度</p> |
| imgSelector | `String` | <p>节点选择器，默认为'img'</p> |
| attrSet | `Json` | <p>所需的属性</p> |

### Parameters examples
`String` - fileName

```String
let fileName='ffew'
```
`dom` - dom

```dom
let dom=$('div')[0]
```
`Array` - scrollSet

```Array
let scrollSet=[0,1000,500,10]
```
`Function` - timeSetCallback

```Function
let timeSetCallback=len=>[1000,1200*len]
```
`String` - imgSelector 

```String
let imgSelector='img'
```
`Json` - attrSet 

```Json
let attrSet={src:'src',attr_src:'data-src'}
```

### Success response example

#### Success response example - `执行`

```/
$page.downImg(fileName,dom,scrollSet,timeSetCallback,imgSelector,attrSet)
```

#### Success response example - `返回`

```/
//下载图片
```

## <a name='下载表单'></a> 下载表单
[Back to top](#top)

<p>@apiParam {Json} opt 表单选择设置</p>

```
方法 $page.setListConfig(opt)
```

### Parameters examples
`Json` - opt 

```Json
let opt={
 test:{
 table:'#main',
 tr:'div',
 td:['span','a']
 }
}
```

### Success response example

#### Success response example - `执行`

```/
$page.setListConfig(opt)
$page.getList('test')
```

#### Success response example - `返回`

```/
//下载表格
```

## <a name='获取指定节点'></a> 获取指定节点
[Back to top](#top)

<p>@apiParam {dom} dom 目标页面节点，默认为document.body</p>

```
方法 $page.downHtml(name,obj,dom,callback,htmlCallback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>文件命名，需带后缀,默认返回'test.html'</p> |
| obj | `Array` | <p>所需的节点,默认返回'*'</p> |
| callback | `Function` | <p>节点筛选函数,默认返回true</p> |
| htmlCallback | `Function` | <p>结果Html页面回调htmlCallback(Html)</p> |

### Parameters examples
`dom` - dom

```dom
let dom=$('div')[0]
```
`String` - name

```String
let name='fjewof.html'
```
`Array` - obj

```Array
let obj=['div','img']
```
`Function` - callback 

```Function
let callback=myNode=>/hello/.test(myNode.innerText)
```
`Function` - htmlCallback

```Function
let htmlCallback=myHtml=>{
$('body',myHtml).append('<p>结果</p>')
return myHtml
}
```

### Success response example

#### Success response example - `执行`

```/
$page.downHtml(name,obj,dom,callback,htmlCallback)
```

#### Success response example - `返回`

```/
//返回新页面
```

# <a name='get'></a> get

## <a name='获取关键词'></a> 获取关键词
[Back to top](#top)

<p>根据预设的关键词列表,对当前页面获取关键词，并添加标签</p>

```
方法 $page.getKeywords(testTap,tap,dom)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| testTap | `String` | <p>参考对象，来自cpConfig.cpWord中的键值</p> |
| tap | `Json` | <p>行数据添加标签</p> |
| dom | `dom` | <p>预设Html对象</p> |

### Parameters examples
`String` - testTap

```String
let testTap='case'
```
`Json` - tap 

```Json
let tap={a:2}
```
`dom` - dom

```dom
let dom=$('div')[0]
```

### Success response example

#### Success response example - `执行`

```/
$page.getKeywords(testTap,tap,dom)
```

#### Success response example - `返回`

```/
//获得页面dom中的关键词
```

## <a name='获取节点属性'></a> 获取节点属性
[Back to top](#top)

<p>获取节点属性</p>

```
方法 $page.getAttr(htmlNode,attrSet,isJson)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| htmlNode | `dom` | <p>获取对象</p> |
| attrSet | `Json` | <p>目标属性//如果是attribute则键值需要符合正则attr,默认返回a、img、href、src</p> |
| isJson | `Boolean` | <p>是否返回Json</p> |

### Parameters examples
`dom` - htmlNode

```dom
let htmlNode=$('body')
```
`Json` - attrSet

```Json
let attrSet={attr:['data-href'],text:'innerText'}
```
`Boolean` - isJson

```Boolean
let isJson=true
```

### Success response example

#### Success response example - `执行`

```/
$page.getAttr(htmlNode,attrSet,isJson)
```

#### Success response example - `返回`

```/
[{}]
```

## <a name='获取表单'></a> 获取表单
[Back to top](#top)

<p>@apiParam {String} type 从表单配置中调出目标配置</p>

```
方法 $page.getList(type,attrSet,dom,stopDown,callback,tags)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| attrSet | `Json` | <p>需要获取的属性</p> |
| dom | `dom` | <p>目标页面节点,默认为listConfig中的table标签对应节点</p> |
| stopDown | `Boolean` | <p>是否阻止下载</p> |
| callback | `Function` | <p>对结果进行回调</p> |
| tags | `Json` | <p>行数据添加标签</p> |

### Parameters examples
`String` - type

```String
let type='table'
```
`Json` - attrSet 

```Json
let attrSet={src:'src',attr_src:'data-src'}
```
`dom` - dom

```dom
let dom=$('div')
```
`Boolean` - stopDown 

```Boolean
let stopDown=true
```
`Function` - callback

```Function
let callback=>v=>{console.log(v)}
```
`Json` - tags

```Json
let tags={a:23}
```

### Success response example

#### Success response example - `执行`

```/
$page.getList(type,attrSet,dom,stopDown,callback,tags)
```

#### Success response example - `返回`

```/
//[{a:23}]
```

## <a name='获取链接params'></a> 获取链接params
[Back to top](#top)

<p>获取params值</p>

```
方法 $page.getParams(keys)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| keys | `Json` | <p>params值</p> |

### Parameters examples
`Json` - keys

```Json
let keys='a'
```

### Success response example

#### Success response example - `执行`

```/
$page.getParams(keys)
```

#### Success response example - `返回`

```/
{a:1}
```

## <a name='获取页面中的图片链接'></a> 获取页面中的图片链接
[Back to top](#top)

<p>通过配置dom，选择器及所需的属性，获取页面图片参数，返回Promise</p>

```
方法 $page.getImg(dom,imgSelector,attrSet,isJson)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| dom | `dom` | <p>目标页面节点，默认为document</p> |
| imgSelector | `String` | <p>节点选择器，默认为'img'</p> |
| attrSet | `Json` | <p>所需的属性</p> |
| isJson | `Boolean` | <p>结果是否返回Json</p> |

### Parameters examples
`dom` - dom

```dom
let dom=$('div')[0]
```
`String` - imgSelector 

```String
let imgSelector='img'
```
`String` - attrSet

```String
let attrSet={src:'src',attr_alt:'alt'}
```
`Boolean` - isJson

```Boolean
let isJson=true
```

### Success response example

#### Success response example - `执行`

```/
$page.getImg(dom,imgSelector,attrSet,isJson).then(imgList=>{console.log(imgList)})
```

#### Success response example - `返回`

```/
[{
src:'xx',
alt:'xx'
}]
```

## <a name='获取页面内的链接'></a> 获取页面内的链接
[Back to top](#top)

<p>获取页面内非图片、非Js、非css链接,并添加params</p>

```
方法 $page.getHref(dom,paramsJson)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| dom | `dom` | <p>获取对象</p> |
| paramsJson | `Json` | <p>params</p> |

### Parameters examples
`dom` - dom

```dom
let dom=$('body')[0]
```
`Json` - paramsJson

```Json
let paramsJson={a:23,b:5}
```

### Success response example

#### Success response example - `执行`

```/
$page.getHref(dom,paramsJson)
```

#### Success response example - `返回`

```/
//['http://www.baidu.com?a=23&b=5,...]
```

## <a name='页面节点打分'></a> 页面节点打分
[Back to top](#top)

<p>@apiParam {Json} Opt 配置打分标准</p>

```
方法 $page.setTestConfig(Opt)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| attrSet | `Json` | <p>需要获取的属性</p> |
| callback | `Function` | <p>对结果进行回调</p> |

### Parameters examples
`Json` - Opt 

```Json
let Opt={
 a:['营销','案例']
}
```
`Json` - attrSet 

```Json
let attrSet={
 title:[$('div'),{text:'innerText'}]
}
```
`Function` - callback

```Function
let callback=v=>v
```

### Success response example

#### Success response example - `执行`

```/
$page.setTestConfig(Opt)
$page.getListScore(attrSet,callback)
```

#### Success response example - `返回`

```/
[{title:23,aScore:0.333}]
```

# <a name='init'></a> init

## <a name='批量配置页面按钮'></a> 批量配置页面按钮
[Back to top](#top)

<p>批量为不同页面在页面指定位置配置函数按钮</p>

```
方法 $page.setBtnConfig(opt)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| opt | `Json` | <p>按钮配置</p> |

### Parameters examples
`Json` - opt

```Json
let opt={
   baidu:['body',' ','console']
}
```

### Success response example

#### Success response example - `执行`

```/
$page.getPosition()
$page.setBtnConfig(opt)
```

#### Success response example - `返回`

```/
//当页面跳转到百度时，自动添加该按钮
```

## <a name='配置条件启动器'></a> 配置条件启动器
[Back to top](#top)

<p>对obj符合指定条件的进行所有挂载在该页面的函数</p>

```
方法 $page.doWhile(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Json` | <p>条件列表</p> |

### Parameters examples
`Json` - obj

```Json
let obj={
   baidu:$page.getParams('a').a==1
}
```

### Success response example

#### Success response example - `执行`

```/
$page.doWhile(obj)
```

#### Success response example - `返回`

```/
//当baidu的链接params中a==1时，执行百度所有函数
```

#### Success response example - `延伸`

```/
//自动根据页面的函数列表配置启动参数
$f.faceJson($page.pageFn,(v,i,key)=>{
$page.doWhile({
    [key]:$page.getParams(`${key}Go`)[`${key}Go`]==1,
})
})
```

## <a name='配置页面打开任务'></a> 配置页面打开任务
[Back to top](#top)

<p>按计划执行页面打开任务。赋予每个函数一个任务名称，通过调用任务名称进行启动</p>

```
方法 $page.setWebTaskConfig(opt)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| opt | `Json` | <p>执行配置</p> |
| taskName | `String` | <p>任务名称</p> |

### Parameters examples
`Json` - opt

```Json
let opt={
baiduListen:{
   url:'https://www.baidu.com',
   fn:['listDownload']
 }
}
```
`String` - taskName

```String
let taskName='baiduListen'
```

### Success response example

#### Success response example - `执行`

```/
$page.setWebTaskConfig(opt)
$page.doTask(taskName)
```

#### Success response example - `返回`

```/
//打开网页 http://www.baidu.com?listDownload=1
```

## <a name='配置页面按钮'></a> 配置页面按钮
[Back to top](#top)

<p>在页面指定位置配置函数按钮</p>

```
方法 $page.setBtn(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Json` | <p>按钮配置</p> |

### Parameters examples
`Json` - obj

```Json
// 有且仅当obj中的键值与$page.position相同时执行
let obj={
 default:['body','john','console']
}
```

### Success response example

#### Success response example - `执行`

```/
$page.setBtn(obj)
```

#### Success response example - `返回`

```/
//页面body出现按钮，具备class属性john,绑定函数console
```

#### Success response example - `延伸`

```/
//根据$page的执行列表自动配置按钮
$page.getPosition()
$f.safe(()=>{
$f.faceJson($page.pageConfig,(v,i,key)=>{
    $page.setBtn({
       [key]:['body','',`执行${key}>>`],
    })
 })
})
```

## <a name='配置页面标签'></a> 配置页面标签
[Back to top](#top)

<p>对符合不同正则的页面链接赋予不同的标签，用于后续函数挂载</p>

```
方法 $page.getPosition()
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| pageConfig | `Json` | <p>页面标签正则</p> |

### Parameters examples
`Json` - pageConfig

```Json
let $page.pageConfig={
 default:/https?/,
 baidu:/www.baidu.com/
}
```

### Success response example

#### Success response example - `执行`

```/
$page.getPosition()
```

#### Success response example - `返回`

```/
'baidu'
```

## <a name='配置页面的时间'></a> 配置页面的时间
[Back to top](#top)

<p>将当前时间/指定时间设置为$page的时间</p>

```
方法 $page.getTime(format,time)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| format | `time` | <p>时间格式</p> |
| time | `time` | <p>时间</p> |

### Parameters examples
`time` - format

```time
let format='yyyyMMdd'
```
`time` - time

```time
let time='Thu Jan 01 1970 13:36:40 GMT+0800 (中国标准时间)'
```

### Success response example

#### Success response example - `执行`

```/
$page.getTime(format,time)
```

#### Success response example - `返回`

```/
$page.time='19700101'
```

# <a name='operate'></a> operate

## <a name='配置翻页'></a> 配置翻页
[Back to top](#top)

<p>打开新页面</p>

```
方法 $page.setTurn(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Json` | <p>条件列表{keys,pageNum,sleepTime,isLocation,condition}</p> |
| keys | `String` | <p>匹配页面标签</p> |
| pageNum | `Number` | <p>当前页面编号,默认0</p> |
| sleepTime | `Number` | <p>延迟时间,默认1000ms</p> |
| isLocation | `Boolean` | <p>是否在原页面执行,默认0</p> |
| condition | `Boolean` | <p>执行条件，默认为1</p> |

### Parameters examples
`Json` - obj

```Json
let obj={
   baidu:v=>$page.setParams({page:v+1}),
}
```

### Success response example

#### Success response example - `执行`

```/
$page.setTurn(obj)
$page.turn('baidu',0,500,false)
```

#### Success response example - `返回`

```/
//打开新页面 http://www.baidu.com?page=1
```

#### Success response example - `延伸`

```/
//配合页面函数doWhile,配置anotherPage:1,可以连环产生新页面，从而实现自动翻页
```

## <a name='页面滚动'></a> 页面滚动
[Back to top](#top)

<p>按条件滚动页面</p>

```
方法 $page.scroll(num,scrollSize,sleepTime,maxNum,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| num | `Number` | <p>初始位置，默认为0</p> |
| scrollSize | `Number` | <p>滚动步长</p> |
| maxNum | `Number` | <p>最大页面编号</p> |
| sleepTime | `Number` | <p>延迟时间,默认1000ms</p> |
| callback | `Function` | <p>滚动结束后执行函数</p> |

### Parameters examples
`Json` - obj

```Json
let {num,scrollSize,sleepTime,maxNum,callback}={
 num:0,
 scrollSize:1000,
 sleepTime:500,
 maxNum:200,
 callback:()=>{console.log('i am here')}
}
```

### Success response example

#### Success response example - `执行`

```/
$page.scroll(num,scrollSize,sleepTime,maxNum,callback)
```

#### Success response example - `返回`

```/
//页面每500ms滚动一次，每次1000px,如果未能触底，最多滚动200
```
