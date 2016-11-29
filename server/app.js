var db = require('./db');
var express = require('express');
var path = require('path');

var morgan = require('morgan');
var parser = require('body-parser'); 
var router = require('./routes.js');
var app = express();
module.exports.app = app;

app.set('port',process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(parser.json());
app.use(router);
app.use(express.static(path.join(__dirname, '/../client')));


if(!module.parent) {
  app.listen(app.get('port'));
  console.log('PassLock Listening on ', app.get('port'));
}

