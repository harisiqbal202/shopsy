const user = require("../models/user.model");

const getAllusers = (req, res) => {
  user.find((err, cruds) => {
    if (err) {
      console.log(err);
    } else {
      res.send(cruds);
    }
  });
};

const singleuser = (req, res) => {
  const { email } = req.query;
  console.log("single user");
  user.finduser({ email: email }, (err, user) => {
    if (err) {
      res.status(500).send("failed to fetch user");
    }
    res.status(200).send(user);
  });
};

const createuser = (req, res) => {
  console.log(req.body);
  const { name, age, password, email, username } = req.body;
  new user({ name, email, age, password, username }).save((err) => {
    if (err) {
      res.status(500).send("unable to save the data.");
    }
    res.status(200).send("record successfully added");
    console.log("user added");
  });
};

module.exports = { getAllusers, singleuser, createuser };
