'use strict'
// 变量的类型改变
let china = '中国' // string类型里的一个份子
console.log(china, typeof china)

china = 22
console.log(china, typeof china)

china = true
console.log(china, typeof china)

china = {}
console.log(china, typeof china)

// 不推荐一个变量，用于多种用途
let total = 0 // 用来储存金额统计
let timer = null // 用来储存定时器
