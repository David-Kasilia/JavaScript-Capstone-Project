import './index.css';
import getLikes from './modules/likesApi.js';
import spa from './modules/spa.js';
// eslint-disable-next-line import/no-cycle
import getPokemon from './modules/pokeapi.js';

// function to fetch pokemon

const pokemonNumber = 20;
const fetchPokemons = async () => {
  const data = await getLikes();

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pokemonNumber; i++) {
    getPokemon(i, data);
  }
};

const getUpdatedLikes = async () => {
  await fetchPokemons();
};

fetchPokemons();

const count = document.querySelector('.home');
count.innerText = `HOME (${pokemonNumber})`;

spa();

export default getUpdatedLikes;
