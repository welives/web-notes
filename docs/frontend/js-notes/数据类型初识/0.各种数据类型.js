'use strict'
console.log(typeof 'hello') // string
console.log(typeof 222) // number
console.log(typeof '222') // string
console.log(typeof false) // boolean
console.log(typeof 'false') // string
console.log(typeof null) // object, 因为在js里,null是一个空指针
console.log(typeof {}) // object
console.log(typeof function() {}) // function

// 变量是数据的代言人
var demoStr = 'hello'
console.log('----------------------')
console.log(typeof demoStr) // string
console.log(typeof (demoStr = 22)) // number

// typeof 总是返回string类型的；typeof()

console.log('++++++++++++++++++++++')
console.time('123')
console.log(typeof typeof 'hello')
console.log(typeof typeof 222)
console.log(typeof typeof '222')
console.log(typeof typeof false)
console.log(typeof typeof 'false')
console.log(typeof typeof null)
console.log(typeof typeof {})
console.log(typeof typeof function() {})
console.timeEnd('123')

console.assert(1 == 1, '打脸了')

var aloneVal = Symbol()
console.log(typeof aloneVal) // symbol 存在的意义，避免多人开发时，变量覆盖
