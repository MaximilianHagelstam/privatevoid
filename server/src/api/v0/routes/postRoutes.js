const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  getPostsByAuthorId,
} = require('../controllers/postController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

/**
 * @swagger
 * /posts/get-posts:
 *   get:
 *     summary: Returns the list of all posts
 *     tags: [Posts]
 *     responses:
 *       304:
 *         description: The list of posts
 */
router.get('/get-posts', getPosts);
router.post('/create-post', authCheck, createPost);
router.get('/get-post-by-id/:postId', getPostById);
router.get('/get-posts-by-authorId/:authorId', getPostsByAuthorId);

module.exports = router;
