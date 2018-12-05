var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/page1', function(req, res, next) {
  const locals = {
    title: 'Page 1',
    templateName: 'pages/page1',
    testVar: 'Page 1 test var text'
  };
  return res.render('layout', locals);
});

app.get('/page2', function(req, res, next) {
  const locals = {
    title: 'Page 2',
    templateName: 'pages/page2',
    testVar: 'Page 2 test var text'
  };
  return res.render('layout', locals);
});

app.listen(process.env.PORT || 3000);
