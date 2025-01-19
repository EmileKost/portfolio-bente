const mongoose = require("mongoose");

const blockTypes = require("../constants/block-types");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  heroTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  clients: {
    type: [String],
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  profession: {
    type: [String],
    required: false,
  },
  blocks: [
    {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      validate: {
        validator: function (v) {
          return blockTypes.includes(v.type);
        },
        message: (props) => `${props.type} is not a valid Block`,
      },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
