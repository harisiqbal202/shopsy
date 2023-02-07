const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    default: "",
  },
  price: {
    type: String,
    default: "",
    required: true,
  },
  qty: {
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

const product = mongoose.model("product", productSchema);
module.exports = product;
