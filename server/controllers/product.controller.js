const product = require("./../models/product.model");

const getAllproducts = (req, res) => {
  product.find((err, product) => {
    if (err) {
      res.status(500).send("failed to fetch product");
    }
    res.status(200).send(product);
  });
};

const singleproduct = (req, res) => {
  const { email } = req.query;
  console.log("single product");
  product.findproduct({ email: email }, (err, product) => {
    if (err) {
      res.status(500).send("failed to fetch product");
    }
    res.status(200).send(product);
  });
};

const createproduct = (req, res) => {
  console.log(req.body);
  const { name, age, password, email, username } = req.body;
  new product({ name, email, age, password, username }).save((err) => {
    if (err) {
      res.status(500).send("unable to save the data.");
    }
    res.status(200).send("record successfully added");
    console.log("product added");
  });
};

module.exports = { getAllproducts, singleproduct, createproduct };
