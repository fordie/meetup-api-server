var express = require('express');
var async = require('async');
var router = express.Router();


router.get('/', function(req, res){
	res.render('index.html')
});

router.get('/team', function(req, res, next) {
	res.render('team')
});
router.get('/theendofdigital', function(req, res, next) {
	res.render('theEndofDigital')
});

module.exports = router;

