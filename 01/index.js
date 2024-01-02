// const fs = require('fs');


// const filePath = './node_architecture.txt'

// let infoToADD = "Node js is a platfornm that uses V8 Javascript engine allowing the developers to use javascript to create severside application that generate dynamic content for  web applications . What set node aparts are its event driven and non blocking io features.  "


// fs.writeFile( filePath, infoToADD, function(err){
//     if(err){
//        return console.error( `Error is :` + err)
//     }
    
//     console.log(`Dta is written sucessfully`) 
//  }
    
//     )


const fs = require('fs');

const filePath = 'nodejs_architecture.txt';
const infoToAdd = "Node.js is a platform that uses the V8 JavaScript engine, allowing developers to use JavaScript to create server-side applications that generate dynamic content for web applications. Node.js is known for its event-driven and non-blocking I/O features.";

// Writing information to the nodejs_architecture.txt file
fs.writeFile(filePath, infoToAdd, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Data is written to ${filePath} successfully`);

    // Reading the content of nodejs_architecture.txt file
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }

        console.log(`Content of ${filePath}:`);
        console.log(data);
    });
});
