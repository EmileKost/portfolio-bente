const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  type: { type: String, required: true }, // can be video/image
  url: { type: String, required: true }, // S3
  date: Date,
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
