对象类型是 JavaScript 语言的基础，JS 中万物皆对象，我们看到的大多数引用类型值都是`Object`类型的实例，而且`Object`也是 JS 中用得最多的一个数据类型，`Object`类型的数据是储存和传输数据的最佳选择

## 创建的方式

- 构造函数模式

```js
var person1 = new Object()
person.name = 'jandan'
person.age = '30'
```

- 字面量方式

对象字面量是对象定义的一种简写形式，目的在于简化创建包含大量属性的对象的过程

```js
var person2 = {
  name: 'jandan',
  age: '30',
}
```

> 以`key:value`的方式定义，属性间用`,`来隔开，因为 age 是这个对象的最后一个属性。在最后一个属性后面添加逗号，会在 IE7 及更早版本 中导致错误，在使用 webStorm 之类的语法检测 IDE 中也会提示报错

```js
var person3 = {} //与 与 new Object() 相同
person.name = 'jandan'
person.age = '30'
```

**对象字面量语法，因为这种语法要求的代码量少，而且能够给人封装数据的感觉。实际上，对象字面量也是向函数传递大量可选参数的首选方式**

就像上面的 person2，传参的时候，直接传 person2 进去，阅读的时候，一眼就看清楚穿进去的是什么

## 函数的调用

- 点表示法(这也是很多面向对象语言中通用的语法)
- 方括号表示法(使用方括号表示法来访问对象的属性，在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中)

```js
console.log(person2['name']) // jandan
console.log(person2.name) // jandan"
```

> 从功能上看，这两种访问对象属性的方法没有任何区别。**方括号语法的主要优点是可以通过变量来访问属性**

```js
var propertyName = 'name'
console.log(person2[propertyName]) // jandan
```

> 除非必须使用变量来访问属性，否则我们建议使用点表示法

## 常用的方法

- **toString**
  - 返回所有实例所属类的信息，通常用这个检测数据类型
  ```js
  Object.prototype.toString.call()
  ```
- **hasOwnProperty**
  - 检测某个属性是否是这个对象的私有属性
- **in**
  - 检测摸个属性是否是这个对象的属性
- **properyIsEnumerable**
  - 对象的某个属性是否为可枚举类型的
