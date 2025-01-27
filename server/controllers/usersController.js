const User = require("../schemas/users");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  console.log(req);

  if (!users || users.length === 0) {
    return res.status(404).json({
      status: "failed",
      message: "No users found",
      data: null,
    });
  }

  res.status(200).json({
    status: "success",
    ok: true,
    data: {
      users,
    },
  });
};

const getUser = (req, res) => {
  const id = req.params.id;
};

const createUser = (req, res) => {
  const id = req.params.id;
};

const updateUser = (req, res) => {
  const id = req.params.id;
};

const deleteUser = (req, res) => {
  const id = req.params.id;
};

exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
