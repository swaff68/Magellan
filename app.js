var express = require('express');
var bodyParser = require('body-parser');
var nextLocation = require('./Controller/controller-nextLocation.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/voyage-start', nextLocation.startLocation)
app.get('/next-location', nextLocation.nextLocation)



var server = app.listen(6077, function() {
	console.log('Express server listening on port ' + server.address().port);
});
