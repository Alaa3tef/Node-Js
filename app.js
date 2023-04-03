var express = require('express');
var app = express();

app.use('/', function(req, res, next){
		console.log('Request Url:' + req.url);
		next()
});

app.get('/', function(req, res) {
    //“http://localhost:3000/assets/style.css”
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('Home');
});

app.listen(3000);