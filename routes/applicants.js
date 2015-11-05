// Dependencies
var Applicant = require('../models/applicant.js');
var express = require('express');
var router = express.Router();

// Route defintions
router.get('/', function(req, res) {
	Applicant.find(function (err, applicants) {
	if (err) return console.error(err);
	res.send(applicants);
	});
});

router.post('/', function(req, res) {
	var applicant = new Applicant(req.body);

	applicant.save(function (err) {
	if (err) return console.error(err);
	console.log('applicant saved');
	console.log(applicant);
	});

	res.json(applicant);
});

// Export router object
module.exports = router;
