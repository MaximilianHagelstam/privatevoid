import express from "express";
import { addArticle } from "../controllers";

export const apiRouter = express.Router();

apiRouter.post("/addArticle", addArticle);
