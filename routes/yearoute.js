var express = require('express');

var driveFiles = require('../services/quickstart');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {

  var filess = driveFiles.greet();

    console.log(filess);


  res.render('mainview', { title: 'Bienvenido a Use the drive' , filess:filess});
});


module.exports = router;
