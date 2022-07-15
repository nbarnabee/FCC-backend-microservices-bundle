const mongoose = require("mongoose");

const shortenerSchema = new mongoose.Schema(
  {
    original_url: {
      type: String,
    },
    short_url: {
      type: String,
    },
  },
  { collection: "shorts" }
);
