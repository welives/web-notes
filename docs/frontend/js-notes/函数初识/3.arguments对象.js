function test1() {
  console.log(arguments)
}
test1(1, 2) //[1,2]
test1(1, 2, 3, 4, 5) //[1, 2, 3, 4, 5]

function test2() {
  console.log(arguments[0], arguments[1], arguments[2])
}
test2(1, 2)

function test3() {
  console.log(arguments.length)
}
test3(1, 2, 3, 4, 5) // 5

function test4() {
  console.log(arguments.callee)
}
test4(1, 2, 3, 4, 5) // 输出函数本身

console.log('--------------------------')
function callerDemo() {
  if (arguments.callee.caller) {
    console.log(arguments.callee.caller) // 当前正在执行的函数的调用者
    console.log(callerDemo.caller.toString())
  } else {
    console.log('this is a top function')
  }
}
function handleCaller() {
  callerDemo()
}
handleCaller()

function calleeDemo() {
  console.log(arguments.callee)
}
calleeDemo() // [Function: calleeDemo]
