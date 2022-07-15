exports.tsTest = async (req, res) => {
  try {
    console.log(req.headers);
    // need ipaddress, preferred language, software
    let reply = {
      ipaddress: req.ip,
      language: req.get("accept-language"),
      software: req.get("user-agent"),
    };
    res.json(reply);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
