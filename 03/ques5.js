const { log } = require('console');
const fs  = require('fs') ;

let filePath = './Nodejs_architecture.txt'  ;

fs.unlink(filePath , function(err){
    if(err){
      return  console.error(err);
    }
    console.log(`The ${filePath} file is deleted sucessfully .`);
})

