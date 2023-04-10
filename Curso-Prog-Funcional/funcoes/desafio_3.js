//biblioteca file sistem
const fs = require("fs");
// biblioteca path
const path = require("path");
const caminho = path.join(__dirname, "data.txt");

const openFile = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, content) => {
      resolve(content.toString());
    });
  });
};

openFile(caminho)
  .then((content) => content.split("\n")) // separa cada linha do documento em um array de linhas
  .then((line) => console.log(line[1]));
