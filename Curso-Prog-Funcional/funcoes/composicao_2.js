// const composicao = (fn1, fn2) => {
//   return (value) => {
//     return f2(f1(value));
//   };
// };

const composicao = (...fns) => {
  //recebe inumeras funções
  return (value) => {
    return fns.reduce(async (acc, fn) => {
      //com o reduce ele a proxima função sempre recebe o resultado da anterior.
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else return fn(acc);
    }, value);
  };
};

const shout = (txt) => txt.toUpperCase();
const emphasize = (txt) => `${txt}!!!`;
const slow = (txt) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(txt.split("").join(" "));
    }, 3000);
  });
};

const exagerado = composicao(shout, emphasize, slow);
const menosExagerado = composicao(shout, emphasize);

exagerado("para").then(console.log);
menosExagerado("cuidado").then(console.log);
