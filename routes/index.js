var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/share', function(req, res, next) {
  console.log('share');
  res.render('share');
});

router.get('/privacy_en', function(req, res, next) {
  res.render('privacy');
});

router.get('/privacy_tr', function(req, res, next) {
  res.render('gizlilik');
});

router.get('/pp', function(req, res, next) {
  res.render('privacy');
});

router.get('/home', function(req, res, next) {
  console.log('home');
  res.render('home');
});

router.get('/:id', function(req, res, next) {
  console.log('index');
  res.render('index');
});



module.exports = router;
