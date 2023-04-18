const order = (array) => {
  return [...array].sort((a, b) => a - b); //retornara uma copia do array, n causando efeitos colaterais
};

const numbers = Object.freeze([9, 6, 8, 4, 3, 2, 5, 1, 7]); //congela o objeto, noa permitindo qualquer tipo de alterção

console.log(numbers);

const numbersInOrder = order(numbers);

console.log(numbersInOrder);

//metodos de arrays são puros, n alteram o objeto original
