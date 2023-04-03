// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req, res){
// 	res.writeHead(200, {'content-type': "text/html"})
// 	var html = fs.readFileSync('Home.html')
//     //var css = fs.readFileSync('Home.css')
// 	res.end(html)
//     //res.end(css)
// }).listen(3000)
// console.log('here');

var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {

	if (req.url === '/') {
		res.writeHead(200, { 'content-type': "text/html" })
		var html = fs.readFileSync('Home.html')
		res.write(html)
	}
	else if (req.url === '/Login') {
		var Login = fs.readFileSync('Login.html')
		res.write(Login)
	}
	else if (req.url === '/SinUp') {
		var SinUp = fs.readFileSync('SinUp.html')
		res.write(SinUp)
	}
	else if (req.url === '/Profile') {
		var Profile = fs.readFileSync('Profile.html')
		res.write(Profile)
	}
	else {
		res.writeHead(404)
		res.write('error page not found!')
	}
	res.end()
}).listen(3000)