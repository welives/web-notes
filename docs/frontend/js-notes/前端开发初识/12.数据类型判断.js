'use strict'
// 数据类型的判断
console.log('-------下面是typeof判断')
console.log(typeof '22') // string
console.log(typeof 22) // number
console.log(typeof true) // boolean

console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof function() {}) // function
console.log(typeof Symbol) // function
console.log(typeof Symbol()) // symbol

// 区别
console.log('-------下面是区别')
console.log(typeof 'undefined') // string
console.log(typeof 'true') // string
console.log(typeof 'null') // string
console.log(typeof '{}') // string
console.log(typeof 'function(){}') // string
console.log(typeof 'Symbol()') // string
