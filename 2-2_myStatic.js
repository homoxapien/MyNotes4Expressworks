var express = require('express');

var app = express();

app.use(express.static('/home/ec2-user/environment/myworks/static'));

app.listen(8080);//On Cloud9, local server always listens to port 8080.
