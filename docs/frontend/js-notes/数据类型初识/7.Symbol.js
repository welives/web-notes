'use strict'
var validateId = {} // 用来验证身份证的
validateId.age = 1900
console.log(validateId.age) // 1900

validateId.age = 1940
console.log(validateId.age) // 1940

// 模块内部的
validateId.demo1 = Symbol()
console.log(validateId.demo1) // Symbol()

// 外部的
validateId.demo1 = 1900
console.log(validateId.demo1) // 1900

var aaa = Symbol('a')
var bbb = Symbol('b')
console.log(aaa)
console.log(bbb)
console.log(aaa == bbb) // false
console.log(Symbol() == Symbol()) // false

var age1 = 2
var age2 = 2
console.log(age1, age2)
console.log(age1 == age2) // true

// 模块/插件里面的
var age = Symbol('age')
validateId[age] = 222

validateId[Symbol('age')] = 333

validateId.aaa = 'aaa'
validateId.bbb = 'bbb'

console.log(validateId)
