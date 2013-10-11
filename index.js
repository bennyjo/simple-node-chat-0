var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var port = 80;

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', function (req, res) {
	res.render('page');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
	socket.emit('message', { message: 'Welcome to the chat!' });
	socket.on('send', function (data) {
		io.sockets.emit('message', data);
	});
});

server.listen(port);
console.log('listening on port ' + port);