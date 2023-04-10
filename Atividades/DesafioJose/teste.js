import { pokemons } from "./data.js";
import { translate } from "./translate.js";

// let pesquisa = (nome) =>
//   pokemons.map((pokemon) => {
//     if (pokemon.name == nome) {
//       return pokemon;
//     }
//   });

let searchPokemon = (name) =>
  pokemons.filter((pokemon) => {
    if (pokemon.name == name) {
      return pokemon;
    }
  });
let listByType = (type) =>
  pokemons.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
      return pokemon;
    }
  });

const listAllTypes = pokemons.reduce((acc, cur) => {
  cur.type.map((type) => {
    if (!acc.includes(type)) {
      acc.push(type);
    }
  });
  return acc;
}, []);

const translateTypes = pokemons.map((pokemon) => {
  pokemon.type = pokemon.type.map((type) => translate[type]);
  return pokemon;
});

console.log(searchPokemon("ivysaur"));

console.log(listByType("grass"));

console.log(listAllTypes); //Usei pra listar todos os tipos do data.js pra traduzir depois

console.log(translateTypes);
