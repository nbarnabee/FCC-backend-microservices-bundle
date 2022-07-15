exports.tsTest = async (req, res) => {
  try {
    res.json("Hello API");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
