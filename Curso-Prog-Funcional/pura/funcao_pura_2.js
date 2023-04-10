/*Função pura é uma função em que o valor de retorno
é determinado APENAS pelos seus valores de entrada,
sem efeitos colaterais observaveis*/

const randomNumber = (min, max) => {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
  /*a função é impura pois nao tem entrada 
  e resultado deterministico e utiliza um valor externo do Math.random
  pois não é garantido que o math.random seja uma função pura, nao conheço a origem de seus dados
  */
};

console.log(randomNumber(1, 1000));
console.log(randomNumber(1, 1000));
console.log(randomNumber(1, 1000));
console.log(randomNumber(1, 1000));
console.log(randomNumber(1, 1000));
