var http = require('http');

var server = http.createServer(function (req, res){

	if(req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Welcome to the homepage');
	}
	else if(req.url === '/about'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Welcome to the about page');
	}
	else{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('Page Not Found')
	}
  
});

server.listen(8080, '0.0.0.0');
