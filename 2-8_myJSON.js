var express = require('express');
var fs = require('fs');

var app = express();
app.get('/books', function(req, res){
	fs.readFile(req.query.path, function(err, content){
	    if(err){
	        console.error(err);
	    }
	    else{
	        res.send(JSON.parse(content));
	    }
	});
});
app.listen(8080);
