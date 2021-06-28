const express = require('express');
const apiController = require('../controllers/apiController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', authCheck, apiController.createPost);
router.get('/read-posts', apiController.readPosts);
router.get('/current-user', authCheck, apiController.sendCurrentUser);
router.post('/create-comment', apiController.createComment);
router.get('/read-post-by-id/:postId', apiController.readPostById);

module.exports = router;
