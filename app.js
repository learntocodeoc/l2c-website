var express = require('express');
var app = express();
var applicants = require('./routes/applicants.js');

app.set('view engine', 'jade');

app.use('/', express.static(__dirname + '/public'));


// Default home route
app.get('/', function(req, res){
res.render('index');
});

app.use(express.static('public'));






// Start the application
app.listen(3000);
console.log('Welcome to Learn To Code OC Server');
console.log('Application Server Listening on port 3000');
