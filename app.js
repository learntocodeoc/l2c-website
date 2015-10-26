var express = require('express');
var app = express();
var applicants = require('./routes/applicants.js');

<<<<<<< HEAD
app.set('view engine', 'jade');

app.use('/', express.static(__dirname + '/public'));


// Default home route
app.get('/', function(req, res){
res.render('index');
});
=======
app.use(express.static('public'));

app.use('/applicants', applicants);
>>>>>>> 3674b76501a6be59189c69a28d38dcea0f3e639f



// Start the application
app.listen(3000);
<<<<<<< HEAD
console.log('Listening on port 3000');
console.log('Welcome to Learn To Code OC Server');
=======
console.log('Application Server Listening on port 3000');
>>>>>>> 3674b76501a6be59189c69a28d38dcea0f3e639f
