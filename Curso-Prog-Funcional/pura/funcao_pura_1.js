/*Função pura é uma função em que o valor de retorno
é determinado APENAS pelos seus valores de entrada,
sem efeitos colaterais observaveis, sempre retorna o mesmo resultado
para uma mesma entrada*/

// const PI = 3.14;

//pura ou impura?
//impura: PI é um valor externo;

const circleAreaImpura = (raio) => {
  return raio ** 2 * Math.PI; //msm se usar o Math.PI, continua impura
};
const circleAreaPura = (raio, pi) => {
  return raio ** 2 * pi; //os valores de saida sao determinados pelos seus valores de entrada
};
console.log(circleAreaImpura(10));
console.log(circleAreaPura(10, Math.PI));
