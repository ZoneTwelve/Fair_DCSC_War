var fs = require("fs");
var list = [];
list.push({"name":"躲球球糞Game","href":"/fengame/1/"});
list.push({"name":"廢物小畫版","href":"/fengame/2/"});
// list.push({"name":"XSS 基礎","href":"xss-game"});
list.push({"name":"網頁安全","href":"web-security"});
list.push({"name":"太陽的資安標準 - SQL injection","href":"http://a24230928.tk/index.php"});
fs.writeFileSync("./public/game.list",JSON.stringify(list),"utf8");
console.log(list);