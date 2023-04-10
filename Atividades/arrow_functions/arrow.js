console.log("///////////////////////-1-//////////////////////////\n");

function doubleANumber(number) {
  return number * 2;
}

const doubleANumberArrow = (number) => number * 2;

console.log(doubleANumber(2));
console.log(doubleANumberArrow(2));

console.log("\n///////////////////////-2-//////////////////////////\n");

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const createFullNameArrow = (firstName, lastName) => firstName + " " + lastName;

console.log(createFullName("Jose", "Duarte"));
console.log(createFullNameArrow("Jose", "Duarte"));

console.log("\n///////////////////////-3-//////////////////////////\n");

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

function calculateTheLenghtOfAString(str) {
  return `o tamanho de "${str}" é:` + str.length;
}

const calculateTheLenghtOfAStringArrow = (str) =>
  `o tamanho de "${str}" é: ` + str.length;

console.log(calculateTheLenghtOfAString(longestCityNameInTheWorld));

console.log(calculateTheLenghtOfAStringArrow(longestCityNameInTheWorld));

console.log("\n///////////////////////-4-//////////////////////////\n");

function calculateTheLenghtOfAString4(str) {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
}

const calculateTheLenghtOfAStringArrow4 = (str) => {
  console.log(`o tamanho de "${str}" é:`, str.length);
  return str.length;
};

calculateTheLenghtOfAString4("willynilly");
calculateTheLenghtOfAStringArrow4("willynilly");

console.log("\n///////////////////////-5-//////////////////////////\n");

let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

function showRandomAlert(name) {
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

const showRandomAlertArrow = (name) =>
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);

showRandomAlert("Maria");
showRandomAlertArrow("Maria");

console.log("\n///////////////////////-6-//////////////////////////\n");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

const getEvenNumbersArrow = (array) =>
  array.filter((element) => element % 2 == 0);

console.log(getEvenNumbers(numbers));
console.log(getEvenNumbersArrow(numbers));

console.log("\n///////////////////////-7-//////////////////////////\n");

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

function displayUser(user) {
  return user.name + " " + user.surname + " (" + user.age + ")";
}

const displayUserArrow = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";

console.log(displayUser(userObject));
console.log(displayUserArrow(userObject));
