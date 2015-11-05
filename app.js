var express = require('express');
var mongoose = require('./config/mongoose');
var applicants = require('./routes/applicants.js');

var app = express();

app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/public'));
app.use('/applicants', applicants);

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
