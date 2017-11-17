'use strict'

var express = require('express');
var app = express();

app.use(express.json())
app.use('/assets', express.static('../assets'))
express.json.type = "application/json"

var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "Krisztian",
  password: "12345",
  database: 'exam'
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to the database");
  } else {
  console.log("Connection established"); }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/plates.html');  
})

app.listen(8080)