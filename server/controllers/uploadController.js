// exports.uploadFile = async (req, res) => {
//   // let newFile;
//   // let uploadPath;
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   } else {
//     // I don't want to actually let people upload files, and  Heroku doesn't like it anyway
//     //   newFile = req.files.upfile;
//     //   uploadPath =
//     //     require("path").resolve("./") + "/public/uploads/" + newFile.name;
//     // }
//     // await newFile.mv(uploadPath, function (err) {
//     //   if (err) return res.status(500).send(err);
//     //   else {
//     res.json({
//       name: req.files.upfile.name,
//       type: req.files.upfile.mimetype,
//       size: req.files.upfile.size,
//     });
//   }
//   //   });
// };

/*  Ughh FINE I will try it with multer */

exports.uploadFile = async (req, res) => {
  if (!req.file || Object.keys(req.file).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    });
  }
};
