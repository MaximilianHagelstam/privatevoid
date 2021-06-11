# Node.js PostgreSQL Starter

Starter template for using Node.js with PostgreSQL

## Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Features](#features)
- [Dependencies](#dependencies)
  - [dependencies](#dependencies)
  - [devDependencies](#devdependencies)
- [Scripts](#scripts)
- [License](#license)

## Pre-reqs

To build and run this app locally you will need to install [Node.js](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/)

## Getting started

1.  Make sure that you have Node.js and npm installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/MaximilianHagelstam/ts-node-starter.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4.  Make a `.env` it the root of your project as per `.env.example`.
5.  Run `yarn install` to install dependencies.
6.  Run `yarn start-db` to start you local database.
7.  Run `yarn start` to start the example app.

## Features

- Express.js server
- PostgreSQL connectivity
- Sequelize ORM
- ESLint linting
- Prettier formatting
- Winston logger
- Yarn

## Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `yarn start`        | Run server in production with node     |
| `yarn run dev`      | Run server in development with nodemon |
| `yarn run start-db` | Start PostgreSQL database              |

## Dependencies

### dependencies

| Package   | Description                                 |
| --------- | ------------------------------------------- |
| dotenv    | Loads environment variables from .env file. |
| express   | Node.js web framework.                      |
| winston   | Logging library.                            |
| pg        | PostgreSQL client for Node.js.              |
| sequelize | Node.js ORM.                                |

### devDependencies

| Package                   | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| cross-env                 | Cross platform setting of environment scripts.                            |
| eslint                    | Linter for JavaScript and TypeScript files.                               |
| eslint-config-airbnb-base | JavaScript Style Guide.                                                   |
| eslint-config-prettier    | Turns off all rules that are unnecessary or might conflict with Prettier. |
| eslint-plugin-import      | ESLint plugin with rules that help validate proper imports.               |
| eslint-plugin-prettier    | ESLint plugin for Prettier formatting.                                    |
| eslint-plugin-security    | ESLint rules for Node Security.                                           |
| nodemon                   | Utility that automatically restarts node process when it crashes.         |
| prettier                  | Code formatter.                                                           |

## License

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.
