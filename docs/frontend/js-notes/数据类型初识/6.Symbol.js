'use strict'
let aloneVal = Symbol() // 注意不要用new来生成new；即时在ES5中，除了使用自己定义构造函数外，也不推荐加new；
console.log(typeof aloneVal)

// Symbol里面的参数，是描述使用的；仅仅是为了控制输出时候方便识别，没有别的用途了
const s1 = Symbol('foo')
const s2 = Symbol('bar')
console.log(s1, s2) // Symbol(foo) Symbol(bar)

// 和NaN一样，连自己都不等于自己，因为里面的参数只是一个描述
console.log(Symbol('foo') == Symbol('foo')) // false
console.log(Symbol('') == Symbol('')) // false
console.log(Symbol() == Symbol()) // false
const foo = Symbol()
const bar = Symbol()
const symbolVal = Symbol('11')
console.log(typeof foo, typeof bar) // symbol symbol
console.log(typeof foo === 'symbol') // true
console.log(typeof bar === 'symbol') // true
console.log(bar === bar) // true 当然如果用变量储存，俩个变量是相等的，但这并不说明2个相同Symbol值是相同的
console.log(bar === foo) // false
console.log(symbolVal) // Symbol(11)

// Symbol不可以进行运算，不能转为数值，但是可以转换为字符串和布尔值
const flag = Symbol('flag')
// console.log(flag + '') // 报错, 不能运算
console.log(flag.toString() + 'one', String(flag) + 'two') // Symbol(flag)one Symbol(flag)two
console.log(Boolean(flag), typeof Boolean(flag)) // true 'boolean'
// console.log(Number(flag)) // 报错, 不能转为数值

// 作为属性名的Symbol
const aaa = Symbol('aaa')
const bbb = Symbol('bbb')
let obj = {}
obj[aaa] = 'aaa'
obj[bbb] = 'bbb'

console.log(JSON.stringify(obj)) // {}
console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(aaa), Symbol(bbb) ]
