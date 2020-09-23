
// ######### The path module provides utilities for working with file and directory paths. #########


const path = require('path');


// #########The path.basename() method returns the last portion of a path, similar to the Unix basename command. 
console.log(path.basename("C:/wamp64/www/Node/pathModule/index.js"))



// ######The path.extname() method returns the extension of the path
console.log(path.extname('C:/wamp64/www/Node/pathModule/index.js'))



// ######The path.parse() method returns an object whose properties represent significant elements of the path. 
const myPath = path.parse("C:/wamp64/www/Node/pathModule/index.js");
console.log(myPath);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);
console.log(myPath.name)



