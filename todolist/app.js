const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// var item = "";
let items = ["Buy Vegitables", "Cook Vegitables", "Eat Vegitables"];

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  let toDay = new Date();
  // res.write("<h1>" + toDay + "</h1>");
  // res.write("This is today's date");
  // res.send();
  // res.sendFile(__dirname + "/index.html");
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long"
  };

  let displayMyDate = toDay.toLocaleDateString("en-PK", options);
  // var currentDay = toDay.getDay();
  // var day = "";
  //
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is equal to: " + currentDay);
  // }

  // console.log(day);

  res.render("list", {displayDay: displayMyDate, newItems: items});
});

app.post("/", function(req, res) {
  let item = req.body.newList;
  // console.log(item);

  items.push(item);
  // res.render("list", {newItems: items});
  res.redirect("/");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port 3000");
});
