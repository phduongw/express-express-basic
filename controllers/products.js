const Product  = require('../models/product');



exports.getAddProduct = (req, res) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //Same write();
    res.render("admin/add-product", {
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