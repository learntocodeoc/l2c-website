var express = require('express');

module.exports = function() {
  var app = express();
  var applicants = require('../routes/applicants.js');

  // Jade Templates Config
  app.set('views', './views');
  app.set('view engine', 'jade');

  // Routes
  app.use(express.static('./public'));
  app.use('/applicants', applicants);

  return app;
}
