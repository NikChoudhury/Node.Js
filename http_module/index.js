// ####### Node.js has a built-in module called HTTP, which allows Node.js 
// to transfer data over the Hyper Text Transfer Protocol (HTTP).

const http = require('http');

// The function passed into the http.createServer() method, 
// will be executed when someone tries to access the computer on port 8000.
const server = http.createServer((req,res)=>{
    res.write(`<h1>Hellow World</h1>`);
    res.end('Hello from the other side');
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(`Your IP address is ${ip} and your source port is ${port}.`);

})
server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening to the port no 8000')
});

