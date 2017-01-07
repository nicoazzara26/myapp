var express = require('express');
var google_drive_service = require('../services/google-drive-service');
var driveFiles = require('../services/quickstart');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var subjects = google_drive_service.subjects();
  var filess = driveFiles.greet();

    console.log(filess);


  res.render('subjectsview', { title: 'Bienvenido a Use the drive' , subjects: subjects, filess:filess});
});


module.exports = router;
