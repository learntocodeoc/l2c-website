var Applicant = require('../models/applicants.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

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

app.use('/applicants', router);
app.listen(3000);
console.log('API server listening on port 3000');