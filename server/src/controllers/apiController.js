const logger = require('../config/logger');
const Article = require('../models/Article');

/**
 * Create a new article in the db
 * @route POST /api/add
 */
const addArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.json(article);
  } catch (err) {
    logger.error(err);
  }
};

/**
 * Show all articles
 * @route GET /api/show
 */
const showArticles = async (req, res) => {
  try {
    const article = await Article.findAll();
    res.json(article);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = { addArticle, showArticles };
