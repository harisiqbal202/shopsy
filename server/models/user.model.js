const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    default: "",
  },
  email: {
    type: String,
    default: "",
    required: true,
  },
  contact: {
    type: String,
    default: "",
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    default: "",
    required: true,
  },
  role: {
    type: String,
    default: "customer",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
