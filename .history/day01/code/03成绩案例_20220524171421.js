const fs = require('fs');
const path = require('path');


// 建议path.json
// fs.readFile(__dirname + "/files/成绩.txt", "utf8", (err, data)=> {
fs.readFile(path.json(__dirname, "./files/成绩.txt"), "utf8", (err, data)=> {
    if(err) throw err;
    if(data) {
        var oldArr = data.split(" ");
        var newArr = [];
        oldArr.forEach(v=> {
            newArr.push(v.replace("=",":"))
        })
        var str = newArr.join("\r\n");
        // \r就是"回到行首"，即:\r是回车 使光标到行首
        // \n就是"到下一行"，\n是换行 使光标下移一格
        // 通常用的Enter是两个加起来的，即\r\n
        fs.writeFile("./files/成绩-ok.txt", str, (fserr, fsdata)=> {
            if(fserr) throw fserr;
            console.log("写入成功")
        })
    }
    // console.log(data);
})