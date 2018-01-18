var express = require('express');
var router = express.Router();
var assert = require('assert');
var mysql = require('mysql');


router.get('/', function(req, res, next){
	res.render('main');
});

router.post('/submit', function(req, res, next){
	req.check('email', 'invalid email').isEmail();
	req.check('password','Password is invalid').isLenght({min:4})equals(req.body.confirmPassword);
	
	var errors = req.validationErrors();
	if(error) {
		req.session.errors = errors;
		req.session.success = false;
	} else{
		req.session.success = true;
	}
	res.redirect('/');
}

router.get('/get-data', function(req, res, next){
	
});

router.post('/insert', function(req, res, next){

});

router.post('/update', function(req, res, next){
	
});

router.post('/delete', function(req, res, next){
	
});
module.exports = router;