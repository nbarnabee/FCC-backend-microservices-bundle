exports.tsTest = async (req, res) => {
  try {
    res.json("Hello API");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};

exports.currentDate = async (req, res) => {
  try {
    const now = new Date().toGMTString();
    const reply = {
      unix: Number(Date.parse(now)),
      utc: now,
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
    if (isNaN(Number(input))) {
      date = new Date(input).toGMTString();
    } else {
      date = new Date(Number(input)).toGMTString();
    }
    if (date == null || date == NaN || date == "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({
        unix: Number(Date.parse(date)),
        utc: date,
      });
    }
  } catch (error) {
    res.json({ error: "Invalid Date" });
  }
};
