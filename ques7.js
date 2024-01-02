let http = require('http')  ;

 const server =  http.createServer((req, res)=>{
if(req.url === '/'){
    res.write('<h1> I Am Happy To Learn Full Stack Web Development From Pw Skills </h1>')
}
res.end()
 })

server.listen(5000) 
console.log(`the server is running on the port 5000`);