const express = require('express');
const {
  createComment,
  readCommentsByCreatorId,
} = require('../controllers/commentController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-comment', authCheck, createComment);
router.get('/read-comments-by-creatorId/:creatorId', readCommentsByCreatorId);

module.exports = router;
