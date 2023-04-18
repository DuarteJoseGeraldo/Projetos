// String
let myName = "Jose";
console.log(myName);
// nameTest = 29;

//Number
let age = 21;
// age= "ana";
console.log(age);

//boolean
let hasHobbies = true;
//hasHobbies = 2;
console.log(hasHobbies);

//tipos explicitos
let myAge: number;
myAge = 21;
console.log(typeof myAge);
//myAge = '27';

//array
let hobbies: any[] = ["Cozinhar", "Malhar"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

//tuplas
//endereco/numero/complemento
let address: [string, number, string] = ["Av Principal", 99, ""];
console.log(address);

address = ["Av Principal", 99, "Bloco C"];
console.log(address);

//enums

enum colors {
  gray, //0
  green = 100, //100
  blue = 10, //10
  orange,
  yellow,
  red = 100,
}

let myColor: colors = colors.green;
console.log(myColor);
console.log(colors.blue);
console.log(colors.orange, colors.yellow);
console.log(colors.green, colors.red);

//any

let carro: any = "BMW";
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

//funcoes
const returnMyName = (): string => myName;

console.log(returnMyName());

const sayHi = (): void => console.log("Hi!");

sayHi();

const multiply = (numA: number, numB: number): number => numA * numB;

console.log(multiply(4, 5));

//tipo funcao

let calculus: (x: number, y: number) => number;
calculus = multiply;
console.log(calculus(2, 3));

//objetos

let user: { firstName: string; age: number } = {
  firstName: "Joao",
  age: 21,
};

console.log(user);

user = { firstName: "Maria", age: 32 };

console.log(user);

//Desafio

let employee: {
  supervisors: string[];
  punchTheClock: (time: number) => string;
};

employee = {
  supervisors: ["Davi", "Carla", "Carlos"],
  punchTheClock: (time: number): string =>
    time <= 8 ? "Ponto normal" : "Fora do Horario",
};

console.log(employee.punchTheClock(8));
console.log(employee.punchTheClock(9));

//type

type employeeType = {
  supervisors: string[];
  punchTheClock: (time: number) => string;
};

//Union Types

let grade: number | string;
grade = 10;
console.log(`Minha nota é: ${grade}`);
grade = "10";
console.log(`Minha nota é: ${grade}`);

//checando tipos

let value = 10;

if (typeof value === "number") {
  console.log(`Is a Nunber`);
} else {
  console.log(`Is not a number`);
}

//never
const throwErrorMensage = (msg: string): never => {
  throw new Error(msg);
};

const product = {
  name: "Sabao",
  price: 3,
  validate() {
    if (!this.name || this.name.trim().length == 0) {
      throwErrorMensage("precisa ter um nome");
    }
    if (this.price <= 0) {
      throwErrorMensage("preco invalido");
    }
  },
};

product.validate();

// null opcional

let optionalNull: null | string;
optionalNull = "not null";
optionalNull = null;

type contact = {
  name: string;
  phone1: string;
  phone2: string | null;
};

const contact1: contact = {
  name: "fulano",
  phone1: "12345678",
  phone2: null,
};

console.log(contact1.name);
console.log(contact1.phone1);
console.log(contact1.phone2);

let canBeNull = null;
console.log(canBeNull);
canBeNull = 12;
console.log(canBeNull);
canBeNull = "abc";
console.log(canBeNull);
canBeNull = null;

//desafio 2
type bankAccount = {
  saldo: number;
  depositValue: (value: number) => void;
};

const account1: bankAccount = {
  saldo: 1200,
  depositValue(value: number): void {
    this.saldo += value;
  },
};

type client = {
  name: string;
  bankAccount: bankAccount;
  constacts: string[];
};

const client1: client = {
  name: "Joao",
  bankAccount: account1,
  constacts: ["12345678", "87654321"],
};

client1.bankAccount.depositValue(3000);
console.log(client1);
