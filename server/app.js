const express = require("express");
const morgan = require("morgan");

const cors = require("cors");

const userRouter = require("./routes/userRouter");
const projectsRouter = require("./routes/projectsRouter");
const aboutRouter = require("./routes/aboutRouter");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

// middleware
if (process.env.ENV === "development") {
  app.use(morgan("tiny"));
}

app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/about", aboutRouter);

module.exports = app;
