const EventEmitter =  require('events')

let callBack = (arg)=>{
                console.log(`Thanks for Suscribing ${arg}`)}



const myEmitter = new EventEmitter() ;


myEmitter.addListener("suscribe" , callBack) ;

myEmitter.emit("suscribe" , "College Wallah")


myEmitter.removeListener('suscribe' , callBack ) ; 


myEmitter.emit("suscribe" , "College Wallah") ;
