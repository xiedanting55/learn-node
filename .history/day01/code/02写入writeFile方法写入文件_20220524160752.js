const fs = require('fs');

fs.writeFile("./files/2.txt", "Hello Node", (err, data)=> {
    console.log(err);
    console.log(data);
})