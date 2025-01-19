const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
