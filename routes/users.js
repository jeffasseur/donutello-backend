var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route for login
router.post('/login', function(req, res, next) {
  res.send('Login route');
});

module.exports = router;
