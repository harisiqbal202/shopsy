const mongose = require("mongoose");
const schema = mongose.Schema;

let crud = new schema({
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
  password: {
    type: String,
    default: "",
    required: true,
  },
  age: {
    type: Number,
    default: 0,
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

module.exports = mongose.model("user", crud);
