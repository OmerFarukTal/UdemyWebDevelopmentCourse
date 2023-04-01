//jshint esversion:6

const express = require("express");
const app = express();

const bodyParser = require("body-parser"); // Will help us to handle sended forms
app.use(bodyParser.urlencoded({extended: true})); // Introduce bodyParser to express


// /bmicalculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var w = Number(req.body.weight);
    var h = Number(req.body.height);

    var bmi = w / (h*h);
    res.send("Your bmi index is = " + bmi);

});


// Route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); // __dirname is pwd
});

app.post("/", function (req, res) { // To get submitted form
    //console.log(req.body.num1); // With parse we able to get num1

    var num1 = Number(req.body.num1); // These are text
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("<h1>"+result+"</h1>")
});


// Listen
app.listen(3000, function () {
    console.log("Server has started!");
});