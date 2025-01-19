const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");
const projectsRouter = require("./routes/projectsRouter");
const aboutRouter = require("./routes/aboutRouter");

const app = express();

// middleware
if (process.env.ENV === "development") {
  app.use(morgan("tiny"));
}

app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/about", aboutRouter);

module.exports = app;
