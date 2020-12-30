const Router = require('express').Router();
const ProductController = require('../Controller/ProductController');

Router.route('/product')
.get(ProductController.read)
.post(ProductController.create)
.put(ProductController.edit)
.delete(ProductController.delete);
Router.get('/product/:id',ProductController.show);

module.exports = Router;