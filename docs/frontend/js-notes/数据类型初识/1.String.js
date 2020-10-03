'use strict'
//string 单引号'' 或 双引号"" 包裹的内容
console.log(typeof '22')
console.log(typeof '2')
console.log(typeof '')
console.log(typeof 'false')
console.log(typeof 'null')

// length,一般作为用户输入名称的长度限制；需要注意双字符精准度的问题
var str = '123123123123123123123123123123'
var chinaStr = '哈喽' // 双字节，不精确 4字节；
console.log(str.length) // 30
console.log(chinaStr.length) // 2

// 字符串创建的原理
var str1 = '12345' // 把"12345"这个字符串赋值给str1这个变量
str1 = 'abcd' //把"abcd"这个字符串赋值给str1这个变量
// 并不是把"12345"修改为"abcd"然后赋值给str1

console.log(str1) // abcd
console.log("1\"23'4\n56'78")

// toString方法
console.log(typeof 22)
console.log(typeof (22).toString())
var testStr = 22 + '' //隐式调用toString方法
console.log(typeof 22 + '') // number
console.log(typeof testStr)

// eval()
console.log('00000000000000000')
console.log(eval('22+12')) // "22+12" -> 22+12 ->34

console.log('------------------')
console.log(typeof (22 + '')) // string 22 -> "22"
console.log(typeof +'22') // number "22" -> 22 单目运算符+
console.log([1, 2, 3, 4] + '') // 1,2,3,4

console.log('===================')
console.log('1.1' + 1.1) // 1.11.1
console.log(+'1.1' + 1.1) // 2.2
console.log(+'1.1' + +1.1) // 2.2
