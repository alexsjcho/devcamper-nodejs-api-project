const express = require('express');
const { register, login, getMe } = require('../controllers/auth');

//Import Routes
const router = express.Router();
const { protect } = require('../middleware/auth');

//Route paths
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
