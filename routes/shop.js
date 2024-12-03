const express = require('express');
const path = require('path');
const router = express.Router();
const adminData = require('./admin')

router.get("/", (req, res, next) => {
    const products = adminData.product;
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //Same write();
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        hasProds: products.length > 0,
        activeShop: true,
        productsCSS: true,
        path: '/'
    });
});

module.exports = router;