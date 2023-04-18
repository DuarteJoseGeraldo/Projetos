interface Human {
  name: string;
  age?: number; //torna esse atributo opcional
  [prop: string]: any; //propriedade de nome e valor dinamico e nao obrogatorio
  salute(lastName: string): void;
}

const sayHello = (pessoa: Human) => console.log(`Hello ${pessoa.name}`);

const changeNameToJoana = (pessoa: Human) => (pessoa.name = "Joana");

const somebody: Human = {
  name: "Joao",
  age: 12,
  salute(lastName: string) {
    console.log(`Hello, my name is ${this.name} ${lastName}!`);
  },
};

sayHello(somebody);
changeNameToJoana(somebody);
sayHello(somebody);
// sayHello({ name: "Jonas", age: 21, altura: 1.8 });
somebody.salute("Faria");

//Usando Classes

class Client implements Human {
  //deve respeitar os atributos e metodos obrigatorios
  lastPurchase: Date = new Date(); // prop opcional de nome e tipo indefinido
  constructor(public name: string) {}
  salute(lastName: string): void {
    console.log(`Hello, my name is ${this.name} ${lastName}!`);
  }
}
const newClient = new Client("Marcos");
newClient.salute("José");
console.log(newClient.lastPurchase);

//interface em função

interface functionCalculate {
  (x: number, y: number): number; //nomes dos parametros nao sao restritos aos da interface
}

const pow: functionCalculate = (x: number, y: number): number =>
  Array(y)
    .fill(x)
    .reduce((acc, curr) => acc * curr);

console.log(pow(2, 3));

//herança

interface A {
  a(): void;
}
interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

// const testInterface = (b: B) => {};

// testInterface(new RealABC());

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}
