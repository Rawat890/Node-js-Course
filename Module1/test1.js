let name = 'Rajiv';
console.log(name)

let lastName ='Rohit'

function add(a,b) {
  console.log('Addition is ', a+b)
  return;
}
function sub(a,b) {
  console.log('Subtraction is ', a-b)
  return;
}
function divide(a,b) {
  console.log('Division is ', a/b)
  return;
}

module.exports={
  lastNameValue:lastName,
  addMethod:add,
  subMethod:sub,
  divideMethod:divide,
}