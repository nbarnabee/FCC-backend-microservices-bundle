exports.uploadFile = async (req, res) => {
  try {
    res.json({
      name: req.files.upfile.name,
      type: req.files.upfile.mimetype,
      size: req.files.upfile.size,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};
