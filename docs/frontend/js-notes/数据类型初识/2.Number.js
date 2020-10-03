'use strict'
//! 正数，负数，零，NaN都是属于Number
//! NaN -> Not a Number不是一个数，但是属于数字类型
console.log(typeof 222)
console.log(typeof 222.22)
console.log(typeof -10)
console.log(typeof -10.34)
console.log(typeof 0)
console.log(typeof -0)

//* NaN
console.log(22 * 'aa') // NaN
console.log(typeof (22 * 'aa')) // number
console.log(22 == 22) // true
console.log(22 * 'aa' == 22 * 'bb') // false
console.log(22 * 'aa' == 22) // false
console.log(NaN == NaN) // false 自己和自己都不相等，因为NaN代表的不是一个数，属于一个集合的统称

//* isNaN
console.log(isNaN(22 * 'aa')) // true
console.log(isNaN(22)) // false

// number的转换方法；别的数据类型转为数字类型(不一定是字符串)
/*
 * 转为数字的方式
 * +"22"   字符串转为数字；
 * "22"-0
 * Number()
 * parseInt()
 * parseFloat()
 */
console.log('------------------------')
console.log(+'22') // 隐式
console.log(Number('22')) // 显式
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number(null)) // 0
console.log(Number('')) // 0
console.log(Number(undefined)) // NaN
console.log(Number({})) // NaN
console.log(Number('22.22'))
console.log(Number('22.22a')) // NaN
console.log(Number('0x5a3')) // 1443

console.log(parseInt('22.22a')) // 22
console.log(parseFloat('22.22a222')) // 22.22
console.log(parseFloat('22.22.222')) // 22.22

console.log(13 % 10) // 3
console.log(5 % 3) // 2

var time = 623648364569346563463 // time单位是秒；转为X分X秒
var minis = parseInt(time / 60) // 得到 分钟
var second = time % 60
var targetVal = minis + '分' + second + '秒'
console.log('minis: ' + minis + ' second: ' + second)
console.log(targetVal)

console.log('--------------------------')
console.log('22' - 1)
console.log('22' - 0)
