var express = require('express');

var app = express();

//console.log(process.argv[3]);

app.use(express.static(process.argv[3]));
//express.static() is the function in express that serves a static file

app.listen(process.argv[2]);
