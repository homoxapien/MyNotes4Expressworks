var express = require('express');

var app = express();

app.get('/search', function (req ,res){
	//var ans = {results: req.query.results,
	//			type: req.query.type, 
	//			page: req.query.page};
	//res.send(ans);
	//Unless you know evey parameters beforehand
	res.send(req.query);
});

app.listen(process.argv[2]);
