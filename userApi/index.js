// First API //


const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    // Read UserApi With Synchronous Method //
    const jsonData =fs.readFileSync("userApi.json","UTF-8");
    const jsData = JSON.parse(jsonData);
    // ************** //

    if(req.url == "/"){
        res.writeHead(200,{"Content-type" :"text/html"})
        res.end(`<h1>Home Side ..... !!!!!</h1>
        <h2>/about</h2>
        <h2>/profile</h2>`)
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-type" :"text/html"})
        res.end(`<h1>about Side ..... !!!!!</h1>`)
    }else if (req.url == "/profile") {
        res.writeHead(200,{"Content-type" :"text/html"})
        res.end(`<h1>Hello this is Nik !!</h1>`);
    }else if (req.url == "/userApi") {
        res.writeHead(200,{"Content-type" :"application/json"})

        // Read UserApi With Asynchronous Method //
        // fs.readFile("userApi.json","UTF-8",(error,data)=>{
            // console.log(data);
            // res.write(data);
            // const objData = JSON.parse(data);
            // res.write(objData[0].firstname);
            // res.write(`<h1>This is User Api Side!!</h1>`)
            // res.end();
        // })
        // ****************************//

        console.log(`${jsData[0].address.PS}`)
        res.write(`${jsData[0].firstname}\n`);
        res.write(`${jsData[0].address.PS}\n`)
        res.write(`${jsData[1].firstname}\n`);
        res.write(`${jsData[1].address.PS}\n`)
        res.write(`${jsData[2].firstname}\n`);
        res.write(`${jsData[2].address.PS}\n`)
        // res.write(jsonData)
        res.end();
    }else{
        res.writeHead(404,{"Content-type" :"text/html"})
        res.end("<h2>404 Error page not found !!!!</h2>")
    }
});
server.listen(8080,"127.0.0.1",()=>{
    console.log(`Server listening on port 8080`)
});