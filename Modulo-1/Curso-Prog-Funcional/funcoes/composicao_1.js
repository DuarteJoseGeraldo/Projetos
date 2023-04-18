// const composicao = (fn1, fn2) => {
//   return (value) => {
//     return f2(f1(value));
//   };
// };

const composicao = (...fns) => {
  //recebe inumeras funções
  return (value) => {
    return fns.reduce((acc, fn) => {
      //com o reduce ele a proxima função sempre recebe o resultado da anterior.
      return fn(acc);
    }, value);
  };
};

const shout = (txt) => txt.toUpperCase();
const emphasize = (txt) => `${txt}!!!`;
const slow = (txt) => txt.split("").join(" ");

const exagerado = composicao(shout, emphasize, slow);
const menosExagerado = composicao(shout, emphasize);

console.log(exagerado("para"));
console.log(menosExagerado("cuidado"));
