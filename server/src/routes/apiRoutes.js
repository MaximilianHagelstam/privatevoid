const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/create-post', apiController.createPost);
router.get('/read-posts', apiController.readPosts);

module.exports = router;
