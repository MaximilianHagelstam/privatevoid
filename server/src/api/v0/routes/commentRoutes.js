const express = require('express');
const {
  createComment,
  getCommentsByCreatorId,
} = require('../controllers/commentController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-comment', authCheck, createComment);
router.get('/get-comments-by-creatorId/:creatorId', getCommentsByCreatorId);

module.exports = router;
