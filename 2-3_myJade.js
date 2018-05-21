var express = require('express');
var app = express();

app.set('views', '/home/ec2-user/environment/myworks/jade');
app.set('view engine', 'jade');
app.get('/', function (req, res){
   res.render('index', {date: new Date().toDateString()}); 
});

app.listen(8080)
