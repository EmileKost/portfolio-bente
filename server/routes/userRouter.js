const express = require("express");

const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/usersController");

const router = express.Router();

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
