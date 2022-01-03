// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser"); // in connection with app post
const date = require(__dirname + "/date.js");

// console.log(date());
// const { application } = require("express");
require("./config");
const app = express();
let items = ["Buy food", "Cook food"]; 
let item = "";
let workItems = [];

app.set('view engine', 'ejs'); //use ejs as the view engine. Must be placed under the creation of the express app.

app.use(bodyParser.urlencoded({extended: true})); // in connection with app post

app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date("day");
  let year = date("year");
  // console.log(day);
  res.render('list', { listTitle: day, newListItems: items, copyrightYear: year });
}); // end app.get("/", function(req, res)

app.get("/work", function(req, res){
  let year = date("year");
  // console.log(day);
  res.render("list", {listTitle: "Work List", newListItems: workItems, copyrightYear: year})
});

app.get("/about", function(req, res){
  let year = date("year");
  // console.log(day);
  res.render("about", {copyrightYear: year})
});

app.post("/", function(req, res){
  let item = req.body.newItem; 
  console.log(req.body.list);
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }

}); // end app.post

// app.listen(3000, function() { // for local development
app.listen(process.env.PORT || 3000, function () { // for use with Heroku or other server providers and local server
  console.log("Server is running on port 3000.");
}) // end app.listen