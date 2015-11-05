var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create applicant data schema
var applicantSchema = new Schema({
	orgName: String,
	webUrl: String,
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
  services: String,
  comments: String
});

// compile Schema into a Model
module.exports = mongoose.model('Applicant', applicantSchema);
