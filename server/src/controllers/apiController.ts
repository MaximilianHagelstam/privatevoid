import { Response, Request } from "express";
import Article from "../models/Article";
import logger from "../config/logger";

/**
 * Create a new article in the db
 * @route POST /api/add
 */
export const addArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
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
export const showArticles = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const article = await Article.findAll();
    logger.info(article);
    res.json(article);
  } catch (err) {
    logger.error(err);
  }
};
