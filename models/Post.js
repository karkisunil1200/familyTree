const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      requiried: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Post", PostSchema);
