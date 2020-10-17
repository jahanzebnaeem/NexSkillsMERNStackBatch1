const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us19.api.mailchimp.com/3.0/lists/4a59ec5636";
  const options = {
    method: "POST",
    auth: "jahanzeb1:c982d0bbef11a2879fe241e7de7309b4-us19"
  }

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      // res.send("You have successfully subscribed");
      res.sendFile(__dirname + "/success.html")
    } else {
      // res.send("Something went wrong, please try again later.");
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});


// App key
// c982d0bbef11a2879fe241e7de7309b4-us19

// List Id
// 4a59ec5636
