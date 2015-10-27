var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/l2c-website');

// check for db connections success
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongodb connected successfully');
});

// create applicant data schema
var applicantSchema = mongoose.Schema({
	orgName: String,
	webUrl: String,
	primaryContact: {
		firstName: String,
		lastName: String,
		email: String,
		phone: String
	},
	webContact: {
		firstName: String,
		lastName: String,
		email: String,
		phone: String
	},
	currentSite: {
		host: String,
		haveCredentials: String,
		dns: String,
		cms: String,
		ecommerce: String,
		notes: String
	}	
});

// compile Schema into a Model
var Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
