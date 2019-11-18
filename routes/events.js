var express = require('express');
var async = require('async');
var router = express.Router();
});

router.get('/', indexRoute);

module.exports = router;

function indexRoute(req, res, next) {
}

function getGroup(callback) {
}

function getEvents(callback) {
}

function renderIndex(res, next, err, results) {
	if (err) {
		return next(err);
	}

}
