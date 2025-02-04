const Projects = require("../schemas/projects");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find();

    if (projects.length === 0 || !projects) {
      return res.json({
        status: 200,
        message: "No projects found",
        data: {
          projects: [],
        },
      });
    }

    res.json({
      status: 200,
      data: {
        projects,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;

  const project = await Projects.findById(id);

  if (!project) {
    return res.json({
      status: 404,
      message: "Could not find project",
    });
  }

  return res.json({
    status: 200,
    data: {
      project,
    },
  });
};

const deleteProject = async (req, res) => {};

exports.getAllProjects = getAllProjects;
exports.getProject = getProject;
exports.deleteProject = deleteProject;
