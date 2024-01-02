const EventEmitter =  require('events')





const myEmitter = new EventEmitter() ;


myEmitter.addListener("suscribe" , (arg)=>{
         console.log(`The above Statement must print , Thanks for Suscribing ${arg}`);
})


myEmitter.emit("suscribe" , "College Wallah")

