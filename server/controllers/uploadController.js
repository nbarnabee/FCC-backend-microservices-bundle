exports.uploadFile = async (req, res) => {
  // let newFile;
  // let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    //   newFile = req.files.upfile;
    //   uploadPath =
    //     require("path").resolve("./") + "/public/uploads/" + newFile.name;
    // }
    // await newFile.mv(uploadPath, function (err) {
    //   if (err) return res.status(500).send(err);
    //   else {
    res.json({
      name: req.files.upfile.name,
      type: req.files.upfile.mimetype,
      size: req.files.upfile.size,
    });
  }
  //   });
};
