var http = require("http");

http.createServer(function (request, response) {
    //Send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

//Console will print the message

console.log("Server running at 127.0.0.1:8081");

var events = require('events');
var eventEmmiter = new events.EventEmitter();

//listener #1
var listener1 = function listener1() {
    console.log('listener1 executed');
}

//listener #2

var listener2 = function listener2(){
    console.log('listener 2 executed');
}

//Bind the connection event with the listener1 function
eventEmmiter.addListener('connection', listener1);

//Bind the connection event with the listener2 function
eventEmmiter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmmiter,'connection');
console.log(eventListeners + ' Listener(s) listening to the connection event');

//Fire the connection event
eventEmmiter.emit('connection');

//Remove the binding of listener1 function
eventEmmiter.removeListener('connection', listener1);
console.log('Listener1 will not listen now');

//Fire the connection event
eventEmmiter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmmiter, 'connection');
console.log(eventListeners + ' Listeners listening to connection event');

console.log('Program Ended')