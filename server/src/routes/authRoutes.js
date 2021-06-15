const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['profile'] }));
router.get('/logout', authController.logout);
router.get('/user', authCheck, authController.sendUser);
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: process.env.CLIENT_HOME_PAGE,
  }),
  authController.successRedirect
);

module.exports = router;
