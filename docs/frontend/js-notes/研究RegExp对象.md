# RegExp 对象

程序员必备的知识

最起码要能写出常用替换、匹配的正则；实在不行也要能看懂的

## 创建

有两种方法，字面量和构造函数模式

- 字面量

```js
var reg = /\d+/g
console.log(reg.test('789456')) // true
```

- 构造函数

```js
var reg = new RegExp('\\d+', 'g')
console.log(reg.test('1234444456')) // true
console.log(reg.test('asdsa')) // false
```

## 元字符

- 单个字符数字
  - `.`：匹配除换行符以外的任意字符
  - `[a-zA-Z0-9]`与`[^a-zA-Z0-9]`：匹配方括号中的任意字符，前面加`^`是匹配不在方括号中的任意字符
  - `\d`：匹配一个数字字符。等价于`[0-9]`
  - `\D`：匹配一个非数字字符。等价于`[^0-9]`
  - `\w`：匹配字母、数字、下划线。等价于`[A-Za-z0-9_]`
  - `\W`：匹配非字母、数字、下划线。等价于`[^A-Za-z0-9_]`
- 空白字符
  - `\f`：匹配换页符。等价于`\x0c`和`\cL`
  - `\r`：匹配回车符。等价于`\x0d`和`\cM`
  - `\n`：匹配换行符。等价于`\x0a`和`\cJ`
  - `\t`：匹配制表符。等价于`\x09`和`\cI`
  - `\O`：匹配 null 字符
  - `\s`：匹配任何空白字符，包括空格、制表符、换页符等。等价于`[ \f\n\r\t\v]`
  - `\S`：匹配任何非空白字符。等价于`[^ \f\n\r\t\v]`
- 定位符
  - `^`：行首匹配
  - `$`：行尾匹配
  - `\A`：匹配字符串的开始处或行首
  - `\b`：匹配单词边界，词在[]内无效
  - `\B`：匹配非单词边界
  - `G`：匹配当前搜索的开始位置
  - `\Z`：匹配字符串的结束处或行尾
  - `\z`：只匹配字符串结束处
- 限定符
  - `x?`：匹配 0 个或一个 x
  - `x*`：匹配 0 个或者任意多个 x
  - `x+`：匹配一个或者多个
  - `x{m,n}`：匹配 m-n 个 x
- 分组
  - `(?:x)`：匹配 x 但不记录匹配结果（匹配不捕获）
  - `x(?=y)`：当 x 后面接 y 时匹配 x
  - `x(?!y)`：当 x 后不是 y 时匹配 x
- 引用
  - `\1...\9 $1...$9`：返回 9 个在模式匹配期间找到的，最近保存的部分
- 或模式
  - `x|y|z`：匹配 x 或者 y 或者 z

## 修饰符

可以记 img，这样方便记住

- `i`：忽略大小写模式
- `m`：多行匹配
- `g`：全局模式

## 属性

- 实例属性
  - `global`：布尔值，检测是走设置 g 标记
  - `ignoreCase`：布尔值，检测是否设置 i 标记
  - `multiline`：布尔值，检测是否设置了 m 标记
  - `lastIndex`：整数，表示开始搜索下一个匹配项的字符位置，从 0 算起
  - `source`：返回正则表达式的字符串表示,按照字面量形式而非传入构造函数中的字符串模式返回

通过这些属性可以获知一个正则表达式的各方面信息，但却没有多大用处，因为这些信息全都包含在模式声明中

```js
var pattern1 = /\[bc\]at/i
console.log(pattern1.global) // false
console.log(pattern1.ignoreCase) // true
console.log(pattern1.multiline) // false
console.log(pattern1.lastIndex) // 0
console.log(pattern1.source) // \[bc\]at

var pattern2 = new RegExp('\\[bc\\]at', 'i')
console.log(pattern2.global) // false
console.log(pattern2.ignoreCase) // true
console.log(pattern2.multiline) // false
console.log(pattern2.lastIndex) // 0
console.log(pattern2.source) // \[bc\]at
```

尽管第一个模式使用的是字面量，第二个模式使用了`RegExp`构造函数，但它们的`source`属性是相同的。可见， `source`属性保存的是规范形式的字符串，即字面量形式所用的字符串

- 构造函数属性
  - `$_ input`：返回最近一次匹配的字符串
  - `$& lastMatch`：返回最近一次的匹配项
  - `$+ lastParen`：返回最近一次匹配的捕获组
  - \$` leftContext：返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符
  - \$' rightContext：返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符
  - \$\* multiline：检测表达式是否采用多行匹配 m

## 方法

- 实例方法
  - `test`：在字符串中检测模式匹配，返回 true 或 false
  - `exec`：该方法是专门为捕获组而设计的
    - 功能：正则捕获的数据，一个数组
    - 参数：要应用模式匹配的字符串
    - 特性：
      - 使用全局标记`g`；持续查找所有匹配项并返回
      - 不使用全局标记`g`；始终返回第一个匹配项信息
    - 执行的过程
      - 检测字符串参数，获取正则表达式匹配文本
      - 找到匹配文本则返回一个数组
        - 第 0 个元素：与整个模式匹配的字符串
        - 其他元素：与捕获组匹配的字符串
      - 否则返回 null
    - 派生属性
      - `index`：匹配项在字符串中的位置
      - `input`：应用正则表达式的字符串
      - `length`：返回数组元素的个数

```js
var text = 'cat, bat, sat, fat'
var pattern1 = /.at/
var matches1 = pattern1.exec(text)
console.log(matches1.index) // 0
console.log(matches1[0]) // cat
console.log(pattern1.lastIndex) // 0
console.log(matches1)

console.log('------------------------')
var pattern2 = /.at/g
var matches2 = pattern2.exec(text)
console.log(matches2.index) // 0
console.log(matches2[0]) // cat
console.log(pattern2.lastIndex) // 3
console.log(matches2)

console.log('------------------------')
var matches3 = pattern2.exec(text)
console.log(matches3.index) // 5
console.log(matches3[0]) // bat
console.log(pattern2.lastIndex) // 8
console.log(matches3)
```

第一个模式`pattern1`不是全局模式，因此每次调用`exec()`返回的都是第一个匹配项 **cat** 。而第二个模式 `pattern2`是全局模式，因此每次调用`exec()`都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。此外，还应该注意模式的`lastIndex`属性的变化情况。在全局匹配模式下，`lastIndex`的值在每次调用`exec()`后都会增加，而在非全局模式下则始终保持不变

> IE 的 JavaScript 实现在`lastIndex`属性上存在偏差，即使在非全局模式下，`lastIndex`属性每次也会变化

- 字符串方法
  - `match`：找到一个或者多个正则表达式的匹配
  - `replace`：替换与正则表达式匹配的子串
  - `search`：检索与正则表达式匹配的值
  - `split`：把字符串分割为字符串数组
