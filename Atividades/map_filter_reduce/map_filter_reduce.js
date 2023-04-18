const array1 = [1, 2, 3];

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

// const total = (arr) => arr.reduce((acc, curr) => acc + curr);

// console.log(total(array1));

// const stringConcat = (arr) => arr.reduce((acc, curr) => acc + curr, "");

// console.log(stringConcat(array1));

const totalVeryYoungVotes = voters.reduce((acc, curr) => {
  if (curr.age < 30 && curr.voted === true) {
    return acc + 1;
  } else return acc;
}, 0);

console.log(totalVeryYoungVotes);

const shoppingSpree = wishlist.reduce((acc, cur) => acc + cur.price, 0);

console.log(shoppingSpree);

const voterResults = voters.reduce(
  (acc, curr) => {
    curr.age < 30 && curr.voted ? acc.numYoungVotes++ : undefined;
    curr.age < 30 ? acc.numYoungPeople++ : undefined;
    curr.age >= 30 && curr.age < 40 && curr.voted
      ? acc.numMidVotesPeople++
      : undefined;
    curr.age >= 30 && curr.age < 40 ? acc.numMidsPeople++ : undefined;
    curr.age > 40 && curr.voted ? acc.numOldVotesPeople++ : undefined;
    curr.age > 40 ? acc.numOldsPeople++ : undefined;
    return acc;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(voterResults);
