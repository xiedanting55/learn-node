const fs = require('fs');

fs.readFile("./files/成绩.txt", "utf8", (err, data)=> {
    console.log(data);
})