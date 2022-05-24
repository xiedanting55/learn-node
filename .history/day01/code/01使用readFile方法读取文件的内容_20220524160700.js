const fs = require('fs');

fs.readFile("./files/1.txt", "utf8", function(err, data) {
    console.log(err); //null 读取成功
    console.log(data);
});