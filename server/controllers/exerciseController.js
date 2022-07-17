require("../models/database");
const User = require("../models/Exercise.js");

/*

Adding a new user

*/

exports.postNewUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      count: 0,
    });
    await user.save().then((result) => {
      console.log("New user added");
      res.json({
        username: result.username,
        _id: result._id,
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred" });
  }
};

/*

Getting a list of users from the DB

*/

exports.getUsers = async (req, res) => {
  try {
    let userList = await User.find().select({ log: false, __v: false }).lean();
    if (userList.length > 0) {
      res.json(userList);
    } else res.json("No users in database");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred" });
  }
};

/* 

Adding an exercise to a user

*/

exports.postExercise = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    let date = new Date(req.body.date).toDateString();
    if (!date || date === "Invalid Date") {
      date = new Date().toDateString();
    }
    const exercise = {
      description: req.body.description,
      duration: req.body.duration,
      date: date,
    };
    user.log.push(exercise);
    let updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      date: date,
      duration: Number(req.body.duration),
      description: req.body.description,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

/*

GET user logs by id

*/

exports.getLogs = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    let startDate = new Date(req.query.from);
    let endDate = new Date(req.query.to);
    let limit = req.query.limit;
    // let filteredLog = filterLog(user.log, startDate, endDate, limit)

    console.log(startDate, endDate);
    let count = user.log.length;
    res.json({
      _id: user._id,
      username: user.username,
      count: count,
      log: user.log,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
