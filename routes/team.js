var express = require('express');
var async = require('async');
var router = express.Router();


router.get('/team', function(req, res, next) {
	res.render('/team.html')
});

module.exports = router;




