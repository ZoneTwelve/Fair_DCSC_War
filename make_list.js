var fs = require("fs");
var list = [];
list.push({"name":"躲球球糞Game","href":"/fengame/1/"});
// list.push({"name":"XSS 基礎","href":"xss-game"});
list.push({"name":"網頁安全","href":"web-security"});
fs.writeFileSync("./public/game.list",JSON.stringify(list),"utf8");
console.log(list);