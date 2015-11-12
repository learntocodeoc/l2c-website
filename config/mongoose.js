var mongoose = require('mongoose');

var mongoURI = {
  development: 'mongodb://localhost/l2c-website',
  test: 'mongodb://localhost/l2c-website-test'
};

mongoose.connect(mongoURI[process.env.NODE_ENV]);

// check for db connections success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongodb connected to ' + mongoURI[process.env.NODE_ENV]);
});
