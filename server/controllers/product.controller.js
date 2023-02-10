const Product = require("./../models/product.model");

const getallproducts = async (req, res) => {
  console.log("Inside all products");
  const products = await Product.find({});
  res.send(products);
};
const addproduct = async (req, res) => {
  console.log("added");
  const { id, email, name } = req.user;
  const product = await Product.create({ ...req.body, owner: id });
  const owner = await User.findById({ _id: id });
  owner.products.push(product._id);
  owner.save();
  res.send({
    product,
    message: "Product added succedfully",
  });
};
const editproduct = async (req, res) => {
  console.log("inside editor");
  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );
  res.send({
    product: updatedProduct,
    message: "product added succesfuly",
  });
};
const findbyid = async (req, res) => {
  console.log("inside findbyid");
  const product = await Product.findById(
    { _id: req.params.id }.populate("owner")
  );
};

const removeproduct = async (req, res) => {
  console.log("inside delete api");
  await Product.findByIdAndUpdate(
    { _id: req.params.id },
    { isDeleted: true },
    { new: true }
  );
  req.send({
    message: "deleted Succesfuly",
  });
};
const singleproduct = (req, res) => {
  const { name } = req.query;
  console.log("single user");
  Product.findOne({ name: name }, (err, product) => {
    if (err) {
      res.status(500).send("failed to fetch user");
    }
    res.status(200).send(product);
  });
};

module.exports = {
  getallproducts,
  findbyid,
  addproduct,
  editproduct,
  removeproduct,
  singleproduct,
};
