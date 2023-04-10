const numbers2 = [4, 8, 3, 2, 9, 1, 9, 3];

//#1 - Dados mutaveis

// let total = 0;
// for (let i; i < numbers2.length; i++) {
//   total += numbers2[i];
// }
// console.log(numbers2);

//#2 - reduce
// const total = numbers2.reduce((acc, curr) => acc + curr);
// console.log(total);

//#3 - Recursividade
// const sum = (array, total = 0) => {
//   if (!array) {
//     return total;
//   } else {
//     return sum(array.slice(1), total + array[0]);
//   }
// };
// const total = sum(numbers2);
