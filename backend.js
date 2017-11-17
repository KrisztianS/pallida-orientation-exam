'use strict'

var express = require('express');
var app = express();

app.use(express.json());
app.use('./', express.static('./'));
express.json.type = "application/json";

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
    console.log("Connection established"); 
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/plates.html')
})

app.get('/search', function(req, res){
    if (req.query.length > 7) {
        res.send({ "result": "error", "message": "invalid input" })
    } else res.send({"result": "ok"})
    res.sendFile(__dirname + '/plates.html')
})

app.get('/search/:brand', function(req, res){
    conn.query("SELECT * FROM licence_plates WHERE car_brand ="+ req.params.brand + ";", function(rows){
        var carlist = []
        rows.forEach(function(rows){
            carlist.push(rows.car_brand)
        })
        res.json(carlist)
    res.send(carlist);
    })
})

app.listen(8080)