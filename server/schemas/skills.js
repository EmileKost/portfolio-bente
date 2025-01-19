const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: {
    type: String,
    required: false,
    enum: ["Beginner", "Intermediate", "Pro"],
  },
  description: { type: String, required: true },
});

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;
