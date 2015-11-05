var express = require('express');

module.exports = function() {
  var app = express();
  var applicants = require('../routes/applicants.js');
  var bodyParser = require('body-parser');

  // Jade Templates Config
  app.set('views', './views');
  app.set('view engine', 'jade');

  // Parse json from incoming request bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({"extended" : false}));

  // Mount routs to application
  app.use(express.static('./public'));
  app.use('/applicants', applicants);

  return app;
}
