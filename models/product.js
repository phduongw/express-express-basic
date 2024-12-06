const fs = require('fs');
const path = require('path');
const files = path.join(path.dirname(process.mainModule.filename), 'data', 'files.json');


const getProductsFromFile = (cb) => {
    fs.readFile(files, (err, data) => {
        if (err) {
            return cb([]);
        }

        return cb(JSON.parse(data.toString()));
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(files, JSON.stringify(products), (err) => {
                console.log(err)
            });
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}