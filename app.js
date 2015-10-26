var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use('/', express.static(__dirname + '/public'));


// Default home route
app.get('/', function(req, res){
res.render('index');
});



// Start the application
app.listen(3000);
console.log('Listening on port 3000');
console.log('Welcome to Learn To Code OC Server');