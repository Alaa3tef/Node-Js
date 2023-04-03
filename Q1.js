var EventEmitter = require('events');
var util = require('util');

function SayHello() {
    this.Greeting = 'Hello';
}

util.inherits(SayHello, EventEmitter);

SayHello.prototype.Greet = function (name, data) {
    console.log(this.Greeting);
    console.log(name);
    this.emit('Greet', data);
}

var Greetr = new SayHello();

Greetr.on('Greet', function (data) {
    console.log('From ' + data );
})

Greetr.Greet('Alaa', 'ITI');
