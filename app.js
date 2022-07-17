const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const dbString = process.env.DB_STRING;

// Setting up CORS so FCC will be happy
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes.js");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
