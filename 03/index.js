const fs =  require('fs') ; 

let filePath = "./nodejs_architecture.txt" ;

fs.readFile(filePath, function(err , data){ 

    if(err){
        console.error(`Error is ` + err)
    }

  return  console.log(`Asynchronous Data: ` + data)

})