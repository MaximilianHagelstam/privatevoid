const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['profile'] }));
router.get('/logout', authController.logout);
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: process.env.CLIENT_HOME,
  }),
  authController.successRedirect
);

module.exports = router;
