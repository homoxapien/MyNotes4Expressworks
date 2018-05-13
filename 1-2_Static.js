var express = require('express');

var app = express();

//console.log(process.argv[3]);

app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);
