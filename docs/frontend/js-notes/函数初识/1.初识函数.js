'use strict'
// 基本的语法
function name(argument1, argument2) {
  /*一堆的代码*/
}
//下面是函数的一个实例，
function diff1(a, b) {
  console.log(a - b)
}
diff1(10, 5) //输出5
diff1(20, 2) //输出18

console.log('-------------------------')
function diff2(a, b) {
  return a - b
  console.log('测试的代码') // 这条语句，永远不会执行；
}
// diffNumber用来接收函数的返回值，如果return了一个值，但是外部没有变量去接收它，就失去了return的意义了
var diffNumber = diff2(10, 5)
console.log(diffNumber)

console.log('---------------------------')
function diff3(a, b) {
  if (a > b) {
    return a - b
  } else {
    return b - a
  }
}
var diffNumber1 = diff3(10, 5)
var diffNumber2 = diff3(5, 10)
console.log(diffNumber1) // 5
console.log(diffNumber2) // 5

console.log('-----------------------------')
function testReturn(arg) {
  console.log('arg的值是：' + arg)
  //如果传的值是空字符串，参数不对，没必要处理了，直接return停止函数了，可以优化性能
  if (arg === '') {
    return
  }
  console.log('一些处理参数的代码')
}
testReturn('')
