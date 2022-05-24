const fs = require('fs');

fs.readFile("./files/成绩.txt", "utf8", (err, data)=> {
    if(err) throw err;
    if(data) {
        var oldArr = data.split(" ");
        var newArr = [];
        oldArr.forEach(v=> {
            newArr.push(v.replace("=",":"))
        })
        
        console.log(newArr.join("\n"))
        // fs.writeFile("./files/成绩-ok.txt", data, (fserr, fsdata)=> {
        //     if(fserr) throw fserr;
        //     console.log("写入成功")
        // })
    }
    // console.log(data);
})