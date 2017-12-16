var express = require('express');
var app = express();
var db = require('./data/db');

var UserRouter = require('./api/routes/UserRouter');
app.use('/users', UserRouter);

module.exports = app;
