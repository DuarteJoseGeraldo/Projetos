import { ClassDate } from "../classes/classes";
const echo = (object: any) => object;

console.log(echo("Joao").length);
console.log(echo(27).length);
console.log(echo({ name: "Joao", age: 27 }));

//usando generics

const echoWithGeneric = <T>(obj: T): T => obj;

console.log(echoWithGeneric("Joao").length);
// console.log(echoWithGeneric(27).length);
console.log(echoWithGeneric({ name: "Joao", age: 27 }));

//generic com array
const arr: Array<number> = [1, 2, 3, 4, 5];
arr.push(4.4);
// arr.push("string");
arr.push(12);
console.log(arr);

const printArr = <T>(args: T[]) => args.forEach((curr) => console.log(curr));

printArr([1, 2, 3, 4, 5, 6]);
printArr<number>([1, 2, 3, 4]);
printArr<string>(["a", "b", "c"]);

type Student = { name: string; age: number };

printArr<Student>([
  { name: "Joao", age: 21 },
  { name: "Maria", age: 22 },
]);

//Tipo Função com Generics
type Echo = <T>(data: T) => T;
const callEcho: Echo = echoWithGeneric;
console.log(callEcho<string>("Jorge"));

//Classe com generic
abstract class BinaryOperation<T, R> {
  constructor(public operator1: T, public operator2: T) {}
  abstract execute(): R;
}

class BinarySum extends BinaryOperation<number, number> {
  public execute = (): number => this.operator1 + this.operator2;
}

console.log(new BinarySum(3, 4).execute());
class SubData extends BinaryOperation<ClassDate, string> {
  //ClassDate sao os valores e string o retorno
  getTime = (date: ClassDate): number => {
    let { day, mounth, year } = date;
    return new Date(`${mounth}/${day}/${year}`).getTime();
  };

  execute = (): string => {
    const t1 = this.getTime(this.operator1);
    const t2 = this.getTime(this.operator2);
    const diference = Math.abs(t1 - t2);
    const dayValue = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diference / dayValue)} dia(s).`;
  };
}
const d1 = new ClassDate(1, 1, 2023);
const d2 = new ClassDate(1, 1, 2022);
console.log(new SubData(d1, d2).execute());
