var express = require('express');
var app = express();
var db = require('./data/db');

var MateRouter = require('./api/routes/MateRouter');
app.use('/mate', MateRouter);

module.exports = app;
