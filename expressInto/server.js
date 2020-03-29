
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  // res.send("<h1>Hello Batch 1 MERN Stack</h1>");
  // console.log(__dirname + "/index.html");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  // console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The sum on the entered number is : " + result);
});

app.listen(3000, function() {
  console.log("Server started at port 3000");
});
