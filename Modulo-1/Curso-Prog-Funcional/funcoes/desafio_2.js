let carrinho = [
  { name: "Caneta", amount: 10, price: 7.99, isFragile: true },
  { name: "Impressora", amount: 1, price: 649.5, isFragile: true },
  { name: "Caderno", amount: 4, price: 27.1, isFragile: false },
  { name: "Lapis", amount: 3, price: 5.82, isFragile: false },
  { name: "Tesoura", amount: 1, price: 19.2, isFragile: true },
];

/*
1- Todos que sao frageis
2- Total a ser por cada conjunto de item
3- media dos totais
*/

const fragileItens = () => carrinho.filter((item) => item.isFragile);

const addTotal = () =>
  carrinho.map((item) => {
    item.total = item.amount * item.price;
    return item;
  });
////////////Atualizar os objetos com o total/////////////
// carrinho = addTotal();
/////////////////////////////////////////////////////////
const averageOfTotal = () =>
  addTotal().reduce((acc, cur) => (acc += cur.total), 0) / carrinho.length;

console.log(fragileItens());
console.log(addTotal());
console.log(`Media dos totais dos produtos: ${averageOfTotal()}`);

/*
INTERPRETEI ERRADO O DESAFIO, A SEGUIR A FORMA ESPERADA PELO LEO
era esperada uma unica função que retornasse a quantidade de itens frageis comprados, o total a pagar e a media desse valor
*/

const media = () => {
  return carrinho
    .filter((item) => item.isFragile)
    .map((item) => item.amount * item.price)
    .reduce(
      (acc, curr) => {
        const novaQtd = acc.qtd + 1;
        const novoTotal = acc.total + curr;
        return {
          qtd: novaQtd,
          total: novoTotal,
          average: Number((novoTotal / novaQtd).toFixed(2)),
        };
      },
      { qtd: 0, total: 0, average: 0 }
    );
};

console.log(media());
