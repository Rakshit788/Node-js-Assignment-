const fs = require('fs');

let filePath = "./nodejs_architecture.txt";

let ExtradataToAdded = "    Compare to other server side languages Nodejs has a distinct advantage .  Its async model and  non blocking I/O operations improve the scability and performance of web appications built on other frameworks , Node js can easily handle multiple clients request without requiring multiple threads consuming less memory and resources . IT is highly scalable and provides high performance . Node js is also highly scalable and providies high performance . Node js is also flexibile with multiple frameworks and  makes development  process easier compared to other server side languages . Node js is a distinct advantages . Node js can easily handle multiple client requests without requiring  multiple threads , consuming less memory and resources . Aditionally it is highly scalable and provides hiigh performance . Node js is also flexifle with multiple fraeworks and makes development process easier . " 

fs.appendFile(filePath , ExtradataToAdded, function(err){
    if(err){
      return  console.error(err)
    }
    console.log(`Data is added sucessfully`)

})
