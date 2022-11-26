const express = require('express');
const router = express.Router();
// import user controller
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getAll);

// POST route for login
router.post('/login', userController.login);

module.exports = router;
