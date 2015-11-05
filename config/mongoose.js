var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/l2c-website');

// check for db connections success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongodb connected successfully');
});
