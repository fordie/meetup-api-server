var express = require('express');
var async = require('async');
var router = express.Router();


router.get('/', function(req, res){
	res.render('index.html')
});

router.get('/get-online-week', function(req, res, next) {
	res.render('events')
});
router.get('/theendofdigital', function(req, res, next) {
	res.render('theEndofDigital')
});

module.exports = router;

