const User = require("../models/user.model");

const getallusers = (req, res) => {
  User.find((err, cruds) => {
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
  User.finduser({ email: email }, (err, user) => {
    if (err) {
      res.status(500).send("failed to fetch user");
    }
    res.status(200).send(user);
  });
};
const loginuser = async (req, res) => {
  console.log("user login : ", req.body);
  const { password, email } = req.body;
  const user = await User.findOne({ email: email, isDeleted: false });
  if (!user) return res.status(400).send({ message: "User not Found" });
  try {
    const response = await bcrypt.compare(password, user.password);
    const token = await jwt.sign(
      {
        id: user._id,
        email: user.email,
        password: user.password,
      },
      process.env.JWT_PRIVATE_KEY
    );
    console.log("token", token);
    return response.send({ user, token, message: "User Logged in" });
  } catch (err) {
    console.log("error", err);
    res.status(500).send({
      message: err.message,
    });
  }
};

const registeruser = async (req, res) => {
  console.log("body data : ", req.body);
  // console.log("inside register", req);
  // const { password, ...rest } = req.body;
  // const exist = await user.findOne({ email: rest.email, isdeleted: false });
  // if (exist) return res.status(400).send("user already exist");
  // try {
  //   const user = new user({

  //     ...rest,
  //   });
  //   const salt = await bcrypt.genSalt(12);
  //   const hashPassword = await bcrypt.hash(password, salt);
  //   user.password = hashPassword;
  //   user.save();
  //   res.send({ message: "user added successfuly" });
  // } catch (err) {
  //   res.status(500).send({
  //     message: err.message,
  //   });
  // }
};

module.exports = { getallusers, singleuser, registeruser, loginuser };
