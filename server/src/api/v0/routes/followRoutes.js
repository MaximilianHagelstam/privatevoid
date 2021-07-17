const express = require('express');
const {
  followUser,
  unfollowUser,
  checkIfUserFollowsUser,
  getPostsByFollowing,
  getFollowersByUserId,
  getFollowingByUserId,
  getMostFollowed,
} = require('../controllers/followController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/follow-user', authCheck, followUser);
router.post('/unfollow-user', authCheck, unfollowUser);
router.get('/is-user-followed/:userId', authCheck, checkIfUserFollowsUser);
router.get('/following-posts', authCheck, getPostsByFollowing);
router.get('/get-followers-by-userId/:userId', getFollowersByUserId);
router.get('/get-following-by-userId/:userId', getFollowingByUserId);
router.get('/get-most-followed', getMostFollowed);

module.exports = router;
