'use strict'

var num = 2

console.log(num) // number 实例
console.log(num.__proto__) // Number 类

var str = 'haha'
console.log(str) // string 实例
console.log(str.__proto__) // String 类

/*判断是否一致*/
console.log(num.__proto__.__proto__ === str.__proto__.__proto__) // true

// 万物皆对象,并不等于只有一个对象类型的
// Number / String / Object / Boolean

// 1、字面量的创建方式；推荐的方式
var o = {
  name: 'jandan',
  say: 'hello',
}
console.log(o)

var oDemo = {}
if (!oDemo.flagVal) {
  oDemo.flagVal = 'test'
}
oDemo.name = 'jandan'
oDemo.say = 'hello world'
console.log(oDemo.flagVal) // test
console.log(oDemo)

// new
var demo1 = new Object() // 不推荐的使用方法
demo1.haha = 'hhhhhhhhhhhhhhhhh'
console.log(demo1)

function Test(opt) {}
var testVal = Test({ a: '', b: '' })

// array
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr) // 编程语言里，index是以0为开始的
console.log('第一位,arr[0]', arr[0])
console.log(arr[1])
console.log(arr.length)
