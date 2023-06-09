const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    default: "https://placehold.co/100x100",
  },
  rating: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
});

module.exports = mongoose.model("Movie", movieSchema);
