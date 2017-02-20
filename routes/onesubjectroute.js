var express = require('express');
var router = express.Router();
var google_drive_service = require('../services/google-drive-service');
var driveFiles = require('../services/quickstart');
 /* GET subject view listing. */

router.get('/:name', function(req, res) {

  var subjects = google_drive_service.subjects();
  var filess = driveFiles.greet();

  var obj = filess.filter(function(obj){
    if(req.params.name == obj.name){
      res.render('onesubjectview', obj);

    }
  })[0];
});

module.exports = router;
