const EventEmitter = require('events');


let myeventemitter = new EventEmitter();

myeventemitter.on('logFnc', () => {
    console.log(`The Default Maximum Number of Event listeners is ${myeventemitter.getMaxListeners()}`);
});


myeventemitter.emit('logFnc');


myeventemitter.setMaxListeners(5);


myeventemitter.on('logFuncUpdated', () => {
    console.log(`The Uodated Maximum Number of Event listeners is now set to ${myeventemitter.getMaxListeners()}`);
});

myeventemitter.emit('logFuncUpdated');

