var express = require('express');
var app = express();

/* GET home page. */
app.get('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = app;
