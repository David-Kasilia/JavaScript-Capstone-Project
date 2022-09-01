// populating the html container for the pokemon
import showModal from './comments.js';

const modal = document.getElementById('modal');

const createPokemonCard = (pokemon, likeObj) => {
  const pokeContainer = document.getElementById('poke-container');
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const comments = document.createElement('button');
  comments.classList.add('comments-btn');
  comments.innerText = 'Comments';
  comments.setAttribute('id', 'comments');
  comments.addEventListener('click', () => {
    modal.style.display = 'flex';
    showModal(pokemon);
  });

  const likes = document.createElement('h3');
  likes.setAttribute('id', 'likes');
  likes.classList.add('likes');
  likes.innerText = `likes: ${likeObj ? likeObj.likes : 0}`;

  const pokeInnerHTML = `
  <div class="${pokemon.id} img-container">
  <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png">
  </div>
<div class="info">
<h3 class="poke-name">${name} <span class="material-symbols-outlined">
favorite
</span> </h3>
</div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;
  pokemonEl.append(comments);
  comments.parentNode.insertBefore(likes, comments);

  pokeContainer.appendChild(pokemonEl);
};

export default createPokemonCard;
