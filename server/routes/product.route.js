const {
  getAllproducts,
  // registerproduct,
  // loginproduct,
  singleproduct,
  // removeproduct,
  // updateproduct,
} = require("../controllers/product.controller");

const express = require("express");
const routes = express.Router();

routes.get("", getAllproducts);
// routes.post("/registerproduct", registerproduct);
// routes.post("/loginproduct", loginproduct);
routes.put("/:id", singleproduct);
// routes.put("/removeproduct/:id", removeproduct);
// routes.put("/updateproduct/:id", updateproduct);

module.exports = routes;
