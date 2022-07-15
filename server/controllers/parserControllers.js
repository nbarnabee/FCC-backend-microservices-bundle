exports.whoami = async (req, res) => {
  try {
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
