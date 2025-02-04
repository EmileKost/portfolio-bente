exports.getAllProjects = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      projects: [],
    },
  });
};

exports.getProject = (req, res) => {
  res.status(200);
};

exports.createProject = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Project created",
  });
};

exports.updateProject = (req, res) => {
  res.status(200);
};

exports.deleteProject = (req, res) => {
  res.status(204);
};
