const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  // res.send("Hi");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  const apiKey = "695ca5f03b96757465f1d38174759d66";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response) {
    // console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      const tempLocation = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const weatherURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

      res.write("<p>Weather description of " + cityName + " is " + weatherDescription + "</p>")
      res.write("<h1>The current weather of " + cityName + " is " + tempLocation + "</h1>");
      res.write("<img src=" + weatherURL + " >");
      res.send();
    });
  });
});

app.listen(port, function (){
  console.log("Server activated on port " + port);
});
