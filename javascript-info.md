## JavaScript Reference

### Array 数组方法
 
#### 复制 (返回字符串)
`.join()` 将数组转为字符串, 返回字符串.
[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)  
`.toString()` 将数组转为字符串, 返回字符串.

#### 复制 (返回新数组)
`.slice(begin[, end])`  复制该数组(或一部分), 返回新数组.  
`.concat(...new)` 将值或数组合并为新数组, 返回新数组.

#### 操作元素 (修改原数组)
`.unshift(...new)` 增加元素到数组开头, 返回数组新的长度.  
`.push(...new)` 增加元素到数组末尾, 返回数组新的长度.
[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
`.shift()` 删除首个元素, 返回被删除元素的值.  
`.pop()` 删除最末元素, 返回被删除元素的值.  
`.splice(start, deleteCount, ...new)`
修改数组中的元素, 返回被删除元素组成的数组.
[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)  
`.copyWithin(start, a, b)` 从 start 位置开始覆盖为索引 a, b 区间的值. [ES6] [参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)  
`.fill(v, a, b)` 将索引 a, b 区间的值覆盖为 v. [ES6] [参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

#### 操作索引 (修改原数组)
`.reverse()` 反向数组索引, 返回该数组.  
`.sort([callback])` 默认按照字符串序列修改数组索引, 返回该数组.  

#### 遍历
`.forEach(callback)` 遍历数组, 期间无法终止.  
`.some(callback)` 遍历数组, 直到返回 true.  
`.every(callback)` 遍历数组, 直到返回 false.  
`.find(callback)` 遍历数组, 直到返回 true, 返回该值. [ES6]   
`.findIndex(callback)` 遍历数组, 直到返回 true, 返回该索引. [ES6]  
`.map(callback)` 遍历数组, 将每个返回值组成一个新数组返回.
`.filter(callback)` 遍历数组, 将返回值为 true 的值组成一个新数组返回.  
`.reduce(callback, init)` 遍历数组, 返回最终返回值.  
`.reduceRight(callback, init)` 反向遍历数组, 返回最终返回值.

#### 查找(特殊遍历)
`.indexOf()` 遍历数组查找是否有匹配项, 返回第一个匹配项的索引.  
`.lastIndexOf()` 遍历数组查找是否有匹配项, 返回最后一个匹配项的索引.  
`.includes()` 遍历数组查找是否有匹配项, 返回布尔值. [ES7]

#### 其他
`.entries()` 根据数组返回一个包含 k+v 的迭代器. [ES6]  
`.keys()` 根据数组返回一个包含 key 的迭代器. [ES6]  
`.values()` 根据数组返回一个包含 value 的迭代器. [ES6]  
`.toLocaleString()` 根据本地信息将数组转为字符串, 返回字符串. [ES2017]

### String 字符串方法

`.localeCompare(str[, loc[, opt]])` 根据语言为两个字符排序(中文按照拼音排). [参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)  
`.split()` 拆分字符串, 返回将所有匹配值放入的数组.

#### 编码
`String.raw()` 根据模板创建字符串. [ES6]  
`String.fromCharCode(...num)` 根据 Unicode 数字序列(最大16位)创建字符串.  
`String.fromCodePoint(...num)` 根据 Unicode 点序列(不限位数)创建字符串. [ES6]  
`.charCodeAt(pos)` 返回 16 进制编码单元最后的 Unicode 序列.  
`.codePointAt(pos)` 返回 Unicode 序列. [ES6]  
`.normalize([ops])` 返回 Unicode 标准化之后的字符串. [ES6]

```
String.fromCharCode(128529).codePointAt()
// 62993 出错了
String.fromCodePoint(128529).charCodeAt()
// 55357 出错了
String.fromCodePoint(194564).normalize().codePointAt()
// 20320 没出错, 只是转为映射的标准编码
```

#### 处理 (并返回新字符串)
`.charAt(pos)` 从字符串指定位置返回.  
`.slice(start[, end])` 截取字符串的一部分返回.  
`.substr(start[, length ])` 截取字符串的一部分返回.  
`.substring(pos, [pos])` 截取字符串的一部分返回([不建议](http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm "与 Ben Nadel 所见略同")).  
`.concat(...str)` 按顺序拼接多个字符串为一个新字符串并返回.  
`.repeat(num)` 重复字符串 num 次为一个新字符串并返回. [ES6]  
`.replace()` 普通或正则方式替换为新字符串并返回. [参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

`.toString()` 返回字符串形式.  
`.valueOf()` 返回原始值.  
`.toLowerCase()` 返回全小写.  
`.toUpperCase()` 返回全大写.  
`.toLocaleLowerCase()` 返回本地化全小写.  
`.toLocaleUpperCase()` 返回本地化全大写.  
`.trim()` 移除首尾空白字符.  
`.trimLeft()` 移除首空白字符.  
`.trimRight()` 移除尾空白字符.

#### 搜索
`.includes(str[, pos])` 搜索字符串是否在任意位置, 返回布尔. [ES6]  
`.startsWith(str[, pos])` 搜索字符串是否在指定开始位置, 返回布尔. [ES6]  
`.endsWith(str[, pos])` 搜索字符串是否在指定结束位置, 返回布尔. [ES6]  
`.indexOf(str[, pos])` 搜索字符串是否在任意位置, 返回最后匹配的索引.  
`.lastIndexOf(str[, pos])` 搜索字符串是否在任意位置, 返回最先匹配的索引.  
`.search(regexp)` 搜索字符串, 返回首次匹配的索引.  
`.match(regexp)` 搜索字符串, 返回将所有匹配值放入的数组.

#### HTML
`.anchor(name)` 创建 a 标签指向一个锚点.  
`.link(url)` 创建 a 标签指向一个链接.

### Object 对象方法

`Object.create()` 创建对象.  
`Object.defineProperty()` 修改对象的一个属性.  
`Object.defineProperties()` 修改对象的多个属性.  
`Object.getOwnPropertyDescriptor()` 返回对象的一个属性.  
`Object.getOwnPropertyDescriptors()` 返回对象的多个属性.
`Object.getOwnPropertyNames()` 返回对象属性 key 为数组.  
`Object.getOwnPropertySymbols()` 返回对象属性 key 为数组. [ES6]  
`Object.getPrototypeOf(obj)` 返回对象原型.
`Object.freeze(obj)` 冻结对象(让其不可被修改).

`Object.assign(...obj)` 合并多个对象. [ES6]  
`Object.is()` 是否是一个值. [ES6]

### Function 函数方法

`.apply(thisArg[, argsArray])` 指定 this, 添加参数.  
`.call(thisArg[, arg1[, arg2[, ...]]])` 指定 this, 添加参数.

`.bind(thisArg[, arg1[, arg2[, ...]]])` 创建新的函数

`.isGenerator()`
`.toSource()`
`.toString()`

`arguments` 类似数组, 但不是数组, 可以通过 `var args = Array.prototype.slice.call(arguments)` 将其转为数组.

### 函数

`parseInt(string, radix)` 返回(10进制的)整数型  
`Number.prototype.toString([radix])` 转为其他类型如二进制

### 正则

正则配置: g 全局(匹配所有而不是找到一个就停止), i 忽略大小学, m 多行模式

## Web APIs

`window.btoa()` Base64 编码  
`window.atob()` Base64 解码

#### [WHATWG HTML Living Standard]
`window.setInterval()` 每隔一段时间调用函数. 使用 `clearInterval(intervalID)` 撤销.  
`window.setTimeout()` 延迟调用函数. 使用
`clearTimeout(intervalID)` 撤销.

(起名还真是随意, A to B, B to A...)

## 其他

JavaScript 的深复制讨论: [1](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object) [2](http://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)

函数的括号与闭包, 将函数作为返回值时写 `foo()` 与 `foo` 的区别: https://v2ex.com/t/253164

JavaScript 判断数据类型: https://segmentfault.com/q/1010000000464600 因为 JavaScript 是弱类型, 所以有些特别的类型判断. NaN 值是否可以转为数字, 通过 `isNaN()` 判断.

i++ 的用法: 和 `i = i + 1` 有一些区别, 当我们 `console.log(i = i + 1)` 的时候, 得到的是 i + 1, 但 `console.log(i++)` 的时候, 得到的是 i.

闭包中因 "执行顺序" 与 "复制与引用的区别" 导致的一个坑. 常见的解决方法是在外层包裹一个匿名函数. [详情](https://github.com/iugo/node-lessons/tree/b5610ad5448bc1d97eca6934ba641ec457a1945e/lesson11#%E9%97%AD%E5%8C%85%E7%9A%84%E4%B8%80%E4%B8%AA%E5%9D%91 "Node.js 学习手册中关于闭包中一个坑的说明 - GitHub")

`[].slice.call(arguments,1)` 理解为:
对 `[]` 使用 `slice()` 方法;
对 `slice()` 使用 `call()` 方法, 将 `this` 改为了 `arguments`, 第一个参数改为 `1`.

浮点误差: https://www.zhihu.com/question/20679634

prototype 原型的概念与类相似.

关于写正则时要添加的转义符: `'[0-9]' == /\d/ == '\\d'`

---

## 特点
- 对象
- 原型链
- 单线程

## 语法

delete  
删除(自身的)(可设置的)(没有被直接声明的)属性.  
https://github.com/simongong/js-stackoverflow-highest-votes/blob/master/questions1-10/remove-property-from-javascript-object.md  
可替代: 设置为 undefined 或 null

in  
检查(自身的)(或原型链上)是否有某属性.  
仅自身的替代: Object.prototype.hasOwnProperty.call(obj, propName)

for...in  
遍历(自身的)(和原型链上的)所有可枚举属性.  
仅自身的替代: for...of

### 判断类型

类型判断

`typeof`
undefined, boolean, number, string, function, object, symbol  
null -> object 替代方法 `===`  
array -> object 替代方法 `Array.isArray()`  
NaN -> number 替代方法 `Number.isNaN()` or `Object.is()`

`instanceof`
主要用于检查对象.

## 基础库

## Web API
因为 JavaScript 中一切皆为对象, 所以 Web API 可以说是一个对象的合集. 主要的内置对象有:

- window
- document
- Element/Node
- Event

### Element/Node

Node 是 Element 的原型, 即 Element 拥有 Node 的所有属性与方法.

Element 的集合是 HTMLCollection, Node 的集合是 NodeList. HTMLCollection 是 live 的, 而 NodeList 也可以是 non-live 的(例如 querySelectorAll).

#### 选择/定位
```
getElementById // 根据 id 返回一个合集, 对象只能是 document 而不能是 Element
getElementsByTagName // 根据标签名返回一个合集
getElementsByClassName // 根据 class 属性返回一个合集
getElementsByName // 根据 name 属性返回一个合集

querySelector // 根据 CSS 选择器返回一个 element
querySelectorAll // 根据 CSS 选择器返回一个 NodeList (即 element 的合集)
```

### Event

交互
事件
在某一功能中, 在线程执行的过程中适当的地方增加事件.
事件监听, 当某个事件被触发后, 就能执行一些代码.
事件触发, 强制触发某个事件, 以执行该事件涉及的相关代码.

#### 常用事件

- click // 点击事件
- dblclick // 双击事件
- contextmenu // 鼠标右键事件
- scroll // 页面滚动事件
- afterscriptexecute

其他时间:

- focus // 获得焦点事件
- blur // 失焦事件
- change // 内容被改变事件
- submit // 表单提交事件
- load // 载入事件

Web API 中的基础事件列表: https://developer.mozilla.org/en-US/docs/Web/Events
Web API 中的默认事件处理器列表: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers

#### 自定义事件

```
// 创建事件, 为其命名
var event = new Event('build');

// 监听事件并添加关于事件被触发后的回调函数
elem.addEventListener('build', function (e) { ... }, false);

// 触发事件
elem.dispatchEvent(event);
```

在上面第一步创建事件时, 有一种过时的方法是:

```
var event = document.createEvent('Event');
event.initEvent('build', true, true);
```

[参考](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
