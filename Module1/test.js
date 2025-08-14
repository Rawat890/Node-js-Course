const { lastNameValue, addMethod, subMethod } = require("./test1")

console.log('Hello Node js')

function sayHello(name) {
  console.log(`Hello ${name}`)
}

function nodeModule() {
  console.log(`There is no window object and it uses the global object`)
}

sayHello('Rohit Sharma')
nodeModule()

// console.log(global)
let name = 'Rajiv';
console.log(name)
console.log(lastNameValue)
console.log(addMethod(10,89))
console.log(subMethod(10,19))