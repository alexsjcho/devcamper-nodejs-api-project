const express = require('express');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require('../controllers/auth');

//Import Routes
const router = express.Router();
const { protect } = require('../middleware/auth');

//Route paths
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;
