const fs = require("fs");
const http = require("http");
const url = require("url");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  // Convert from Kelvin to Celsius
  let celsiusTemp = (orgVal.main.temp - 273.15).toFixed(2);
  let celsiusTempMin = (orgVal.main.temp_min - 273.15).toFixed(2);
  let celsiusTempMax = (orgVal.main.temp_max - 273.15).toFixed(2);
  
  let tempurature = tempVal.replace("{%tempval%}", celsiusTemp);
  tempurature = tempurature.replace("{%tempmin%}", celsiusTempMin);
  tempurature = tempurature.replace("{%tempmax%}", celsiusTempMax);
  tempurature = tempurature.replace("{%location%}", orgVal.name);
  tempurature = tempurature.replace("{%country%}", orgVal.sys.country);
  return tempurature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    console.log(req.url);
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=50d4e750303338a0e2f6bac02da6d610"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk); //JSON DATA TO Oject Data
        const arrData = [objData]; //Oject to Array of an Object

        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        // console.log(realTimeData);
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(realTimeData);
        // console.log(arrData[0].main.temp);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
        // console.log('end');
      });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h2>404 Error page not found !!!!</h2>");
  }
});
server.listen(8080, "127.0.0.1", () => {
  console.log(`Server listening on port 8080`);
});
