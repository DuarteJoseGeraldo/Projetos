function goodMornig() {
  console.log("Good Mornig");
}

const goodAfternon = function () {
  console.log("Good Afternoon");
};

//passando uma função como parametro
function executeAnything(fn) {
  if (typeof fn == "function") {
    fn();
  }
}

executeAnything(3);
executeAnything(goodMornig);
executeAnything(goodAfternon);

//retornar uma função a partir de outra

function pow(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const base2 = pow(2); /*base 2 recebe a função de retorno que ja determina a 
base como 2 e seu parametro sera o expoente*/
console.log(base2(8));
