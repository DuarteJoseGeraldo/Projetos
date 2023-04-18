/*Função pura é uma função em que o valor de retorno
é determinado APENAS pelos seus valores de entrada,
sem efeitos colaterais observaveis*/

let qtdOfExecutes = 0;
//pura
const sum = (a, b) => {
  qtdOfExecutes++; //efeito colateral observavel, logo nao é mais pura
  return a + b;
};
console.log(qtdOfExecutes);
console.log(sum(69, 31));
console.log(sum(69, 31));
console.log(sum(69, 31));
console.log(sum(69, 31));
console.log(sum(69, 31));
console.log(qtdOfExecutes);
