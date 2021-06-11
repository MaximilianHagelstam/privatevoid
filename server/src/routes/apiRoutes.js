const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/add', apiController.addArticle);
router.get('/show', apiController.showArticles);

module.exports = router;
