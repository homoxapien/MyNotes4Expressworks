var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (req, res){
    res.end(req.body.str.split('').reverse().join(''));
    //res.end(req.body.str.split('').join(''));
});

app.listen(process.argv[2]);
