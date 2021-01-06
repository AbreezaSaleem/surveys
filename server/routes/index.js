'use strict';

let express = require('express');

let router = express.Router();

router.use('/', function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

router.use('/register', require('./register'));
router.use('/login', require('./login'));
// pass in jwt authentication here
router.use('/user', require('./user'));
router.use('/templates', require('./templates'));

module.exports = router;
