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
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/home.html')).toString();
  htmlPage = addCommonPageElements(htmlPage);
  res.write(htmlPage);
  res.end();
});

function addCommonPageElements(htmlPage){
  var navBarHTML = fs.readFileSync(path.join(__dirname, '/public/nav_bar.html'));
  var commonHeadElements = fs.readFileSync(path.join(__dirname, '/public/common_head_elements.html'));
  htmlPage = htmlPage.replace('INSERT_COMMON_HEAD_ELEMENTS_HERE', commonHeadElements);
  return htmlPage.replace('INSERT_NAV_BAR_HERE', navBarHTML);
}

app.get('/food', function(req, res) {
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/food.html')).toString();
  htmlPage = addCommonPageElements(htmlPage);
  res.write(htmlPage);
  res.end();
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});