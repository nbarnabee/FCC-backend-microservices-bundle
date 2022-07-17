const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  log: [
    {
      description: String,
      duration: Number,
      date: Date,
      _id: false,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
