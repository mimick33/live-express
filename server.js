console.log(process.env.NODE_ENV)

var path = require('path');

var browserify = require('browserify-middleware');
var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use('/js', browserify(__dirname + '/src'))

app.get('/', function(req, res) {
	res.render(path.join(__dirname, 'src/pug/index.pug'));
});

app.listen(8080);