const express = require("express");

const Product = require("../models/product.model");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.deleteOne(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.put("", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
