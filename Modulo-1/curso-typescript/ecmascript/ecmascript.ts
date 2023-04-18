//let e const
var canDo = "?";
console.log(canDo);

let isCold = true;

if (isCold) {
  let action = "Coloque um casaco";
  console.log(action);
}

const cpf: string = "123.456.789-00";
//cpf = "teste";
console.log(cpf);

var segredo = "externo";
const revelar = () => {
  var segredo = "interno";
  console.log(segredo);
};
console.log(segredo);
revelar();

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}
// console.log(i);

//arrow function

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(1, 2));

const sub = (n1: number, n2: number) => n1 + n2;

console.log(sub(3, 2));

const sayOla = () => console.log("Ola!");
sayOla();

const sayHiToSomebody = (pessoa: string) => console.log("Ola " + pessoa);
sayHiToSomebody("Joao");

//this

// function normalWithThis() {
// console.log(this);
// }
// const normalWithThisEspecial = normalWithThis.bind({ nome: "Ana" });

// const arrowWithThis = () => console.log(this);
// const arrowWithThisEspecial = arrowWithThis.bind({ nome: "Ana" });

//parametro padrao

const regressive = (start: number = 5, end: number = start - 5) => {
  console.log(start);
  while (start > end) {
    start--;
    console.log(start);
  }
  console.log("Fim");
};

regressive();

//spread
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));

const classA: string[] = ["Ana", "Paulo", "Jose"];
const classB: string[] = ["Fernando", "Juca", "Leandro", ...classA];

console.log(classB);

// rest
const returnArray = (arg1: number, arg2: number): number[] => [arg1, arg2];

const returnArrayWithRest = (...args: number[]): number[] => args;

console.log(returnArrayWithRest(1, 2, 3, 4, 5, 6, 7, 8));

//rest e spread com tupla

const tuplaRestSpread: [number, string, boolean] = [1, "abc", false];

const tuplaArg1 = (a: number, b: string, c: boolean) =>
  console.log(`1: ${a} ${b} ${c}`);

tuplaArg1(...tuplaRestSpread);

const tuplaArg2 = (...args: [number, string, boolean]) =>
  console.log(`2: ${args[0]} ${args[1]} ${args[2]}`);

tuplaArg2(...tuplaRestSpread);

//destructuring (array)

const person = ["Joao da Silva", 21];
// const nome = person[0];
// const idade = person[1];

const [personName, personAge] = person;
console.log(personName, personAge);

const [w, z] = [1, 2];

//destructuring (objetps)

const item = {
  name: "SSD 240GB",
  price: 200,
  characteristics: {
    isImported: true,
  },
};

const {
  name: n, //key:nome da constante que vai receber o valor
  price: p,
  characteristics: { isImported: i },
} = item;
console.log(n, p, i);

//template string

const string1: string = "suportCoder";
const string2: string = "91";
const finalString: string =
  "Boas vindas " + string1 + " Notificacoes: " + string2;
console.log(finalString);

const finalStringTemplate: string = `
Boas Vindas: ${string1}
Notificacoes: ${parseInt(string2) > 9 ? "+9" : string2}
`;
console.log(finalStringTemplate);
