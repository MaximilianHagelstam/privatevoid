import { Response, Request } from "express";
import Article from "../models/Article";
import logger from "../config/logger";

/**
 * Create a new article in the db
 * @route POST /api/addArticle
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
