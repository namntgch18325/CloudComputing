//Server generated
var express = require('express');
var bodyParser = require('body-parser');
var productRoute = require('./Routes/Product.routes');
var webRoute = require('./Routes/Web.routes');
var path = require('path');
var env = require('dotenv').config();
var app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use("/api",productRoute);
app.use(webRoute);

var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
console.log(process.env.URI);
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at http://' + IP + ':' + Port + '/index');
    }
});
//mongodb+srv://root:<password>@toystorii.ejrdz.mongodb.net/<dbname>?retryWrites=true&w=majority