const os = require('os');

console.log('Platform is - ' ,os.platform())
console.log('Architecture is - ' ,os.arch())
console.log('Home directory is - ' ,os.homedir())
// console.log('Network interface is - ' ,os.networkInterfaces())
console.log('Platform is - ' ,os.totalmem())


const path = require('path');

const fullPath = '/Users/diligentic_mac_2/Desktop/Node-js-Course/Module1/os-fileModule.js';

const extensionOfFile = path.extname(fullPath);
const baseNameOfFile = path.basename(fullPath);

// Break path into object
const parsedPath = path.parse(fullPath);

// Then reformat using format()
const formatOfFile = path.format(parsedPath);
console.log(formatOfFile)

console.log('Base Name of file is - ', baseNameOfFile);
console.log('Extension of file is - ', extensionOfFile);
console.log('Format of file is - ', formatOfFile);
console.log(__dirname)
console.log(__filename)

const fs = require('fs');

let readingPointer1= fs.readFileSync('test.txt', 'utf8');
console.log('Data is -', readingPointer1);

let readingPointer2 = fs.readFileSync('test.txt');
console.log('Data is -', readingPointer2.toString());


fs.writeFileSync('test.txt', 'The new text is adding using write sync')


fs.appendFileSync('test.txt', '\nI am appending new data without overriding previous data');

console.log(fs.existsSync('/Users/diligentic_mac_2/Desktop/Node-js-Course/Module'))
