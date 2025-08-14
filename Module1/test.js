console.log('Hello Node js')

function sayHello(name) {
  console.log(`Hello ${name}`)
}

function nodeModule() {
  console.log(`There is no window object and it uses the global object`)
}

sayHello('Rohit Sharma')
nodeModule()

console.log(global)