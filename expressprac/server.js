const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(request, response) {
  // console.log(request);
  // response.send("<h1>Hello World</h1>");
  // console.log(__dirname);
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  // console.log(request.body.num1);
  var val1 = Number(request.body.num1);
  var val2 = Number(request.body.num2);

  var result = val1 + val2;
  response.send("The sum is " + result);
});

app.get("/contact", (req, res) => {
  // console.log(request);
  res.send("<h1>Contact me at: jahanzeb.naeem@hotmail.com</h1>");
});

app.get("/about", (req, res) => {
  // console.log(request);
  res.send("<h1>A software engineer.</h1>");
});

app.listen(3000, function() {
  console.log("Server started at port 3000.");
});
