exports.uploadFile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
