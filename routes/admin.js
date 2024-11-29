const express = require('express');
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    console.log("Add Product");
    res.send('<form method="POST" action="/admin/product">' +
        '<input type="text" name="title" />' +
        '<button type="submit">Add Product</button>' +
        '</form>'); //Same write();
});

router.post("/product", (req, res) => {
    console.log(req.body)
    res.redirect("/");
});

module.exports = router;