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

var addApplicant = function (data) {	
	var applicant = new Applicant(data);
	
	applicant.save(function (err) {
		if (err) return console.error(err);
		console.log('applicant saved');
	});
};

var getApplicants = function() {
	Applicant.find(function (err, applicants) {
		if (err) return console.error(err);	
		// console.log(applicants);	
		return applicants;
	});
};


exports.addApplicant = addApplicant;
exports.getApplicants = getApplicants;


// test inserting and retrieving applicants
var applicantTest = function() {
	data = {
		"orgName" : "Test Organization 1",
		"webUrl" : "www.google.com",
		"primaryContact" : {
			"firstName" : "Primary",
			"lastName" : "Person",
			"email" : "person@example.com",
			"phone" : "123-456-7890"
		},
		"webContact" : {
			"firstName" : "Webfirst",
			"lastName" : "Weblast",
			"email" : "webmaster@example.com",
			"phone" : "123-456-7891"
		},
		"currentSite" : {
			"host" : "GoDaddy.com",
			"haveCredentials" : "true",
			"dns" : "GoDaddy.com",
			"cms" : "WordPress",
			"ecommerce" : "true",
			"notes" : "We have no idea how websites work or what any of this stuff you're asking means"
		}
	};

	addApplicant(data);
	// getApplicants();		
};


applicantTest();
console.log(Applicant.find().applicants);