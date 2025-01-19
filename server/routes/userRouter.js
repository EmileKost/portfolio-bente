const express = require("express");

const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/usersController");

const router = express.Router();

// Middleware
router.get("/", (req, res, next) => {
  console.log("EXECUTING MIDDLEWARE");

  const authorized = true;

  if (!authorized) {
    return res.status(401).json({
      status: "unauthorized",
      messagge: "You are unauthorized to perform this action",
    });
  }

  next();
});

router.param("id", (req, res, next) => {
  console.log(req.params.id);
  next();
});

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getUser)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
