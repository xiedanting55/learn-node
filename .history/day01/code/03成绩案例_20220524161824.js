const fs = require('fs');

fs.readFile("./files/成绩.txt", "utf8", (err, data)=> {
    if(err) throw err;
    if(data) {
        var arr = data.split(" ");
        arr.map(v=> {
            let str = v.split("=")
            if(str) {
                return `${str[0]}:${str[1]}`
            }
        })
        console.log(arr)
        // fs.writeFile("./files/成绩-ok.txt", data, (fserr, fsdata)=> {
        //     if(fserr) throw fserr;
        //     console.log("写入成功")
        // })
    }
    // console.log(data);
})