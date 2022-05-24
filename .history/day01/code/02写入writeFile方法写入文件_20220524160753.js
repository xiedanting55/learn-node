/*
 * @Author: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @Date: 2022-05-24 16:06:56
 * @LastEditors: DESKTOP-GJB4OJ4\ZH 974193605@qq.com
 * @LastEditTime: 2022-05-24 16:07:52
 * @FilePath: \imadsd:\github\learn-node\day01\code\02写入writeFile方法写入文件.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');

fs.writeFile("./files/2.txt", "Hello Node", (err, data)=> {
    console.log(err);
    console.log(data);
})