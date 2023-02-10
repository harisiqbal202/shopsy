const {
  getallproducts,
  findbyid,
  addproduct,
  editproduct,
  removeproduct,
  singleproduct,
} = require("../controllers/product.controller");

const express = require("express");
const routes = express.Router();

routes.get("", getallproducts);
routes.post("/addproduct", addproduct);
routes.post("/editproduct", editproduct);
routes.put("/:name", singleproduct);
routes.put("/removeproduct/:id", removeproduct);
routes.put("/editproduct/:id", editproduct);

module.exports = routes;
