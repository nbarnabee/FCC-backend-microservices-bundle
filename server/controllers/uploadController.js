exports.uploadFile = async (req, res) => {
  if (!req.file || Object.keys(req.file).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    response = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    };
    res.json(response);
  }
};
