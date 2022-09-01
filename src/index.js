import './index.css';
import getLikes from './modules/likesApi.js';
import spa from './modules/spa.js';
import getPokemon from './modules/pokeapi.js';

// function to fetch pokemon

const pokemonNumber = 24;
const fetchPokemons = async () => {
  const data = await getLikes();

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pokemonNumber; i++) {
    getPokemon(i, data[i - 1]);
  }
};

fetchPokemons();

const count = document.querySelector('.home');
count.innerText = `HOME (${pokemonNumber})`;

spa();
