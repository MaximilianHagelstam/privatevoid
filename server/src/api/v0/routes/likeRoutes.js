const express = require('express');
const {
  likePost,
  unLikePost,
  checkIfUserLikedPost,
  getLikesByCreatorId,
} = require('../controllers/likeController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/like-post', authCheck, likePost);
router.post('/remove-like', authCheck, unLikePost);
router.get('/read-like-by-postId/:postId', authCheck, checkIfUserLikedPost);
router.get('/read-likes-by-creatorId/:creatorId', getLikesByCreatorId);

module.exports = router;
