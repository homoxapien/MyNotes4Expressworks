//var http = require('http');
var express = require('express');

var app  = express();

//First step: print info on console
app.use(function (req, res, next){
   console.log('In comes a', req.method, 'to', req.url);
   next(); 
});

//Second step: serve the home page if requested
app.use(function (req, res, next){
    if(req.url === '/'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Welcome to the home page.');
    }
    else{
        next();
    }
});

//Third step: serve the about page if requested
app.use(function (req, res, next){
    if(req.url === '/about'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is the about page.'); 
    }
    else{
        next();
    }
});

//Forth step: otherwise serve the error page
app.use(function (req, res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Error! Page Not Found.');
});

//http.createServer(app).listen(8080);
app.listen(8080)
