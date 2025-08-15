const figlet = require('figlet');

figlet('Hey Rohan Rawat', function(err,data) {
  if (err) {
    console.log('Something went wrong...')
    return;
  }
  console.log(data)
})