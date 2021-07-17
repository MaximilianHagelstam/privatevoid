const express = require('express');

const likeRoutes = require('./likeRoutes');
const authRoutes = require('./authRoutes');
const followRoutes = require('./followRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const profileRoutes = require('./profileRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);
router.use('/follow', followRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
