export class ClassDate {
  //publico por padrao
  day: number;
  public mounth: number;
  year: number;

  constructor(day: number = 1, mouth: number = 1, year: number = 1970) {
    this.day = day;
    this.mounth = mouth;
    this.year = year;
  }
}

const birthDay = new ClassDate(1, 1, 2002);
birthDay.day = 28;
console.log(birthDay);

const marriage = new ClassDate();
marriage.year = 2017;

//////////////////////////////////////////////////////////////////

class ClassDateSecondForm {
  constructor(
    public day: number = 1,
    public mouth: number = 1,
    public year: number = 1970
  ) {}
}

const birthDaySecondForm = new ClassDateSecondForm(1, 1, 2002);
birthDaySecondForm.day = 28;
console.log(birthDaySecondForm);

const marriageSecondForm = new ClassDateSecondForm();
marriageSecondForm.year = 2017;

///////////////////////////////////////////////////////////////////

class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0
  ) {}

  public toString(): string {
    return `Nome: ${this.name} | Preço: ${this.priceWithDiscount()}`;
  }

  public priceWithDiscount(): number {
    return this.price - this.price * this.discount;
  }
}

const product1 = new Product("Shampoo", 22, 0.1);
const product2 = new Product("Soap", 7.5);

console.log(product1.toString());

///////////////////////////////////////////////////////

class Car {
  private currentSpeed: number = 0;
  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 200
  ) {}

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta;
    const isNewSpeedValid = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    isNewSpeedValid
      ? (this.currentSpeed = newSpeed)
      : (this.currentSpeed = delta > 0 ? this.maxSpeed : 0);

    return this.currentSpeed;
  }

  public accelerate(): number {
    return this.changeSpeed(5);
  }
  public brake(): number {
    return this.changeSpeed(-5);
  }
}

const car = new Car("Ford", "Ka", 185);

Array(50)
  .fill(0)
  .forEach(() => car.accelerate());

console.log(car.accelerate());
console.log(car.brake());

//////////////////////////////////////////////////////////

class Ferrari extends Car {
  public accelerate(): number {
    return this.changeSpeed(20);
  }
  public brake(): number {
    return this.changeSpeed(-15);
  }
}

const f40 = new Ferrari("Ferrari", "F40", 324);

console.log();

//////////////////////////////////////////////////

class Person {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    value >= 0 && value <= 120 ? (this._idade = value) : undefined;
  }
}

const person1 = new Person();

person1.idade = 10;
console.log(person1);
person1.idade = -1;
console.log(person1.idade);

//Static
///////////////////////////////////////////////////////
class StaticMath {
  //atributos agr pertencem a classe e nao a instancia da mesma
  static PI: number = 3.1416;

  static circleArea(radius: number): number {
    return this.PI * Math.pow(radius, 2);
  }
}

console.log(StaticMath.circleArea(4));

abstract class X {
  abstract y(value: number): number; //metodos abstratos
  w(value: number): void {
    console.log(value);
  }
}
// console.log(new X());

abstract class Calculate {
  protected _resultado: number = 0;

  abstract execute(...values: number[]): void;

  get resultado(): number {
    return this._resultado;
  }
}

class Add extends Calculate {
  execute(...values: number[]): void {
    this._resultado = values.reduce((acc, cur) => acc + cur);
  }
}
class Multiply extends Calculate {
  execute(...values: number[]): void {
    this._resultado = values.reduce((acc, cur) => acc * cur);
  }
}

const calc1 = new Add();
calc1.execute(2, 3, 4);
console.log(calc1.resultado);

const calc2 = new Multiply();
calc2.execute(2, 3, 4);
console.log(calc2.resultado);

//Singleton

class Single {
  private static instance: Single = new Single();
  private constructor() {}

  static getInstance(): Single {
    return Single.instance;
  }

  now() {
    return new Date();
  }
}

// const wrong = new Single();

console.log(Single.getInstance().now());

//somente leitura

class Airplane {
  public readonly model: string;
  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const turboHelice = new Airplane("Tu-114", "PT-ABC");
// turboHelice.model = "DC-8";
// turboHelice.prefix = "PT-D";

console.log(turboHelice);
