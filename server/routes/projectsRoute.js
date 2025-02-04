const express = require("express");

const {
  getAllProjects,
  getProject,
  deleteProject,
} = require("../controllers/projectsController");

const checkIdValidity = require("../middleware/checkIdValidity");

const router = express.Router();

router.use("/:id", checkIdValidity);

router.route("/").get(getAllProjects);
router.route("/:id").get(getProject).delete(deleteProject);
// router.route("/:id").get().patch().delete();

module.exports = router;
