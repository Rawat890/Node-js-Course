
1.) What is Node js ?
Node js is an open source javascript runtime enviroment that allows us to run javascript in our local environmet indtead of in browser console
Javascript runtime build on the chrome v8 engine that is js running on server in runtime
C++ code  + V8 engine = Node.exe
Ryan Dahl developed the Node js

Features of Node js->
1. Superfasy and Highly scalable
2. Based on javascript
3. Consistent and clean code base
4. Huge community support
5. Build on V8 engine, that compiles code directly to native machine code , resulting in the faster execution
6. Single threaded-> even it is, but it allows us to handle multiple requests efficiently, by running concurrenltly without blocking them
7. Asynchronous
8. No buffering - process data in chunks and do not buffer the data, leading to faster data processing and reduced memory consumption


2.) Paypal adapted node js system from the Java system, So they transforned syste from java to ndoe js 
The system was build twice as faster in java and lesser 33% code and with fewer people as well as performed well in 2013

3.) There is no window object in the node

4.) Node js is modular based system , i.e. all vars and functions are inside the file scope

5.) What is modularity in node js ?
Modularity refers to the practice of organizing the code into self-contained , independednt units called modules. Each. module encapsulates specific functionality and can be reused across different part of the application.
Key aspects of modularity in Node.js:
(a) Encapsulation:
Modules prevent global namespace pollution by keeping variables and functions defined within them private by default. They are not accessible outside the module unless explicitly exported.
(b) Reusability:
Modules can export functions, objects, or values, making them available for import and use in other modules, promoting code reuse and reducing redundancy.
(c) Organization:
Modularity allows breaking down large applications into smaller, manageable files, making the codebase easier to understand, navigate, and maintain.
(d) Maintainability:
Changes or updates to a specific functionality can be isolated within its corresponding module, minimizing the impact on other parts of the application and simplifying debugging.
(e) Module Systems:
Node.js primarily supports two module systems:
CommonJS: The traditional module system in Node.js, using require() for importing and module.exports or exports for exporting.
ES Modules (ECMAScript Modules): The standard JavaScript module system, using import and export statements

6.) fs - module that is used to play with files in the computer system. 
fs returns a buffer unless an encoding is applied in order to convert that buffer to readable strings

7.) writeSync overrides the previous data with new data