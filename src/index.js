import './index.css';
import getPokemon from './modules/pokeapi.js';

// function to fetch pokemon

const pokemonNumber = 20;
const fetchPokemons = async () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pokemonNumber; i++) {
    getPokemon(i);
  }
};

fetchPokemons();
