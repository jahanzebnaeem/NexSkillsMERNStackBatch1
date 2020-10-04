const express = require("express");
const port = 3000;

const app = express();

app.get("/", function (req, res) {
  res.send("Hi");
});

app.listen(port, function (){
  console.log("Server activated on port " + port);
});
