//arrow function
const merryChristas = () => console.log("Feliz Natal");

merryChristas();

const greeting = (name) => `Hy ${name}, How are you?`;

console.log(greeting("Maria"));

const add = (arrey) => {
  let total = 0;
  for (let n of arrey) {
    total += n;
  }
  return total;
};

const pow = (base) => (exp) => Math.pow(base, exp);
