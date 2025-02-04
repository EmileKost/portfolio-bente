const getAllUsers = (req, res) => {
  res.status(200);
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
