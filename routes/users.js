const express = require('express');
const router = express.Router();
// import user controller
const userController = require('../controllers/api/v1/users');

// POST route for login
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put('/changePassword', userController.changePassword);

module.exports = router;
