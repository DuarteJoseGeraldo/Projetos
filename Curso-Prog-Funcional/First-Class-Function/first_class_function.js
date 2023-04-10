/*Diz-se que uma linguagem de programação
possui funçoes de porimeira classe quando funçoes nessa
linguagem sao tratadas como qualquer outra variavel */

const x = 3;
const y = (txt) => {
  return `Esse é o texto: ${txt}`;
};

const z = () => console.log("ZZZzzzZzzZZ");

console.log(x);

console.log(y("ola"));

z();
