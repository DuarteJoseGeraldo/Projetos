//biblioteca file sistem
const fs = require("fs");
// biblioteca path
const path = require("path");

const caminho = path.join(__dirname, "data.txt");
/*dirname pega todo o caminho do diretorio atual, 
e o join concatena com o arquivo que desejo acessar nesse caminho*/

const showContent = (_, content) => console.log(content.toString());
// _ como nome de parametro é convenção para informar que este parametro não sera usado

console.log("inicio");
fs.readFile(caminho, showContent);
fs.readFile(caminho, (_, content) => console.log(content.toString()));
console.log("fim");

console.log("inicio Sync");
const contentSync = fs.readFileSync(caminho);
console.log(contentSync.toString());
console.log("fim Sync");
