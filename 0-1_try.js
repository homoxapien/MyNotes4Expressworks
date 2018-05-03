//This is the basic express.js middleware.

var http = require('http');
var express = require('express');
var app = express();

app.use(function (request, response){
        console.log('I can hear you!');

        // Build the answer
        var answer = "";
        answer += "Request URL: " + request.url + "\n";
        answer += "Request type: " + request.method + "\n";
        answer += "Request headers: " + JSON.stringify(request.headers) + "\n";

        // Send the answer
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(answer);
        response.end('Bye!\n');
});

//app.listen(1337, 'localhost'); //short-hand
http.createServer(app).listen(8080); //long-hand

console.log('Server listening at http://localhost:8080');
