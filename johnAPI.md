<a name="top"></a>
# johnAPI v1.0.0

johnAPI是一个底层框架，帮助快速进行运算，通常我们构造原型$f

 - [000](#000)
   - [导入](#导入)
 - [001init](#001init)
   - [extend](#extend)
 - [cp](#cp)
   - [cpArr](#cpArr)
   - [cpJson](#cpJson)
 - [download](#download)
   - [download](#download)
   - [export](#export)
   - [toCsv](#toCsv)
   - [toXls](#toXls)
 - [face](#face)
   - [face](#face)
   - [faceArr](#faceArr)
   - [faceJson](#faceJson)
   - [makeList](#makeList)
   - [supperMap](#supperMap)
 - [filter](#filter)
   - [filter](#filter)
   - [findRoot](#findRoot)
   - [routes](#routes)
   - [superFilter](#superFilter)
   - [tableFilter](#tableFilter)
 - [get](#get)
   - [getLevel](#getLevel)
   - [getScore](#getScore)
   - [typeScore](#typeScore)
 - [include](#include)
   - [includeArr](#includeArr)
   - [includeJson](#includeJson)
 - [is](#is)
   - [isArray](#isArray)
   - [isErr](#isErr)
   - [isJson](#isJson)
   - [isSimple](#isSimple)
 - [johnBase](#johnBase)
   - [keys](#keys)
   - [length](#length)
   - [notBlank](#notBlank)
   - [unique](#unique)
 - [johnCode](#johnCode)
   - [ABReCode](#ABReCode)
   - [ACode](#ACode)
   - [reCode](#reCode)
 - [johnFn](#johnFn)
   - [goByTime](#goByTime)
   - [safe](#safe)
   - [sleep](#sleep)
 - [johnJson](#johnJson)
   - [changeKeys](#changeKeys)
   - [changeValue](#changeValue)
   - [makeJson](#makeJson)
   - [merge](#merge)
   - [notJson](#notJson)
   - [wantJson](#wantJson)
 - [johnLocation](#johnLocation)
   - [cookie](#cookie)
   - [localStorage](#localStorage)
 - [johnPath](#johnPath)
   - [find](#find)
   - [path](#path)
   - [query](#query)
   - [setPath](#setPath)
 - [johnString](#johnString)
   - [connect](#connect)
   - [deepReg](#deepReg)
   - [deepTest](#deepTest)
   - [dropStr](#dropStr)
   - [equat](#equat)
   - [myTrim](#myTrim)
   - [replace](#replace)
   - [split](#split)
 - [johnTable](#johnTable)
   - [createTable](#createTable)
 - [johnTime](#johnTime)
   - [dateFtt](#dateFtt)
   - [time](#time)
 - [johnUrl](#johnUrl)
   - [url](#url)
 - [to](#to)
   - [csvDataToJson](#csvDataToJson)
   - [toArray](#toArray)
   - [toJson](#toJson)
   - [toList](#toList)
   - [toNumString](#toNumString)
   - [toSql](#toSql)
   - [totext](#totext)
 - [trans](#trans)
   - [arrPeer](#arrPeer)
   - [flat](#flat)
   - [jsonFlat](#jsonFlat)
   - [parse](#parse)
   - [peer](#peer)
   - [range](#range)
   - [tranList](#tranList)
   - [trans](#trans)

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

### Parameters examples
`String` - require

```String
require('http://www.actualchoice.club/web/johnAPI.js').john
let $f=new john()
```
`String` - script

```String
<script src='http://www.actualchoice.club/web/johnAPI.js'></script>
<script>
 let $f=new john()
</script>
```

# <a name='001init'></a> 001init

## <a name='extend'></a> extend
[Back to top](#top)

<p>将构造函数中的符合筛选条件的属性添加到构造函数A中，返回新构造函数</p>

```
用法 $f.extent
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| a | `Function` | <p>构造函数A</p> |
| b | `Function` | <p>构造函数B</p> |
| fitlerFn | `Boolean` | <p>筛选条件</p> |

### Parameters examples
`Function` - a

```Function
function a(){
 this.num=0
}
a.protype={
 add(){
   this.num++
 }
}
```
`Function` - b

```Function
function b(){
 this.num=0
}
b.protype={
 init(){
   this.num=0
 },
 reduce(){
   this.num--
 }
}
```
`Boolean` - filterFn

```Boolean
filterFn=v=>v!=='init'
```

### Success response example

#### Success response example - `执行`

```/
$f.extend(a,b,filterFn)
```

#### Success response example - `返回`

```Function
a=function(){
 this.num=0
}
a.protype={
  add(){
    this.num++
  },
  reduce(){
    this.num--
  }
}
```

# <a name='cp'></a> cp

## <a name='cpArr'></a> cpArr
[Back to top](#top)

<p>数组内组合</p>

```
用法 $f.cpArr(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Array` | <p>数据对象</p> |

### Parameters examples
`Array` - data

```Array
let data=[1,2]
```

### Success response example

#### Success response example - `执行`

```/
$f.cpArr(data)
```

#### Success response example - `返回`

```/
[
 [[1],[2]],
 [[1,2]],
]
```

## <a name='cpJson'></a> cpJson
[Back to top](#top)

<p>Json组合输出,包括本身</p>

```
用法 $f.cpJson(sel)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| sel | `Json` | <p>数据对象</p> |

### Parameters examples
`Json` - sel

```Json
let sel={a:23,b:4}
```

### Success response example

#### Success response example - `执行`

```/
$f.cpArr(data)
```

#### Success response example - `返回`

```/
[
 {a:23},
 {b:4},
 {a:23,b:4}
]
```

# <a name='download'></a> download

## <a name='download'></a> download
[Back to top](#top)

<p>下载链接内容，并命名;注意跨域问题</p>

```
用法 $f.download(name,url)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>文件名</p> |
| url | `url` | <p>链接</p> |

### Parameters examples
`String` - name

```String
let name='1.html'
```
`url` - url

```url
let url='https://www.baidu.com'
```

### Success response example

#### Success response example - `执行`

```/
$f.download(name,url)
```

#### Success response example - `返回`

```/
保存为本地文件1.html
```

## <a name='export'></a> export
[Back to top](#top)

<p>将内容下载到本地</p>

```
用法 $f.export(name,data,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>文件名</p> |
| data | `/` | <p>数据</p> |
| callback | `Function` | <p>在文件下载后执行的回调函数</p> |

### Parameters examples
`String` - name

```String
let name='1.txt'
```
`/` - data

```/
let data='jfif'
```
`Function` - callback

```Function
let callback=()=>{console.log(complete)}
```

### Success response example

#### Success response example - `执行`

```/
$f.export(name,data,callback)
```

#### Success response example - `返回`

```/
保存为本地文件1.txt
```

## <a name='toCsv'></a> toCsv
[Back to top](#top)

<p>将数据输出为CSV格式</p>

```
用法 $f.toCsv(obj,head,fileName,baseData)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `obj` | <p>数据</p> |
| head | `Array` | <p>表头</p> |
| fileName | `String` | <p>文件名</p> |
| baseData | `/` | <p>空值/错误时返回值</p> |

### Parameters examples
`obj` - obj

```obj
let obj=[{a:23,b:23,c:undefined}]
```
`Array` - head

```Array
let head=['b','c']
```
`String` - fileName

```String
let fileName='2.csv'
```
`/` - baseData

```/
let baseData='johnErr'
```

### Success response example

#### Success response example - `执行`

```/
$f.toCsv(obj,head,fileName,baseData)
```

#### Success response example - `返回`

```/
保存为本地文件2.csv
```

## <a name='toXls'></a> toXls
[Back to top](#top)

<p>将数据输出为CSV格式</p>

```
用法 $f.toXls(obj,head,fileName,baseData)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `obj` | <p>数据</p> |
| head | `Array` | <p>表头</p> |
| fileName | `String` | <p>文件名</p> |
| baseData | `/` | <p>空值/错误时返回值</p> |

### Parameters examples
`obj` - obj

```obj
let obj=[{a:23,b:23,c:undefined}]
```
`Array` - head

```Array
let head=['b','c']
```
`String` - fileName

```String
let fileName='2.xls'
```
`/` - baseData

```/
let baseData='johnErr'
```

### Success response example

#### Success response example - `执行`

```/
$f.toXls(obj,head,fileName,baseData)
```

#### Success response example - `返回`

```/
保存为本地文件2.Xls
```

# <a name='face'></a> face

## <a name='face'></a> face
[Back to top](#top)

<p>自动创建数组，并进行遍历</p>

```
用法 $f.face(index,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| index | `Number` | <p>数组最大值</p> |
| callback | `callback` | <p>回调函数</p> |

### Parameters examples
`Number` - index

```Number
let index=3
```
`callback` - callback

```callback
let callback=i=>{console.log(i)}
```

### Success response example

#### Success response example - `执行`

```/
$f.face(index,callback)
```

#### Success response example - `返回`

```/
0
1
2
```

## <a name='faceArr'></a> faceArr
[Back to top](#top)

<p>遍历数组</p>

```
用法 $f.faceArr(obj,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Array/Dom` | <p>遍历对象</p> |
| callback | `callback` | <p>回调函数callback(v,i)</p> |

### Parameters examples
`Array/Dom` - obj

```Array/Dom
let obj=[23,4]
```
`callback` - callback

```callback
let callback=(v,i)=>{console.log(v)}
```

### Success response example

#### Success response example - `执行`

```/
$f.faceArr(obj,callback)
```

#### Success response example - `返回`

```/
23
4
```

## <a name='faceJson'></a> faceJson
[Back to top](#top)

<p>遍历Json</p>

```
用法 $f.faceJson(obj,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Json` | <p>遍历对象</p> |
| callback | `callback` | <p>回调函数callback(v,i,key)</p> |

### Parameters examples
`Json` - obj

```Json
let obj={a:23,b:4}
```
`callback` - callback

```callback
let callback=(v,i,key)=>{console.log(v,i,key)}
```

### Success response example

#### Success response example - `执行`

```/
$f.faceJson(obj,callback)
```

#### Success response example - `返回`

```/
23,0,'a'
4,1,'b'
```

## <a name='makeList'></a> makeList
[Back to top](#top)

<p>遍历列表</p>

```
用法 $f.makeList(list,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| list | `list` | <p>初始数据</p> |
| callback | `Function` | <p>回调函数callback(item,{v,i,key})</p> |

### Parameters examples
`list` - list

```list
let list=[{a:23},{b:5}]
```
`Function` - callback

```Function
let callback=(item,{v,i,key})=>{
 console.log(item.v)
}
```

### Success response example

#### Success response example - `执行`

```/
$f.makeList(list,callback)
```

#### Success response example - `返回`

```/
{a: 23}
{b: 5}
```

## <a name='supperMap'></a> supperMap
[Back to top](#top)

<p>交叉遍历</p>

```
用法 $f.supperMap(arrA,arrB,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| arrA | `Array` | <p>数组A</p> |
| arrB | `Array` | <p>数组B</p> |
| callback | `Function` | <p>回调函数callback(v,vv,index)</p> |

### Parameters examples
`Array` - arrA

```Array
let arrA=[1,2]
```
`Array` - arrB

```Array
let arrB=[4,5]
```
`Function` - callback

```Function
let callback=(v,vv,index)=>{console.log([v*vv,index])}
```

### Success response example

#### Success response example - `执行`

```/
$f.supperMap(arrA,arrB,callback)
```

#### Success response example - `返回`

```/
[4,0]
[5,1]
[8,2]
[10,3]
```

# <a name='filter'></a> filter

## <a name='filter'></a> filter
[Back to top](#top)

<p>对数组/Json的一阶值筛选,不支持嵌套数据</p>

```
用法 $f.filter(data,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Array/Json` | <p>筛选对象</p> |
| callback | `callback` | <p>回调函数</p> |

### Parameters examples
`Array/Json/Obj` - data

```Array/Json/Obj
let data={a:23,c:2}
```
`callback` - callback

```callback
let callback=v=>v>10
```

### Success response example

#### Success response example - `执行`

```/
$f.filter(data,callback)
```

#### Success response example - `返回`

```/
{a:23}
```

## <a name='findRoot'></a> findRoot
[Back to top](#top)

<p>建立权限列表，通过对权限编号的正则判断对应level的role是否有可读权限</p>

```
用法 $f.findRoot(level,role)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| set | `Json` | <p>筛选配置</p> |

### Parameters examples
`Json` - set

```Json
let set={
 roleList:[{
     area:'华东',
     province:'浙江',
     city:'杭州'
   },{
     area:'华东',
     province:'浙江',
     city:'宁波'
   }],
 dataList:[{
   role:'宁波',
   level:'city',
   data:23
},{
role:'浙江',
level:'province',
data:5
}]
}
```

### Success response example

#### Success response example - `执行`

```/
$f.roleSet(set)
$f.root()
$f.findRoot('area', '华东')  //查询角色的root代码
$f.findData('area', '华东')  //查询角色的可读数据
```

#### Success response example - `返回`

```/
23
```

## <a name='routes'></a> routes
[Back to top](#top)

<p>配置查询路径及错误返回</p>

```
用法 $f.routes(path,data,errReplaced)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| path | `String` | <p>路径</p> |
| data | `Obj` | <p>初始数据</p> |
| errReplaced | `/` | <p>错误返回</p> |

### Parameters examples
`String` - path

```String
let path='0/a'
```
`Obj` - data

```Obj
let data=[{a:23},{a:3}]
```
`/` - errReplaced

```/
let errReplaced=5
```

### Success response example

#### Success response example - `执行`

```/
$f.routes(path,data,errReplaced)
$f.run()
```

#### Success response example - `返回`

```/
23
```

## <a name='superFilter'></a> superFilter
[Back to top](#top)

<p>多条件筛选列表</p>

```
用法 $f.superFilter(condition,arr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| condition | `Json` | <p>多条件设置</p> |
| arr | `ArrayJson` | <p>初始列表</p> |

### Parameters examples
`Json` - condition

```Json
let condition={a:v=>v>23,b:v=>v<30}
```
`Array` - arr

```Array
let arr=[{a:25,b:26},{a:20,b:26}]
```

### Success response example

#### Success response example - `执行`

```/
$f.superFilter(condition,arr)
```

#### Success response example - `返回`

```/
[{a:25,b:26}]
```

## <a name='tableFilter'></a> tableFilter
[Back to top](#top)

<p>获取想要的表单</p>

```
用法 $f.tableFilter(data,set)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `ArrayJson` | <p>初始数据</p> |
| set | `Json` | <p>筛选配置</p> |

### Parameters examples
`ArrayJson` - data

```ArrayJson
let data=[{a:{b:23}},{a:3}]
```
`Json` - set

```Json
let set={
 wantKeys:0,
 path:'a/b',
 errReplaced:'johnErr'
}
```

### Success response example

#### Success response example - `执行`

```/
$f.tableFilter(data,set)
```

#### Success response example - `返回`

```/
[23,johnErr]
```

# <a name='get'></a> get

## <a name='getLevel'></a> getLevel
[Back to top](#top)

<p>获取数据在数组中的位置,查无对应值返回-1</p>

```
用法 $f.getLevel(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| t | `/` | <p>数据</p> |
| data | `Array` | <p>数组</p> |

### Parameters examples
`/` - t

```/
let t=2
```
`/` - data

```/
let data=[2,234,]
```

### Success response example

#### Success response example - `执行`

```/
$f.getLevel(t,data)
```

#### Success response example - `返回`

```/
0
```

## <a name='getScore'></a> getScore
[Back to top](#top)

<p>获取数据在数组中出现的比例,</p>

```
用法 $f.getScore(txt,testArr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| txt | `/` | <p>数据</p> |
| testArr | `Array` | <p>数组</p> |

### Parameters examples
`/` - txt

```/
let txt='你好'
```
`/` - data

```/
let testArr=['你好吗','你好','好的']
```

### Success response example

#### Success response example - `执行`

```/
$f.getScore(txt,testArr)
```

#### Success response example - `返回`

```/
0.333333
```

## <a name='typeScore'></a> typeScore
[Back to top](#top)

<p>通过获取数据在数组中出现的比例,判断数据对应的键值</p>

```
用法 $f.typeScore(txt,cpWord)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| txt | `String` | <p>数据</p> |
| cpWord | `Obj` | <p>数组</p> |

### Parameters examples
`/` - txt

```/
let txt='你好'
```
`/` - data

```/
let cpWord={
'问候':['你好','早上好'],
'营销':['波士顿矩阵']
}
```

### Success response example

#### Success response example - `执行`

```/
$f.typeScore(txt,cpWord)
```

#### Success response example - `返回`

```/
[{type: "问候", score: 0.5}]
```

# <a name='include'></a> include

## <a name='includeArr'></a> includeArr
[Back to top](#top)

<p>判断嵌套数据内是否有数组类型</p>

```
用法 $f.includeArr(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data={a:[2,34]}
```

### Success response example

#### Success response example - `执行`

```/
$f.includeArr(data)
```

#### Success response example - `返回`

```/
true
```

## <a name='includeJson'></a> includeJson
[Back to top](#top)

<p>判断嵌套数据内是否有Json格式类型</p>

```
用法 $f.includeJson(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data={a:[2,34]}
```

### Success response example

#### Success response example - `执行`

```/
$f.includeJson(data)
```

#### Success response example - `返回`

```/
true
```

# <a name='is'></a> is

## <a name='isArray'></a> isArray
[Back to top](#top)

```
用法 $f.isArray(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data={b:3}
```

### Success response example

#### Success response example - `执行`

```/
$f.isArray(data)
```

#### Success response example - `返回`

```/
false
```

## <a name='isErr'></a> isErr
[Back to top](#top)

```
用法 $f.isErr(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data={b:3}
```

### Success response example

#### Success response example - `执行`

```/
$f.isErr(data)
```

#### Success response example - `返回`

```/
false
```

## <a name='isJson'></a> isJson
[Back to top](#top)

```
用法 $f.isJson(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data={b:3}
```

### Success response example

#### Success response example - `执行`

```/
$f.isJson(data)
```

#### Success response example - `返回`

```/
ture
```

## <a name='isSimple'></a> isSimple
[Back to top](#top)

<p>假定String/Number为简单类型，判断初始数据是否为该类型</p>

```
用法 $f.isSimple(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data=undefined
```

### Success response example

#### Success response example - `执行`

```/
$f.isSimple(data)
```

#### Success response example - `返回`

```/
false
```

# <a name='johnBase'></a> johnBase

## <a name='keys'></a> keys
[Back to top](#top)

<p>获取数据键值</p>

```
用法 $f.keys(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data=[23,24]
```

### Success response example

#### Success response example - `执行`

```/
$f.keys(data)
```

#### Success response example - `返回`

```/
['0','1']
```

## <a name='length'></a> length
[Back to top](#top)

<p>获取数据长度</p>

```
用法 $f.length(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data='23f'
```

### Success response example

#### Success response example - `执行`

```/
$f.length(data)
```

#### Success response example - `返回`

```/
3
```

## <a name='notBlank'></a> notBlank
[Back to top](#top)

<p>去除空值</p>

```
用法 $f.notBlank(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Array` | <p>数据对象</p> |

### Parameters examples
`Array` - data

```Array
let data=[23,4,24,,undefined,23]
```

### Success response example

#### Success response example - `执行`

```/
$f.notBlank(data)
```

#### Success response example - `返回`

```/
[23, 4, 24, 23]
```

## <a name='unique'></a> unique
[Back to top](#top)

<p>数组去重</p>

```
用法 $f.unique(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Array` | <p>去重对象</p> |

### Parameters examples
`Array` - data

```Array
let data=[2,324,23,2,2,2,2]
```

### Success response example

#### Success response example - `执行`

```/
$f.unique(data)
```

#### Success response example - `返回`

```/
[2, 324, 23]
```

# <a name='johnCode'></a> johnCode

## <a name='ABReCode'></a> ABReCode
[Back to top](#top)

<p>对Json数组重新编码,多层组合,返回键值+数字编号,键值为中文时返回encodeURI</p>

```
用法 $f.ABReCode(JsonArr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JsonArr | `JsonArr` | <p>初始数据</p> |

### Parameters examples
`JsonArr` - JsonArr

```JsonArr
let JsonArr={a:[23,423,4],b:234}
```

### Success response example

#### Success response example - `执行`

```/
$f.ABReCode(JsonArr)
```

#### Success response example - `返回`

```/
{
aRoot:["a0", "a1", "a2"],
bRoot:["a0b0"]
}
```

## <a name='ACode'></a> ACode
[Back to top](#top)

<p>对Json数组分层重新编码,返回键值+数字编号,键值为中文时返回encodeURI</p>

```
用法 $f.ACode(JsonArr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JsonArr | `JsonArr` | <p>初始数据</p> |

### Parameters examples
`JsonArr` - JsonArr

```JsonArr
let JsonArr={a:[23,423,4],b:23}
```

### Success response example

#### Success response example - `执行`

```/
$f.ACode(JsonArr)
```

#### Success response example - `返回`

```/
{
a:[0, 1, 2],
aCode:["a0", "a1", "a2"],
b:[0],
bCode:['b0']
}
```

## <a name='reCode'></a> reCode
[Back to top](#top)

<p>对数组重新编码,返回数字编号</p>

```
用法 $f.reCode(arr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| arr | `Array` | <p>初始数据</p> |

### Parameters examples
`Array` - arr

```Array
let arr=['afe','华东','afe']
```

### Success response example

#### Success response example - `执行`

```/
$f.reCode(arr)
```

#### Success response example - `返回`

```/
[0,1,0]
```

# <a name='johnFn'></a> johnFn

## <a name='goByTime'></a> goByTime
[Back to top](#top)

<p>按时间间隔执行</p>

```
用法 $f.goByTime(time,fn)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| time | `Array` | <p>时间设置[单个时间间隔，总时段]</p> |
| fn | `Function` | <p>回调函数</p> |

### Parameters examples
`Array` - time

```Array
let time=[500,500*5]
```
`Function` - fn

```Function
let fn=i=>{console.log(i)}
```

### Success response example

#### Success response example - `执行`

```/
$f.goByTime(time,fn)
```

#### Success response example - `返回`

```/
0
1
2
3
4
```

## <a name='safe'></a> safe
[Back to top](#top)

<p>忽略错误，安全执行</p>

```
用法 $f.safe(fn)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| fn | `Function` | <p>回调函数</p> |

### Parameters examples
`Function` - fn

```Function
let fn=()=>{console.log('i am safe')}
```

### Success response example

#### Success response example - `执行`

```/
$f.safe(fn)
```

#### Success response example - `返回`

```/
'i am safe'
```

## <a name='sleep'></a> sleep
[Back to top](#top)

<p>延迟执行，返回Promise</p>

```
用法 $f.sleep(time)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| time | `Nume` | <p>时间设置,单位ms</p> |

### Parameters examples
`Array` - time

```Array
let time=1000
```

### Success response example

#### Success response example - `执行`

```/
$f.sleep(time).then(()=>{console.log('action')})
```

#### Success response example - `返回`

```/
'action'
```

# <a name='johnJson'></a> johnJson

## <a name='changeKeys'></a> changeKeys
[Back to top](#top)

<p>改变Json的键值</p>

```
用法 $f.changeKeys(JsonObj,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JsonObj | `Json` | <p>数据</p> |

### Parameters examples
`Json` - JsonObj

```Json
let JsonObj={a:23}
```
`Function` - callback

```Function
let callback=key=>key+'_b'
```

### Success response example

#### Success response example - `执行`

```/
$f.changeKeys(JsonObj)
```

#### Success response example - `返回`

```/
{'a_b':23}
```

## <a name='changeValue'></a> changeValue
[Back to top](#top)

<p>改变Json的键值</p>

```
用法 $f.changeValue(JsonObj,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JsonObj | `Json` | <p>数据</p> |

### Parameters examples
`Json` - JsonObj

```Json
let JsonObj={a:23}
```
`Function` - callback

```Function
let callback=v=>v*2
```

### Success response example

#### Success response example - `执行`

```/
$f.changeKeys(JsonObj)
```

#### Success response example - `返回`

```/
{a:46}
```

## <a name='makeJson'></a> makeJson
[Back to top](#top)

<p>从原obj根据keys制造新的Json</p>

```
用法 $f.makeJson(obj,keys,baseData)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `Json` | <p>数据</p> |
| keys | `Array` | <p>键值组</p> |
| baseData | `/` | <p>空值/错误时返回值</p> |

### Parameters examples
`Json` - obj

```Json
let obj={a:23,b:42,c:[2,34]}
```
`Array` - keys

```Array
let keys=['a','c','d']
```
`/` - baseData

```/
let baseData=[2,4]
```

### Success response example

#### Success response example - `执行`

```/
$f.makeJson(obj,keys,baseData)
```

#### Success response example - `返回`

```/
{a:23,c:[2,34],d:[2,4]}
```

## <a name='merge'></a> merge
[Back to top](#top)

<p>将Json2组合到Json1中，重复部分选择是否替换,默认不替换</p>

```
用法 $f.merge(Json1,Json2,isReplaced)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Json1 | `Json` | <p>数据1</p> |
| isReplaced | `Boolean` | <p>重复部分选择是否替换</p> |

### Parameters examples
`Json` - Json1

```Json
let Json1={a:23,c:5}
```
`Json` - Json2

```Json
let Json2={b:45,a:3}
```
`Boolean` - isReplaced

```Boolean
let isReplaced=true
```

### Success response example

#### Success response example - `执行`

```/
$f.merge(Json1,Json2,isReplaced)
```

#### Success response example - `返回`

```/
{a:3,c:5,b:45}
```

## <a name='notJson'></a> notJson
[Back to top](#top)

<p>根据键值拒绝Json</p>

```
用法 $f.notJson(notKeys,JsonOpt)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| notKeys | `Array` | <p>键值</p> |
| JsonOpt | `Json` | <p>原数据</p> |

### Parameters examples
`Json` - notKeys

```Json
let notKeys=['a','c']
```
`Json` - JsonOpt

```Json
let JsonOpt={b:45,a:3}
```

### Success response example

#### Success response example - `执行`

```/
$f.notJson(notKeys,JsonOpt)
```

#### Success response example - `返回`

```/
{b:45}
```

## <a name='wantJson'></a> wantJson
[Back to top](#top)

<p>根据键值获取Json</p>

```
用法 $f.wantJson(wantKeys,JsonOpt,errReplaced)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| wantKeys | `Array` | <p>键值</p> |
| JsonOpt | `Json` | <p>原数据</p> |
| errReplaced | `/` | <p>错误时返回</p> |

### Parameters examples
`Json` - wantKeys

```Json
let wantKeys=['a','c']
```
`Json` - JsonOpt

```Json
let JsonOpt={b:45,a:3}
```
`/` - errReplaced

```/
let errReplaced='c'
```

### Success response example

#### Success response example - `执行`

```/
$f.wantJson(wantKeys,JsonOpt,errReplaced)
```

#### Success response example - `返回`

```/
{a:3,c:'c'}
```

# <a name='johnLocation'></a> johnLocation

## <a name='cookie'></a> cookie
[Back to top](#top)

<p>对cookie进行获取，设置、剔除操作</p>

```
用法 $f.cookie(type,obj,time)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| type | `String` | <p>操作类型get/set/remove</p> |

### Parameters examples
`obj` - 对象

```obj
let obj1={a:23}
let obj2=['PSTM','PSINO']
```

### Success response example

#### Success response example - `执行`

```/
$f.cookie('set',obj1)
$f.cookie('get',obj2)
```

#### Success response example - `返回`

```/
"a=23"
{PSTM: "PSTM=1592125169", PSINO: "PSINO=5"}
```

## <a name='localStorage'></a> localStorage
[Back to top](#top)

<p>对缓存进行获取，设置、剔除操作</p>

```
用法 $f.localStorage(type,obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| type | `String` | <p>操作类型get/set/remove</p> |

### Parameters examples
`obj` - 对象

```obj
let obj1={a:23}
let obj2=['a','b']
```

### Success response example

#### Success response example - `执行`

```/
$f.localStorage('set',obj1)
$f.localStorage('get',obj2)
```

#### Success response example - `返回`

```/
{a:23}
[23,null]
```

# <a name='johnPath'></a> johnPath

## <a name='find'></a> find
[Back to top](#top)

<p>发起Get请求，返回Promise</p>

```
用法 $f.find(url)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| url | `url` | <p>返回链接</p> |

### Parameters examples
`url` - url

```url
let url='http://www.baidu.com'
```

### Success response example

#### Success response example - `执行`

```/
$f.find(url).then((res)=>{console.log(res)})
```

#### Success response example - `返回`

```/
//返回百度页面HTML值
```

## <a name='path'></a> path
[Back to top](#top)

<p>将HTML转化为list格式</p>

```
用法 $f.path(myHtml,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| myHtml | `HTML/String` | <p>html对象</p> |
| callback | `Function` | <p>对节点内innerText回调函数</p> |

### Parameters examples
`HTML/String` - myHtml

```HTML/String
let myHtml=$('body')[0]
```
`Function` - callback

```Function
let callback=(v)=>'<'+v+'>'
```

### Success response example

#### Success response example - `执行`

```/
$f.path(myHtml,callback)
```

#### Success response example - `返回`

```/
返回HTML的List
```

## <a name='query'></a> query
[Back to top](#top)

<p>通过节点属性组合,抓取想要的页面节点</p>

```
用法 $f.query(myHtml,queryPath,callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| myHtml | `HTML/String` | <p>html对象</p> |
| queryPath | `String/Array` | <p>属性筛选</p> |
| callback | `Function` | <p>对节点内innerText回调函数</p> |

### Parameters examples
`HTML/String` - myHtml

```HTML/String
let myHtml=$('div')
```
`String/Array` - queryPath

```String/Array
let queryPath='.main'
```
`Function` - callback

```Function
let callback=v=>v
```

### Success response example

#### Success response example - `执行`

```/
$f.query(myHtml,queryPath,callback)
```

#### Success response example - `返回`

```/
返回HTML的List
```

## <a name='setPath'></a> setPath
[Back to top](#top)

<p>通过时间间隔发起Get请求，从而获取数据</p>

```
用法 $f.setPath(opt)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| opt | `json` | <p>配置</p> |

### Parameters examples
`json` - opt

```json
let opt = {
 index: 0,//初始值
 lastIndex: 5,//终值
 urlFn: index => `http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=ming&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=ming&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&pn=${index*30}&rn=30&gsm=3c&1592324318150=`, //url回调函数
 timeSet: [500, 600*5],//[时间间隔，总时间]
 resFn: (beginIndex,endIndex,data) => {$f.export('1.json',data)},//最终结果处理,回调参数:beginIndex,endIndex,data
 vCallback: v => $f.parse(v)//单个请求结果处理
}
```

### Success response example

#### Success response example - `执行`

```/
$f.setPath(opt)
$f.getData()
```

#### Success response example - `返回`

```/
导出数据
```

# <a name='johnString'></a> johnString

## <a name='connect'></a> connect
[Back to top](#top)

<p>将Json拼接字符串</p>

```
用法 $f.connect(Obj,changer)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Obj | `Json/List` | <p>初始数据</p> |
| changer | `Array` | <p>拼接配置[键值连接符,结束字符,值首字符,值尾字符,末尾字符]</p> |

### Parameters examples
`String` - Obj

```String
let Obj={a:23,b:[1,2]}
```
`Array` - changer

```Array
let changer=[' in( ', ' )and ', "'", "'", ')']
```

### Success response example

#### Success response example - `执行`

```/
$f.connect(Obj,changer)
```

#### Success response example - `返回`

```/
"a in( '23' )and b in( '1','2')"
```

## <a name='deepReg'></a> deepReg
[Back to top](#top)

<p>根据正则表达式提取对应的内容</p>

```
用法 $f.deepReg(str,reg)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| str | `String` | <p>文本内容</p> |
| reg | `reg` | <p>正则条件</p> |

### Parameters examples
`String` - str

```String
let str='fwjhgowegj'
```
`reg` - reg

```reg
let reg=/w[\w]+?g/
```

### Success response example

#### Success response example - `执行`

```/
$f.deepReg(str,reg)
```

#### Success response example - `返回`

```/
["wjhg", "weg"]
```

## <a name='deepTest'></a> deepTest
[Back to top](#top)

<p>测试值是否符合正则表达式组</p>

```
用法 $f.deepTest(test,testObj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| test | `String` | <p>文本内容</p> |
| testObj | `JsonReg` | <p>正则条件组</p> |

### Parameters examples
`String` - test

```String
let test='fwjhgowegj'
```
`JsonReg` - testObj

```JsonReg
let testObj={a:['w',2],b:'owg'}
```

### Success response example

#### Success response example - `执行`

```/
$f.deepTest(test,testObj)
```

#### Success response example - `返回`

```/
0.333
```

## <a name='dropStr'></a> dropStr
[Back to top](#top)

<p>舍弃字符串中的字符</p>

```
用法 $f.dropStr(Str,t)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Str | `String` | <p>初始数据</p> |
| t | `String` | <p>舍弃字符</p> |

### Parameters examples
`String` - Str

```String
let Str='fefjfoe'
```
`String` - t

```String
let t='f'
```

### Success response example

#### Success response example - `执行`

```/
$f.dropStr(Str,t)
```

#### Success response example - `返回`

```/
"ejoe"
```

## <a name='equat'></a> equat
[Back to top](#top)

<p>将Json转化为序列</p>

```
用法 $f.equat(JsonStr,connection,isQuotes)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JsonStr | `Json` | <p>初始数据</p> |
| connection | `String` | <p>链接符</p> |
| isQuotes | `Boolean` | <p>值首尾是否带引号</p> |

### Parameters examples
`Json` - JsonStr

```Json
let Obj={a:23,b:[1,2]}
```
`Array` - connection

```Array
let connection=''
```
`Boolean` - isQuotes

```Boolean
let isQuotes=false
```

### Success response example

#### Success response example - `执行`

```/
$f.equat(JsonStr,connection,isQuotes)
```

#### Success response example - `返回`

```/
'a=23&b=[1,2]'
```

## <a name='myTrim'></a> myTrim
[Back to top](#top)

<p>去除首尾空值</p>

```
用法 $f.myTrim(x)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| x | `String` | <p>文本内容</p> |

### Parameters examples
`String` - x

```String
let x='  fwegfe wfaf '
```

### Success response example

#### Success response example - `执行`

```/
$f.myTrim(x)
```

#### Success response example - `返回`

```/
'fwegfe wfaf'
```

## <a name='replace'></a> replace
[Back to top](#top)

<p>将文本中符合正则的内容替换成对应值</p>

```
用法 $f.replace(data,matchData,replaceData)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `String` | <p>文本内容</p> |
| matchData | `Reg` | <p>正则匹配条件</p> |
| replaceData | `String` | <p>替换值</p> |

### Parameters examples
`String` - data

```String
let data='fwegfewfaf'
```
`Reg` - matchData

```Reg
let matchData=/f/
```
`/` - replaceData

```/
let replaceData='我'
```

### Success response example

#### Success response example - `执行`

```/
$f.replace(data,matchData,replaceData)
```

#### Success response example - `返回`

```/
"我weg我ew我a我"
```

## <a name='split'></a> split
[Back to top](#top)

<p>将文本按数组拆分成数组</p>

```
用法 $f.split(x,splitArr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| x | `String` | <p>文本内容</p> |
| splitArr | `Array` | <p>拆分数组</p> |

### Parameters examples
`String` - x

```String
let x='fwegfewfaf'
```
`Array` - splitArr

```Array
let splitArr=['f','g']
```

### Success response example

#### Success response example - `执行`

```/
$f.split(x,splitArr)
```

#### Success response example - `返回`

```/
["", "we", "", "ew", "a", ""]
```

# <a name='johnTable'></a> johnTable

## <a name='createTable'></a> createTable
[Back to top](#top)

<p>将数据呈现到页面固定节点中</p>

```
用法 $f.createTabel()
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `list` | <p>初始数据</p> |
| tableId | `ElementNode` | <p>HTML节点</p> |

### Parameters examples
`list` - data

```list
let data=[{a:23},{b:24}]
let tableId='body'
```

### Success response example

#### Success response example - `执行`

```/
$f.setTable(data,tableId)
$f.createTable()
```

#### Success response example - `返回`

```/
页面出现表格
```

# <a name='johnTime'></a> johnTime

## <a name='dateFtt'></a> dateFtt
[Back to top](#top)

<p>获取指定格式的时间</p>

```
用法 $f.dateFtt(fmt,date)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| fmt | `fmt` | <p>指定时间格式</p> |
| date | `date` | <p>初始数据</p> |

### Parameters examples
`date` - date

```date
let fmt='yyyyMMdd hhmmss'
```
`date` - date

```date
let date='2020-6-14'
```

### Success response example

#### Success response example - `执行`

```/
$f.dateFtt(fmt,date)
```

#### Success response example - `返回`

```/
'20200614 000000'
```

## <a name='time'></a> time
[Back to top](#top)

<p>获取简易时间,date为空时，返回当下时间</p>

```
用法 $f.time(date)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| date | `date` | <p>初始数据</p> |

### Parameters examples
`date` - date

```date
let date='2020/6/14'
```

### Success response example

#### Success response example - `执行`

```/
$f.time(date)
```

#### Success response example - `返回`

```/
["2020-06-13", "16:00:00", "000Z"]
```

# <a name='johnUrl'></a> johnUrl

## <a name='url'></a> url
[Back to top](#top)

<p>建立Url对象，并调整Params参数,或者获取</p>

```
用法 $f.setUrl(url)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| url | `url` | <p>初始url</p> |
| paramsObj | `ArrayJson` | <p>Params参数</p> |

### Parameters examples
`url` - myUrl

```url
let myUrl='http://www.baidu.com'
```
`ArrayJson` - paramsObj

```ArrayJson
let paramsObj=[{a:2,b:3}]
```

### Success response example

#### Success response example - `执行`

```/
$f.setUrl(myUrl)
$f.setParams(paramsObj)
$f.getParams('a')
```

#### Success response example - `返回`

```/
{a:"2"}
```

# <a name='to'></a> to

## <a name='csvDataToJson'></a> csvDataToJson
[Back to top](#top)

<p>将字符串/一维数组数据根据行列分隔符切割成list格式,</p>

```
用法 $f.csvDataToList(data,headNum,segTag)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `String/Array` | <p>数据</p> |
| headNum | `Number` | <p>表头列数</p> |
| segTag | `Array` | <p>行列分隔符默认[' ',',']</p> |

### Parameters examples
`String/Array` - data

```String/Array
let data='0,1,2,3 4,5,6,7'
```
`Number` - headNum

```Number
let headNum=4
```
`Array` - segTag

```Array
let segTag=[' ',',']
```

### Success response example

#### Success response example - `执行`

```/
$f.csvDataToList(data,headNum,segTag)
```

#### Success response example - `返回`

```/
[{0:4,1:5,2,:6,3:7}]
```

## <a name='toArray'></a> toArray
[Back to top](#top)

<p>将初始数据转为数组格式,如果本身是数组，返回结果不变，否则返回[原始数据]，错误数据类型返回['']</p>

```
用法 $f.toArray(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `/` | <p>初始数据</p> |

### Parameters examples
`/` - data

```/
let data=234
```

### Success response example

#### Success response example - `执行`

```/
$f.toArray(data)
```

#### Success response example - `返回`

```/
[23]
```

## <a name='toJson'></a> toJson
[Back to top](#top)

<p>将初始数据转为Json格式,如果本身是Json，返回结果不变，否则返回{[key]:原始数据}，错误数据类型返回[[key]:'']; 若不设置key，默认为johnKey</p>

```
用法 $f.toJson(v,key)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| v | `/` | <p>数据</p> |
| key | `/` | <p>键值</p> |

### Parameters examples
`/` - v

```/
let v=234
```
`/` - key

```/
let key=a
```

### Success response example

#### Success response example - `执行`

```/
$f.toJson(v,key)
```

#### Success response example - `返回`

```/
{a:234}
```

## <a name='toList'></a> toList
[Back to top](#top)

<p>将HTML具有表格属性的指定内容转化为表格形式</p>

```
用法 $f.toList(callback)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| myHtml | `HTML/String` | <p>html对象</p> |
| tr | `elementNode` | <p>行属性选择器</p> |
| td | `elementNode` | <p>列属性选择器</p> |
| vCallback | `Function` | <p>单元格数据回调</p> |

### Parameters examples
`HTML/String` - myHtml

```HTML/String
let myHtml=$('#content_left')
```
`elementNode` - tr

```elementNode
let tr='.result'
```
`elementNode` - td

```elementNode
let td='div'
```
`Function` - callback

```Function
let callback=v=>v
```

### Success response example

#### Success response example - `执行`

```/
$f.setHtml(myHtml)
$f.setTr(tr)
$f.setTd(td)
$f.toList(v=>v.innerText)
```

#### Success response example - `返回`

```/
返回HTML的List
```

## <a name='toNumString'></a> toNumString
[Back to top](#top)

<p>将数字转为固定位数的序号</p>

```
用法 $f.toNumString(num,len)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| num | `Number` | <p>初始数据</p> |
| len | `Number` | <p>位数</p> |

### Parameters examples
`Number` - num

```Number
let num= 23
```
`Number` - len

```Number
let len=5
```

### Success response example

#### Success response example - `执行`

```/
$f.toNumString(num,len)
```

#### Success response example - `返回`

```/
00023
```

## <a name='toSql'></a> toSql
[Back to top](#top)

<p>生成sql语句</p>

```
用法 $f.toSql()
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Opt | `Json` | <p>Sql配置</p> |

### Parameters examples
`Json` - Opt

```Json
let Opt={
     url: '',
     need: ['a','b','year'],
     table: 'table',
     whereIn: {
       year:[2018,2017]
     },
     whereLike: {
     },
     db: 'db',
     id: 'sa',
     distinct: '1',
     group: ['a','b','year'],
     order: ['a'],
     data: {
       a:1,
       b:2,
       year:2018
       }
   }
```

### Success response example

#### Success response example - `执行`

```/
$f.setSql(Opt)
$f.toSql() //select/insert/update/delete
```

#### Success response example - `返回`

```/
//sql语句
```

## <a name='totext'></a> totext
[Back to top](#top)

<p>将字符串数组的值拼接上首尾字符</p>

```
用法 $f.totext(startStr,endStr,arr)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| startStr | `String` | <p>开始字符</p> |
| arr | `Array` | <p>字符串数组</p> |

### Parameters examples
`String` - startStr

```String
let startStr ='f'
```
`String` - endStr

```String
let endStr='g'
```
`Array` - arr

```Array
let arr=[23,324]
```

### Success response example

#### Success response example - `执行`

```/
$f.totext(startStr,endStr,arr)
```

#### Success response example - `返回`

```/
['f23g','f324g']
```

# <a name='trans'></a> trans

## <a name='arrPeer'></a> arrPeer
[Back to top](#top)

<p>使数组等长</p>

```
用法 $f.arrPeer(arrA,arrB,str)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| arrA | `Array` | <p>数组A</p> |
| arrB | `Array` | <p>数组B</p> |
| str | `/` | <p>空值或错误时返回值</p> |

### Parameters examples
`Array` - arrA

```Array
let arrA=[2,3]
```
`Array` - arrB

```Array
let arrB=[5]
```
`/` - str

```/
let str=6
```

### Success response example

#### Success response example - `执行`

```/
$f.arrPeer(arrA,arrB,str)
```

#### Success response example - `返回`

```/
{
 arrA:[2,3],
 arrB:[5,6]
}
```

## <a name='flat'></a> flat
[Back to top](#top)

<p>扁平化Json数据为列表格式{[]}</p>

```
用法 $f.flat(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `/` | <p>初始数据</p> |

### Parameters examples
`/` - obj

```/
let obj={a:23,b:{c:242}}
```

### Success response example

#### Success response example - `执行`

```/
$f.flat(obj)
```

#### Success response example - `返回`

```/
{
 flatKeys:["a", "b/c"]
 flatData:[{a: 23, b/c: 242}]
}
```

## <a name='jsonFlat'></a> jsonFlat
[Back to top](#top)

<p>扁平化Json数据，第一层为数组</p>

```
用法 $f.jsonFlat(obj,index)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `/` | <p>初始数据</p> |
| index | `/` | <p>初始键值,一般为0</p> |

### Parameters examples
`/` - obj

```/
let obj={a:23,b:{c:242}}
```
`/` - index

```/
let index=0
```

### Success response example

#### Success response example - `执行`

```/
$f.jsonFlat(obj,index)
```

#### Success response example - `返回`

```/
{
 allKeys:["0/a", "0/b/c"],
 flatData:{0/a: 23, 0/b/c: 242}
}
```

## <a name='parse'></a> parse
[Back to top](#top)

<p>将嵌套json字符串转化为Json格式</p>

```
用法 $f.parse(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `objString` | <p>数据</p> |

### Parameters examples
`objString` - obj

```objString
let obj=`{"a":{"b":2}}`
```

### Success response example

#### Success response example - `执行`

```/
$f.parse(obj)
```

#### Success response example - `返回`

```/
{a:{b:2}}
```

## <a name='peer'></a> peer
[Back to top](#top)

<p>使得objA与objB等长,新键的值返回value</p>

```
用法 $f.peer(objA,objB,value)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| objA | `Json` | <p>数据A</p> |
| objB | `Json` | <p>数据B</p> |
| value | `/` | <p>空值/错误时返回值</p> |

### Parameters examples
`Json` - objA

```Json
let objA={a:23}
```
`Json` - objB

```Json
let objA={b:4}
```
`/` - value

```/
let value=[2,4]
```

### Success response example

#### Success response example - `执行`

```/
$f.peer(objA,objB,value)
```

#### Success response example - `返回`

```/
{a:23,b:[2,4]}
```

## <a name='range'></a> range
[Back to top](#top)

<p>获取数据键值</p>

```
用法 $f.range(data)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| data | `Array` | <p>数组首尾值设定,注意数组输出不包括尾值</p> |

### Parameters examples
`/` - data

```/
let data=[3,5]
```

### Success response example

#### Success response example - `执行`

```/
$f.range(data)
```

#### Success response example - `返回`

```/
[3,4]
```

## <a name='tranList'></a> tranList
[Back to top](#top)

<p>旋转列表数据</p>

```
用法 $f.tranList(obj)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| obj | `jsonArr` | <p>初始数据</p> |

### Parameters examples
`jsonArr` - obj

```jsonArr
let obj={a:[23,45],b:[3]}
```

### Success response example

#### Success response example - `执行`

```/
$f.tranList(obj)
```

#### Success response example - `返回`

```/
[{a:23,b:3},{a:45,b:undefined}]
```

## <a name='trans'></a> trans
[Back to top](#top)

<p>旋转列表数据</p>

```
用法 $f.trans(ArrJson)
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| ArrJson | `ArrJson` | <p>初始数据</p> |

### Parameters examples
`ArrJson` - ArrJson

```ArrJson
let ArrJson=[{a:23,b:3},{a:45}]
```

### Success response example

#### Success response example - `执行`

```/
$f.trans(ArrJson)
```

#### Success response example - `返回`

```/
{a:[23,45],b:[3,undefined]}
```
