import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import logger from "./config/logger";
import db from "./config/database";

// Controllers
import { apiRouter, homeRouter } from "./routes";

// Test db connection
db.authenticate()
  .then(() => {
    logger.info("Connected to DB");
  })
  .catch((err) => {
    logger.error(`Error connecting to DB: ${err}`);
  });

const app = express();

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/", homeRouter);
app.use("/api", apiRouter);

export { app };
