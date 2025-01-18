const express = require("express");

const userRouter = require("./routes/userRouter");
const projectsRouter = require("./routes/projectsRouter");

const app = express();

// middleware
app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectsRouter);

module.exports = app;
