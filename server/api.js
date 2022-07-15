exports.homepage = async (req, res) => {
  try {
    res.sendFile(__dirname + "../index.html");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
