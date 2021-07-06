const express = require('express');
const {
  followUser,
  unfollowUser,
  checkIfUserFollowsUser,
  readPostsByFollowing,
} = require('../controllers/followController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/follow-user', authCheck, followUser);
router.post('/unfollow-user', authCheck, unfollowUser);
router.get('/read-follow-by-userId/:userId', authCheck, checkIfUserFollowsUser);
router.get('/following-posts', authCheck, readPostsByFollowing);

module.exports = router;
