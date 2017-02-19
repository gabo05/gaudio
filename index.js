var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var enviroment = process.env.ENVT || 'PROD';

if(enviroment === 'PROD'){
    app.use('/css', express.static(__dirname + '/app/dist/css'));
    app.use('/js', express.static(__dirname + '/app/dist/js'));
}else{
    app.use('/css', express.static(__dirname + '/app/css'));
    app.use('/js', express.static(__dirname + '/app/js'));
}
app.use('/lib/css', express.static(__dirname + '/app/lib/css'));
app.use('/lib/js', express.static(__dirname + '/app/lib/js'));
app.use('/lib/fonts', express.static(__dirname + '/app/lib/fonts'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/app/views/index.html');
});

io.on('connection', function(socket){
	
});

http.listen(port, function(){
	console.log("http server listening on %d", port)
});