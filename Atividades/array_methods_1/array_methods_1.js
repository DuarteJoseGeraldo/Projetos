const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const array1 = [1, 2, 3, [1, 2, 3]];

////////////////////////-1-////////////////////////

const cloneArray = (array) => [...array];

console.log(cloneArray(array1));

////////////////////////-2-////////////////////////

const cloneWithSize = (array, size) => {
  if (size && typeof size == "number") {
    return array.slice(0, size);
  }
  return array[0];
};

console.log(cloneWithSize(array1, -3));

////////////////////////-3-////////////////////////

const concatArray = (array) =>
  array.reduce((acc, cur, i) => {
    if (i % 3 == 0 && i != 0) {
      return `${acc}.${cur}`;
    } else return acc + cur;
  }, "");

console.log(concatArray([1, 2, 3, 4, 5, 6, 7, 8]));

////////////////////////-4-////////////////////////

const untilFive = (array) => array.filter((item) => item.length <= 5);

console.log(
  untilFive([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);

////////////////////////-5-////////////////////////

const colectAgeInfo = (array) => {
  const ages = array.map((item) => item.age);
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
};

console.log(colectAgeInfo(input));
