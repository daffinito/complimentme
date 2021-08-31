var express = require('express');
var router = express.Router();
var loadcompliments = require('../lib/loadcompliments');
var compliments;

loadcompliments.load(function(err,body) {
   if (!err)
      compliments = body.compliments;
   else
      console.log("Error loading compliments.");
});

/* GET home page. */
router.get('/compliment', function(req, res, next) {
   var random = Math.floor((Math.random() * compliments.length));
   res.json(compliments[random]);
});

module.exports = router;
