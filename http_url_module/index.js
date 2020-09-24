const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
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
    }else{
        res.writeHead(404,{"Content-type" :"text/html"})
        res.end("<h2>404 Error page not found !!!!</h2>")
    }
});
server.listen(8080,"127.0.0.1",()=>{
    console.log(`Server listening on port 8080`)
});