const logger = require('../config/logger');
const Article = require('../models/Article');

/**
 * Create a new article in the db
 * @route POST /api/add
 * @param  {} req
 */
const addArticle = async (req) => {
  try {
    const article = await Article.create(req.body);

    logger.debug(JSON.stringify(article));
  } catch (err) {
    logger.error(err);
  }
};

/**
 * Show all articles
 * @route GET /api/show
 * @param  {} req
 * @param  {} res
 */
const showArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();

    logger.debug(JSON.stringify(articles));
    res.json(articles);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = { addArticle, showArticles };
