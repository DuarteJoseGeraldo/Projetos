/*Funçoes que operam em outras funções
tomando-as como argumentos ou retornando-as
são chamadas de higher-order functions*/

const execute = (fn, ...params) => {
  return function (text) {
    return `${text} ${fn(...params)}`;
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};

const multiply = (a, b) => {
  return a * b;
};
/////////////////////////funtion(text)
const r1 = execute(sum, 4, 5, 6)("O resultado da soma é");
const r2 = execute(multiply, 30, 5)("O resultado da multiplicação é");

console.log(r1);
console.log(r2);
