let carrinho = [
  { name: "Caneta", amount: 10, price: 7.99, isFragile: true },
  { name: "Impressora", amount: 1, price: 649.5, isFragile: true },
  { name: "Caderno", amount: 4, price: 27.1, isFragile: false },
  { name: "Lapis", amount: 3, price: 5.82, isFragile: false },
  { name: "Tesoura", amount: 1, price: 19.2, isFragile: true },
];

console.log(carrinho.map((item) => item.name));
