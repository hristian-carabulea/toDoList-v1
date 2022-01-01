// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

require("./config");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  // ************* replaced if else with switch below **************//

  /* 
    if (currentDay === 0){
      day = "Sunday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else if (currentDay === 1){
      day = "Monday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else if (currentDay === 2){
      day = "Tuesday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else if (currentDay === 3){
      day = "Wednesday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else if (currentDay === 4){
      day = "Thursday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else if (currentDay === 5){
      day = "Friday";
      // res.send("<h3>Hooray, it is a weekend day!</h3>");
    }
    else {
      day = "Saturday";
      // res.send("<h3>Boo! Today is a weekday. So, I have to go to work again!</h3>")
      // res.write("<h3>Boo! Today is a weekday.</h3>");
      // res.write("<h3>So, I have to go to work again!</h3>");
      // res.send();
      // res.sendFile(__dirname + "/index.html");
    }
     */

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Error"
  }
  res.render('list', {
    kindOfDay: day
  });

}); // end app.get("/", function(req, res)


// app.listen(3000, function() { // for local development
app.listen(process.env.PORT || 3000, function () { // for use with Heroku or other server providers and local server
  console.log("Server is running on port 3000.");
}) // end app.listen