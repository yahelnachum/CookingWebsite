// Author Yahel Nachum

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  var navBarHTML = fs.readFileSync(path.join(__dirname, '/public/nav_bar.html'));
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/home.html')).toString();
  htmlPage = htmlPage.replace('INSERT_NAV_BAR_HERE', navBarHTML);
  res.write(htmlPage);
  res.end();
});

app.get('/recipes', function(req, res) {
  var navBarHTML = fs.readFileSync(path.join(__dirname, '/public/nav_bar.html'));
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/recipes.html')).toString();
  htmlPage = htmlPage.replace('INSERT_NAV_BAR_HERE', navBarHTML);
  res.write(htmlPage);
  res.end();
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});