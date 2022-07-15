const express = require("express");
const router = express.Router();
const api = require("./api.js");

router.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
});

module.exports = router;
