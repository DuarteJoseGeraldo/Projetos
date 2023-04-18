import { Pokemons, pokemonsArray, PokemonsTypes } from "./data_type";
import { translate } from "./translate";

let searchPokemon = (name: string): Pokemons[] =>
  pokemonsArray.filter((pokemon) => {
    if (pokemon.name == name) {
      return pokemon;
    }
  });

let listByType = (type: string) =>
  pokemonsArray.filter((pokemon) => {
    if (pokemon.type.includes(type)) {
      return pokemon;
    }
  });

const translateTypes = (): Pokemons[] =>
  pokemonsArray.map((pokemon) => {
    pokemon.type = pokemon.type.map(
      (type) => translate[type as keyof typeof translate]
    ); // verifica se o type é uma chave do mesmo tipo das que estao dentro do objeto
    return pokemon;
  });

console.log(searchPokemon("ivysaur"));

console.log(listByType("grass"));

console.log(translateTypes());
