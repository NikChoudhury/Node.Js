
//Node JS Operating System(os) Module


const os = require('os');



// ###Returns the operating system CPU architecture for which the Node.js binary was compiled.
//Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
console.log(os.arch());

// console.log(os.constants);


// ### Returns the amount of free system memory in bytes as an integer.
console.log(os.freemem());

const freeMemory = os.freemem();
// convert to GB
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);

// ##### Returns the host name of the operating system as a string.
console.log(os.hostname());

// ##### Returns the string path of the current user's home directory.
console.log(os.homedir());


// ### Returns an object containing network interfaces that have been assigned a network address.
// console.log(os.networkInterfaces());

const network = JSON.stringify(os.networkInterfaces(), null,2);

// console.log(network);



// #### Returns the operating system's default directory for temporary files as a string
console.log(os.tmpdir());


// #### Returns information about the currently effective user. 
const userInfo = os.userInfo();
console.log(userInfo)
console.log(userInfo.username);







  



