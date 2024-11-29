const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set("views", "views");

/*
 - Request: Incoming request
 - Response: Response to client
 - Next: A Function has to be executed to allow the request travel on to next middleware
 */
// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next(); //If we don't call next() function, the middleware at line 15 bellow cannot be executed
// });

//To parse body data in request
app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);
app.use((req, res, next) => {
    res
        .status(404)
        .render("page-not-found");
});

app.listen(3000);