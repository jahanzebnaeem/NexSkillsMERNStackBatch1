const express = require("express");
const app = express();

app.get("/", function(request, response) {
  // console.log(request);
  response.send("<h1>Hello World</h1>");
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
