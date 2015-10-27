var express = require('express');
var app = express();
var applicants = require('./routes/applicants.js');

app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/public'));
app.use('/applicants', applicants);

// Default home route
app.get('/', function(req, res){
res.render('index');
});

// Start the application
app.listen(3000);
console.log('Welcome to Learn To Code OC Server');
console.log('Application Server Listening on port 3000');
