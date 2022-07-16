require("../models/database");
const ShortenedURL = require("../models/Shortener");
const dns = require("node:dns");
const { rmSync } = require("node:fs");

exports.urlShorten = async (req, res) => {
  try {
    const url = new URL(req.body.url);
    dns.lookup(url.hostname, () => {
      let random = Math.random()
        .toString(36)
        .replace(/[^\w]+/g, "");
      let entry = new ShortenedURL({
        original_url: req.body.url,
        short_url: random,
      });
      entry.save();
      res.json({
        original_url: entry.original_url,
        short_url: entry.short_url,
      });
    });
  } catch (error) {
    res.status(500).send({ error: "invalid url" || "Error Occurred" });
  }
};

exports.urlRedirect = async (req, res) => {
  try {
    let search = req.params.id;
    console.log(search);
    let url = await ShortenedURL.findOne({ short_url: search });
    res.redirect(url.original_url);
  } catch (error) {
    res.json("URL not found");
  }
};

// let fcc = new ShortenedURL({
//   original_url: "https://www.freecodecamp.org",
//   short_url: "123",
// });

// async function insertData() {
//   try {
//     await fcc.save();
//     console.log("Entry saved");
//   } catch (error) {
//     console.log("Error" + error);
//   }
// }

// insertData();
