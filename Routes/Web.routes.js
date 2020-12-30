const Router = require('express').Router();

Router.get('/index',function(req,res){
    res.render('index');
});
Router.get('/update',function(req,res){
    res.render('update');
});
Router.get('/create',function(req,res){
    res.render('create');
});


module.exports = Router;