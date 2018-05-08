var http = require('http');
var express = require('express');

var app  = express();

app.use(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});

http.createServer(app).listen(8080);
