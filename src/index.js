import './index.css';
import getPokemon from './modules/pokeapi.js';

const modal = document.getElementById('modal');
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// function to fetch pokemon

const pokemonNumber = 20;
const fetchPokemons = async () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pokemonNumber; i++) {
    getPokemon(i);
  }
};

fetchPokemons();
