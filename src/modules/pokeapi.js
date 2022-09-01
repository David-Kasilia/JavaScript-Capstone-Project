// function to get pokemon
import createPokemonCard from './content.js';

const getPokemon = async (id, likes) => {
  // base for the api to get the pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // fetch data
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon, likes);
};

export default getPokemon;