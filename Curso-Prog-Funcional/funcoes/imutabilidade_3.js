const person = {
  name: "Maria",
  height: 1.76,
  city: "São Paulo",
  address: {
    street: "Rua Oito",
  },
};

//Atribuição por referencia
const person2 = person;

//Passagem por referencia (Impura)
const updatePerson = (p) => {
  const newPerson = { ...p };
  newPerson.name = "Joao";
  newPerson.city = "Fortaleza";
  newPerson.address.street = "Rua Nove";
  return newPerson;
};

const newPerson = updatePerson(person);

console.log(person);
console.log(newPerson);

//Atribuição por valor

let a = 3;
let b = a; //mesmo assim os valores sao independentes
a++;
console.log(b);
