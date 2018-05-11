var express = require('express');

var app = express();

app.all('*', function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
});
app.get('/', function(req, res){
    res.end('Welcome to the home page!');
});
app.get('/:who', function(req, res){
    res.end('Hello, '+req.params.who+'.');
    //Notice: this can be a security issue!
});
app.get('/about', function(req, res){
    res.end('This is the about page.');
});
app.get('*', function (req, res){
    res.end('404 Error!');
});
//the order of these app.get() matters...
//app.get('/:who', function(req, res){
//    res.end('Hello, '+req.params.who+'.');
//});

app.listen(8080);
