const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  getPostsByAuthorId,
} = require('../controllers/postController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', authCheck, createPost);
router.get('/read-posts', getPosts);
router.get('/read-post-by-id/:postId', getPostById);
router.get('/read-posts-by-authorId/:authorId', getPostsByAuthorId);

module.exports = router;
