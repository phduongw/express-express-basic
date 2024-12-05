const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const _404PageControllers = require("./controllers/error")

const app = express();
// app.set('view engine', 'pug'); pug view
app.set("views", "views");
// app.engine('hbs', expressHandlebars({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); //handlebars view
// app.set('view engine', 'hbs');
/*
    Noted for handlebars:
        - File views cần phải có đuôi file giống với tham số thứ nhất trong hàm app.engine
        - Tham số thứ 2 trong app.set('view engine',...) cần phải giống với tham số thứ nhất trong hàm app.engine
 */

app.set("view engine", "ejs");

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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(_404PageControllers.get404Page);

app.listen(3000);