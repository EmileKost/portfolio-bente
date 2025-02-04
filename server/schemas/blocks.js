const mongoose = require("mongoose");

const Media = require("./media");

const keyPointsSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["KeyPoint"] }, // KeyPoint
  data: {
    text: { type: String, required: true },
  },
});

const imageGridSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["ImageGrid"] }, // ImageGrid
  data: {
    images: {
      type: [Media],
      maxLength: 4,
    },
  },
});

const detailsSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["Details"] }, // Details
  data: {
    text: {
      type: [{ type: String, required: true }],
      maxLength: 4,
    },
  },
});

const featuresSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["Features"] }, // Features
  data: {
    text: {
      type: [{ type: String, required: true }],
      maxLength: 4,
    },
  },
});

const sliderSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["SlipperySlider"] }, // SlipperySlider
  data: {
    required: true,
    type: [
      {
        media: { type: Media, required: true },
        title: { type: String, required: true },
        profession: { type: [String], maxLength: 2, required: true },
        cursorContent: { type: String, required: false },
      },
    ],
    maxLength: 5,
  },
});

const mediaSingleSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["MediaSingle"] },
  data: {
    media: Media,
  },
});

const KeyPoint = mongoose.model("KeyPoint", keyPointsSchema);
const ImageGrid = mongoose.model("ImageGrid", imageGridSchema);
const Details = mongoose.model("Details", detailsSchema);
const Features = mongoose.model("Features", featuresSchema);
const SlipperySlider = mongoose.model("SlipperySlider", sliderSchema);
const MediaSingle = mongoose.model("MediaSingle", mediaSingleSchema);

exports.KeyPoint = KeyPoint;
exports.ImageGird = ImageGrid;
exports.Details = Details;
exports.Features = Features;
exports.SlipperySlider = SlipperySlider;
exports.MediaSingle = MediaSingle;
