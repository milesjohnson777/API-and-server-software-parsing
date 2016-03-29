var express = require("express");
var app = express();
var path = require("path");
var db = require('../modules/db.js');
var bodyParser = require("body-parser");
var index = require('../modules/index.js');

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening");
});

module.exports = app;
