var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname+'/public'));

io.on('connection', function(socket){
	
	console.log('User connected via sovket.io');
	
	socket.on('message', function(message){
		
		console.log('Message Received : '+message.text);
		
		socket.broadcast.emit('message',message);
	});
	
	socket.emit('message',{
		text:'Welcome to chat app'
	});
	
});


http.listen(PORT, function(){
	
	console.log('server started on port '+PORT);
	
});