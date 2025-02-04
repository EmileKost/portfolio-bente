const mongoose = require("mongoose");

const Media = require("./media");
const Skills = require("./skills");
const Experience = require("./experience");

const aboutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  randomFacts: { type: [String], minLength: 1, maxLenght: 3, required: true },
  heroImg: Media,
  description: { type: String, required: true },
  skills: [Skills],
  experience: {
    type: [Experience],
    maxLength: 20,
  },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
