var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res){
	fs.readFile(process.argv[3], function(err, content){
	    if(err){
	        console.error(err);
	    }
	    else{
	        res.send(JSON.parse(content));
	    }
	});
});

app.listen(process.argv[2]);
console.log(process.argv[3]);//To know the path so I can apply when DIY
