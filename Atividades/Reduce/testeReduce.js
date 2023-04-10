let voters = [
  { name: "Bob", age: 30, voted: true }, //1
  { name: "Jake", age: 32, voted: true }, //2
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true }, //3
  { name: "Ed", age: 55, voted: true }, //4
  { name: "Tami", age: 54, voted: true }, //5
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true }, //6
  { name: "Jeff", age: 30, voted: true }, //7
  { name: "Zack", age: 19, voted: false },
];

const totalVotes = voters.reduce((acc, curr) => {
  if (curr.voted) return acc + 1;
  else return acc;
}, 0);

console.log(totalVotes); // 7
