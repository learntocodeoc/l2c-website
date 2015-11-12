process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Imports
var express = require('./config/express');
var mongoose = require('./config/mongoose');

// Create Application Object
var app = express();

// Routes
app.get('/', function(req, res){
res.render('index');
});

app.get('/form', function(req, res){
  res.render('form');
})

// Start the application
var port = 3000;
app.listen(port);
console.log('Welcome to Learn To Code OC Server');
console.log('Application Server Listening on port ' + port);

module.exports = app;
