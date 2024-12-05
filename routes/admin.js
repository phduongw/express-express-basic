const express = require('express');
const path = require('path');
const productControllers = require("../controllers/products");
const router = express.Router();


router.get("/add-product", productControllers.getAddProduct);

router.post("/product", productControllers.postAddProduct);

module.exports = router;
