import express from "express";
import { addArticle, showArticles } from "../controllers";

export const apiRouter = express.Router();

apiRouter.post("/add", addArticle);
apiRouter.get("/show", showArticles);
