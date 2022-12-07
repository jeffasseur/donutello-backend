const express = require('express');
const router = express.Router();
// import user controller
const userController = require('../controllers/api/v1/users');

/* GET users listing. */
router.get('/', userController.getAll);
router.get('/username/username', userController.getByUsername);

// POST route for login
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
