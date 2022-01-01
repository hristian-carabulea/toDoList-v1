// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser"); // in connection with app post
require("./config");
const app = express();
var items = []; 
var item = "";


app.set('view engine', 'ejs'); //use ejs as the view engine. Must be placed under the creation of the express app.

app.use(bodyParser.urlencoded({extended: true})); // in connection with app post

app.get("/", function (req, res) {

  var day = "";
  var year = "";
  var today  = new Date();

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
  var options = { 
    weekday: 'long', 
    day: 'numeric',
    month: 'long'
  };

  day = today.toLocaleDateString("en-US", options);

  var options = { 
    year: 'numeric'
  };

  year = today.toLocaleDateString("en-US", options);
  // console.log(day);

  res.render('list', {
    kindOfDay: day,
    kindOfYear: year,
    listOfItems: items
  });

}); // end app.get("/", function(req, res)

app.post("/", function(req, res){

  item = req.body.newItem; 
  
  items.push(item);

  console.log(item);
  res.redirect("/");

  // request.write(newItem);
  // request.end();

}); // end app.post


// app.listen(3000, function() { // for local development
app.listen(process.env.PORT || 3000, function () { // for use with Heroku or other server providers and local server
  console.log("Server is running on port 3000.");
}) // end app.listen