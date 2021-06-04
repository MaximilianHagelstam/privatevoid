import { Sequelize } from "sequelize";

const { DEV_DB_NAME } = process.env;
const { DEV_DB_USER } = process.env;
const { DEV_DB_PASSWORD } = process.env;
const { DEV_DB_HOST } = process.env;
const { DEV_DB_PORT } = process.env;

const { PROD_DB_NAME } = process.env;
const { PROD_DB_USER } = process.env;
const { PROD_DB_PASSWORD } = process.env;
const { PROD_DB_HOST } = process.env;
const { PROD_DB_PORT } = process.env;

const DEV_URI = `postgres://${DEV_DB_USER}:${DEV_DB_PASSWORD}@${DEV_DB_HOST}:${DEV_DB_PORT}/${DEV_DB_NAME}`;
const PROD_URI = `postgres://${PROD_DB_USER}:${PROD_DB_PASSWORD}@${PROD_DB_HOST}:${PROD_DB_PORT}/${PROD_DB_NAME}?ssl=true`;

let URI = null;

if (process.env.NODE_ENV === "production") {
  URI = PROD_URI;
} else {
  URI = DEV_URI;
}

export const db = new Sequelize(URI);
