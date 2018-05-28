var express = require('express');
var stylus = require('stylus');

var app = express();
app.use(stylus.middleware('/home/ec2-user/environment/myworks/stylus'));
app.use(express.static('/home/ec2-user/environment/myworks/stylus'));//red words
//app.use(express.static('/home/ec2-user/environment/myworks/static'));//still black words

app.listen(8080);

//The result shows that it is necessary that .css and .html be in the same folder!
