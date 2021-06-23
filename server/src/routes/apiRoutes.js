const express = require('express');
const apiController = require('../controllers/apiController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.post('/create-post', apiController.createPost);
router.get('/read-posts', apiController.readPosts);
router.get('/current-user', authCheck, apiController.sendCurrentUser);

module.exports = router;
