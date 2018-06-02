//the problem is how can i fire a put req to it?
var express = require('express');
var app = express();

app.put('/message/:id', function (req, res){
    res.end(require('crypto').createHash('sha1')
        .update(new Date().toDateString() + req.params.id).digest('hex'));
});

app.listen(8080);
