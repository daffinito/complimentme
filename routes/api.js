var express = require('express');
var router = express.Router();
var loadinsults = require('../lib/loadinsults');
var insults;

loadinsults.load(function(err,body) {
   if (!err)
      insults = body.insults;
   else
      console.log("Error loading insults.");
});

/* GET home page. */
router.get('/insult', function(req, res, next) {
   var random = Math.floor((Math.random() * insults.length));
   res.json(insults[random]);
});

module.exports = router;
