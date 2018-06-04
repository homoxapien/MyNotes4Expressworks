var express = require('express');

var app = express();

app.get('/search', function (req ,res){
	//var ans = {results: req.query.results,
	//			type: req.query.type, 
	//			page: req.query.page};
	//res.send(ans);
	//Unless you know evey parameters beforehand
	res.send(req.query);
	//res.send(JSON) while res.end(string) and res.write(string)
});

app.listen(8080);
