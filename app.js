var express = require('express');
var app = express();
var applicants = require('./routes/applicants.js')


// Default home route
app.get('/', function(req, res){
	res.send('default home directory');
});

app.use('/applicants', applicants);

// Start the application
app.listen(80);
console.log('Application Server Listening on port 80');