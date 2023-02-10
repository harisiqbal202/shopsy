const {
  getallusers,
  registeruser,
  loginuser,
  singleuser,
  // removeuser,
  // updateuser,
} = require("../controllers/user.controller");

const express = require("express");
const routes = express.Router();

routes.get("", getallusers);
routes.post("/registeruser", registeruser);
routes.post("/loginuser", loginuser);
routes.put("/:id", singleuser);
// routes.put("/removeuser/:id", removeuser);
// routes.put("/updateuser/:id", updateuser);

module.exports = routes;
