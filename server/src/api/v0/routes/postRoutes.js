const express = require('express');
const {
  createPost,
  readPosts,
  readPostById,
  readPostsByAuthorId,
} = require('../controllers/postController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', authCheck, createPost);
router.get('/read-posts', readPosts);
router.get('/read-post-by-id/:postId', readPostById);
router.get('/read-posts-by-authorId/:authorId', readPostsByAuthorId);

module.exports = router;
