
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('Your answer is ' + result);
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req, res) => {

  var height = parseFloat(req.body.h);
  var weight = parseFloat(req.body.w);

  var bmi = (weight / Math.pow(height, 2)).toFixed(1);
  res.send("Your BMI is " + bmi);

})

app.listen(port, () => {
  console.log('Listening at port 3000')
})
