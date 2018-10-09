var express = require("express");

var app = express.Router();
var burger = require("../models/burger.js");

app.get("/", function(req, res) {
  res.redirect("/burgers");
});

app.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

app.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

app.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
  });
});

module.exports = app;
