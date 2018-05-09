var http = require('http');
var express = require('express');

var app  = express();

app.use(function (req, res, next){
   console.log('In comes a', req.method, 'to', req.url);
   next(); 
});

app.use(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});

//http.createServer(app).listen(8080);//long hand
app.listen(8080);//short hand
