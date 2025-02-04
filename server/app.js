const express = require("express");
const morgan = require("morgan");

// routes
const projectsRouter = require("./routes/projectsRoute");

const app = express();

// middleware
if (process.env.ENV === "development") {
  app.use(morgan("tiny"));
}

app.use(express.json());

console.log(process.env.API_BASE_URL);

app.use(`${process.env.API_BASE_URL}/projects`, projectsRouter);

module.exports = app;
