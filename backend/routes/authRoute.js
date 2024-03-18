
const express = require('express');
const router = express.Router();
const { Home, register,login} = require('../controllers/authController');

// Home route
router.get('/', Home);

// Register route
router.post('/register',register);
router.post('/login',login);

module.exports = router;