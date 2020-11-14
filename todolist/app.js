const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// var item = "";
let items = ["Buy Vegitables", "Cook Vegitables", "Eat Vegitables"];
let workItems = [];

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  // let toDay = new Date();
  // let options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long"
  // };
  //
  // let displayMyDate = toDay.toLocaleDateString("en-PK", options);
  let displayMyDate = date.getDate();
  res.render("list", {listTitle: displayMyDate, newItems: items});
});

app.post("/", function(req, res) {
  // console.log(req.body);

  let item = req.body.newList;
  // console.log(item);

  if (req.body.item === "Work") {
    workItems.push(item);
    // res.render("list", {newItems: items});
    res.redirect("work");
  } else {
    items.push(item);
    // res.render("list", {newItems: items});
    res.redirect("/");
  }
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", newItems: workItems});
});

// app.post("/work", function(req, res) {
//   let item = req.body.newList;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port 3000");
});
