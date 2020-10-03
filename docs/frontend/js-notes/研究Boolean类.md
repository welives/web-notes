# Boolean 类型

首先输出查看一下结构

```js
console.dir(new Boolean())
```

打开 chrome 控制台可以看到如下结构

```js
Boolean
__proto__: Boolean
constructor: ƒ Boolean()
toString: ƒ toString()
valueOf: ƒ valueOf()
__proto__: Object
[[PrimitiveValue]]: false
[[PrimitiveValue]]: false
```

这个类型只有 2 个方法，并且都是重写 Object 的方法

- `toString()`
- `valueOf()`

`Boolean`对象在实际使用中，用处并不大

因为 boolean 数据就是用来判断真假的，而 Boolean 对象是做为对象来用的，**任何非空对象转换的时候，都是 true**

```js
var falseObject = new Boolean(false)
var result = falseObject && true
console.log(falseObject, result) //true,因为falseObject会被转为true；因为是当作对象来解析的；
var falseValue = false
result = falseValue && true
console.log(falseValue, result) //false

console.log(typeof falseObject) //object
console.log(typeof falseValue) //boolean
console.log(falseObject instanceof Boolean) //true
console.log(falseValue instanceof Boolean) //false
```

理解基本类型的布尔值与 Boolean 对象之间的区别非常重要。当然，**我们的建议是永远不要使用 Boolean 对象**
