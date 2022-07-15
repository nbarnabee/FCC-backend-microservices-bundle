const express = require("express");
const router = express.Router();
const apiController = require("./apiController.js");

/*

GET Homepage

*/

router.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
});

/*

GET Timestamp Microservices

*/

router.get("/api/hello", apiController.tsTest);
router.get("/api", apiController.currentDate);
router.get("/api/:date", apiController.dateParser);

module.exports = router;
