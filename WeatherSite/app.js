const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  // const url = "https://api.openweathermap.org/data/2.5/weather?q=Pakistan&appid=695ca5f03b96757465f1d38174759d66&units=metric";
  // https.get(url, function(response) {
  //   console.log(response.statusCode);
  //   response.on("data", function(data) {
  //     // console.log(data);
  //     var weatherData = JSON.parse(data);
  //     // console.log(weatherData);
  //     var temp = weatherData.main.temp;
  //     console.log(temp);
  //   });
  // });
  // console.log("Working...");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "695ca5f03b96757465f1d38174759d66";
  const unit = "metric";
  // console.log(query);
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    // console.log(response.statusCode);
    response.on("data", function(data) {
      // console.log(data);
      var weatherData = JSON.parse(data);
      // console.log(weatherData);
      var temp = weatherData.main.temp;
      // console.log(temp);
    });
  });
});


app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000.");
});
