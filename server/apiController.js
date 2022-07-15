const { DateTime } = require("luxon");

exports.homepage = async (req, res) => {
  try {
    res.sendFile(__dirname + "../index.html");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

exports.tsTest = async (req, res) => {
  try {
    res.json("Hello API");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

exports.currentDate = async (req, res) => {
  try {
    const now = DateTime.utc();
    const reply = {
      unix: Number(Date.parse(now)),
      utc: now.toHTTP(),
    };
    res.json(reply);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

exports.dateParser = async (req, res) => {
  try {
    let input = req.params.date;
    let date;
    if (input.includes("-")) {
      date = DateTime.fromISO(input, { zone: "utc" });
    } else {
      date = DateTime.fromMillis(Number(input), { zone: "utc" });
    }
    if (date == null) {
      res.json({ error: "Invalid Date" });
    } else {
      const reply = {
        unix: Number(Date.parse(date)),
        utc: date.toHTTP(),
      };
      res.json(reply);
    }
  } catch (error) {
    res.json({ error: "Invalid Date" });
  }
};
