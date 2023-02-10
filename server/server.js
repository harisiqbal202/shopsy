const express = require("express");
const productRoutes = require("./routes/product.route");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
require("./config/db.config")();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  console.log("method: %s url: %s", req.method, req.url);
  next();
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(PORT, () => {
  console.log(`server start at PORT :${PORT}`);
});
