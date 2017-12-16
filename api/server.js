var app = require('./app');
var port = process.env.PORT || 3000; // PORT=4444 node server.js

var server = app.listen(port, function() {
  console.log('Express server listening on port: '+ port);
});
