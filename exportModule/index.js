// For a single Function or variable
// const add = require('./module.js');
// console.log(add(5,6));


// ########## For Multiple Function or varibale #########
// const myModule = require('./module');
// console.log(myModule);
// console.log(myModule.add(50,20));
// console.log(myModule.sub(50,30));
// console.log(myModule.mult(50,20));
// console.log(myModule.name);

            // or
const {add,mult,sub, name} = require('./module');
console.log(add(50,40));
console.log(sub(50,40));
console.log(mult(500,40));
console.log(name)

