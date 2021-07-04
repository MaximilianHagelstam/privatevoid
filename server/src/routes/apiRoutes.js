const express = require('express');
const apiController = require('../controllers/apiController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', authCheck, apiController.createPost);
router.get('/read-posts', apiController.readPosts);
router.get('/current-user', authCheck, apiController.sendCurrentUser);
router.post('/create-comment', apiController.createComment);
router.get('/read-post-by-id/:postId', apiController.readPostById);
router.get(
  '/read-user-by-username/:searchedUsername',
  apiController.readUserByUsername
);
router.get(
  '/read-posts-by-authorId/:authorId',
  apiController.readPostsByAuthorId
);
router.get(
  '/find-userId-from-username/:username',
  apiController.findUserIdFromUsername
);
router.get(
  '/read-comments-by-creatorId/:creatorId',
  apiController.readCommentsByCreatorId
);
router.post('/update-settings', authCheck, apiController.editUserSettings);
router.post('/like-post', authCheck, apiController.likePost);
router.post('/remove-like', authCheck, apiController.unLikePost);

module.exports = router;
