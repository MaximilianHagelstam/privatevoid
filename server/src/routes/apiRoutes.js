const express = require('express');
const apiController = require('../controllers/apiController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', apiController.createPost);
router.get('/read-posts', apiController.readPosts);
router.get('/current-user', authCheck, apiController.sendCurrentUser);
router.post('/create-comment', apiController.createComment);
router.get('/read-comment-by-id/:commentId', apiController.readCommentById);

module.exports = router;
