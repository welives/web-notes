'use strict'

console.log(typeof null) // object null是一个空的指针
console.log(typeof NULL) // undefined

console.log(undefined * 15) // NaN
// console.log(undefined * aa) // aa is not defined
// console.log(NULL + 15) // NULL is not defined  相当于NULL 这个变量没有找到

var js
console.log(js) // undefined
console.log(typeof undefined) // undefined
console.log(typeof typeof undefined) // string

// null和undefined比较
/*
 * === 相同比较，首先判断是否是同一个类型；不是的话，直接false；
 * ==  比较是否相等；(如果是不一样的类型，会转为相同的类型，然后再进比较)
 */
console.log(null == null) // true
console.log(null == undefined) // true
console.log(undefined == undefined) // true
console.log(undefined === undefined) // true
console.log(null === undefined) // false
console.log(false == 0) // true
console.log(Number('22') == 22) // true

console.log('---------------------------------------')
console.log(null == 1) // false
console.log(null == '123') // false
console.log(null == false) // false
console.log(null == 0) // false
console.log(null == '') // false
console.log(null == NaN) // false

console.log('=======================================')
console.log(undefined == 1) // false
console.log(undefined == '123') // false
console.log(undefined == false) // false
console.log(undefined == 0) // false
console.log(undefined == '') // false
console.log(undefined == NaN) // false

console.log('+++++++++++++++++++++++++++++++++++++++')
// 赋值null的应用场景经常出现在做定时器的时候
var timer = null

var obj = {}
obj.bbb = 'hello'

console.log(obj.aaa) // undefined
console.log(obj.bbb) // hello

// function 返回值 默认是undefined
function demo() {
  return
}
var fdemo = demo()
console.log(fdemo) // undefined
