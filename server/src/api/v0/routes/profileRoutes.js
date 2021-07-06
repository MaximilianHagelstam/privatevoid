const express = require('express');
const {
  sendCurrentUser,
  readUserByUsername,
  findUserIdFromUsername,
  editUserSettings,
} = require('../controllers/profileController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.get('/current-user', authCheck, sendCurrentUser);
router.get('/read-user-by-username/:searchedUsername', readUserByUsername);
router.get('/find-userId-from-username/:username', findUserIdFromUsername);
router.post('/update-settings', authCheck, editUserSettings);

module.exports = router;