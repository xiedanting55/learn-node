/*
 * @Author: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @Date: 2022-05-24 15:52:23
 * @LastEditors: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @LastEditTime: 2022-05-24 15:53:39
 * @FilePath: \imadsd:\github\learn-node\day01\code\01.使用readFile方法读取文件的内容.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');

fs.readFile("/files/1.txt", "utf8", (err, data) => {
    console.log(err);
    console.log(data);
});