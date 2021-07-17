const express = require('express');
const {
  createComment,
  getCommentsByCreatorId,
  getCommentsByPostId,
} = require('../controllers/commentController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-comment', authCheck, createComment);
router.get('/get-comments-by-creatorId/:creatorId', getCommentsByCreatorId);
router.get('/get-comments-by-postId/:postId', getCommentsByPostId);

module.exports = router;
