/*
 * @Author: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @Date: 2022-05-24 16:11:41
 * @LastEditors: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @LastEditTime: 2022-05-24 16:12:26
 * @FilePath: \imadsd:\github\learn-node\day01\code\03成绩案例.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');

fs.readFile("./files/成绩.txt", "utf8", (err, data)=> {
    console.log(data);
})