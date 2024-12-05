const Product  = require('../models/product');

exports.getAddProduct = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //Same write();
    res.render("add-product", {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        productCSS: true,
        formCSS: true,
        activeAddProduct: true,
    });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();

    res.redirect("/");
}

exports.getAllProducts = (req, res) => {
    const products = Product.fetchAll()
    res.render('shop', {
        pageTitle: 'Shop',
        prods: products,
        hasProds: products.length > 0,
        activeShop: true,
        productsCSS: true,
        path: '/'
    })
}