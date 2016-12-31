var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res){

  res.render('loginview', { title: 'UseTheDrive'});

});

module.exports = router;
