const productService = require("../services/productServices");

exports.getAllProducts = (req, res) => {
  res.send(productService.getAllProducts());
};

exports.addProduct = (req, res) => {
  res.send(productService.addProduct());
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  res.send(productService.getProductById(id));
};
