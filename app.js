var express = require('express');
var app = express();


// Default home route
app.get('/', function(req, res){
	res.send('default home directory');
});

// Start the application
app.listen(3000);
console.log('Listening on port 3000');