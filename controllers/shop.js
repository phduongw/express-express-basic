const Product  = require('../models/product');

exports.getAllProducts = (req, res) => {
    Product.fetchAll((prods) => {
        res.render('shop/product-list', {
            pageTitle: 'Shop',
            prods: prods,
            hasProds: prods.length > 0,
            activeShop: true,
            productsCSS: true,
            path: '/'
        })
    })
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((prods) => {
        res.render('shop/index', {
            pageTitle: 'Shop',
            prods: prods,
            hasProds: prods.length > 0,
            activeShop: true,
            productsCSS: true,
            path: '/'
        })
    })
}

exports.getCart = (rep, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    });
}

exports.checkout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: 'checkout'
    })
}