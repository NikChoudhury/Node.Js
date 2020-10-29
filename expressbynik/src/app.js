
const express = require('express');
const app = express();
const port = 8000;

// app.get(route, callback)
app.get("/",(req, res)=>{
    res.send("<h1>Hello Form the Express Side !!! </h1>");
});
app.get("/about",(req, res)=>{
    res.send("<h1>Hello Form the about Side !!! </h1>");
});



app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
})