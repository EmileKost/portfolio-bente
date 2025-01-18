const express = require("express");

const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
} = require("../controllers/projectsController");

const router = express.Router();

router.post("/:id", (req, res, next) => {
  const accessToken = req.accessToken;

  if (!accessToken) {
    res.status(401).json({
      status: "not allowed",
      message: "You are not allowed to perform this action",
    });
  }

  console.log("allowed");

  next();
});

router.route("/").get(getAllProjects).post(createProject);
router.route("/:id").get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;
