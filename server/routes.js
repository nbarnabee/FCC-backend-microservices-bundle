const express = require("express");
const router = express.Router();
const timeStampController = require("./controllers/timeStampControllers.js");

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

router.get("/api/hello", timeStampController.tsTest);
router.get("/api", timeStampController.currentDate);
router.get("/api/:date", timeStampController.dateParser);

/*

GET 

*/

module.exports = router;
