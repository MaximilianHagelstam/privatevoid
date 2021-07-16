const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  getPostsByAuthorId,
  checkOwner,
} = require('../controllers/postController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.get('/get-posts', getPosts);
router.post('/create-post', authCheck, createPost);
router.get('/get-post-by-id/:postId', getPostById);
router.get('/get-posts-by-authorId/:authorId', getPostsByAuthorId);
router.get('/is-user-post-owner/:postId', authCheck, checkOwner);

module.exports = router;
