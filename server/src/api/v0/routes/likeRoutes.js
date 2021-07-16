const express = require('express');
const {
  likePost,
  unLikePost,
  checkIfUserLikedPost,
  getLikesByCreatorId,
  getLikesByPostId,
} = require('../controllers/likeController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/like-post', authCheck, likePost);
router.post('/remove-like', authCheck, unLikePost);
router.get('/is-post-liked/:postId', authCheck, checkIfUserLikedPost);
router.get('/get-likes-by-creatorId/:creatorId', getLikesByCreatorId);
router.get('/get-likes-by-postId/:postId', getLikesByPostId);

module.exports = router;
