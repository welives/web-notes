'use strict'
// function语句的定义方法
function test1(arg1, arg2) {
  console.log('function语句的定义方法:', arg1 + arg2)
}
test1(1, 2)

// 函数直接量的定义方法
var test2 = function(arg1, arg2) {
  console.log('函数直接量的定义方法:', arg1 + arg2)
}
var utility = {
  init: function() {
    console.log('执行')
  },
}
test2(3, 4)
utility.init()

// 构造函数的定义方法
var test3 = new Function('arg1', 'arg2', "console.log('构造函数的定义方法:',arg1+arg2)")
test3(5, 6)
