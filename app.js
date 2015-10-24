var express = require('express');
var app = express();
var applicants = require('./routes/applicants.js');

app.use(express.static('public'));

app.use('/applicants', applicants);

// Start the application
app.listen(3000);
console.log('Application Server Listening on port 3000');