// populating the html container for the pokemon
import showModal, { commentsShow } from './comments.js';
import addLikes from './addLikes.js';
// eslint-disable-next-line import/no-cycle
import getUpdatedLikes from '../index.js';

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
    commentsShow(pokemon.id);
  });

  const likes = document.createElement('h3');
  likes.setAttribute('id', 'likes');
  likes.classList.add('likes');
  if (likeObj) {
    const pokemonLikes = likeObj.filter((item) => item.item_id === pokemon.id);
    likes.innerText = `likes: ${pokemonLikes[0] ? pokemonLikes[0].likes : 0}`;
  } else {
    likes.innerText = 'likes: 0';
  }

  const loveIcon = document.createElement('i');
  loveIcon.setAttribute('id', 'love-icon');
  loveIcon.classList.add('love-icon', 'fa-regular', 'fa-heart', pokemon.id);

  const likeBtn = document.createElement('button');
  likeBtn.setAttribute('id', 'like');
  likeBtn.classList.add('like-btn');
  likeBtn.append(loveIcon);
  likeBtn.addEventListener('click', () => {
    addLikes(pokemon.id);
    pokeContainer.innerHTML = '';
    getUpdatedLikes();
  });

  const infoContainer = document.createElement('div');
  infoContainer.setAttribute('id', 'info');
  infoContainer.classList.add('info');

  const pokeName = document.createElement('h3');
  pokeName.setAttribute('id', 'poke-name');
  pokeName.classList.add('poke-name');
  pokeName.innerText = `${name}`;

  infoContainer.append(pokeName, likeBtn);

  const pokeInnerHTML = `
  <div class="${pokemon.id} img-container">
  <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png">
  </div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;
  pokemonEl.append(infoContainer, comments);
  comments.parentNode.insertBefore(likes, comments);

  pokeContainer.appendChild(pokemonEl);
};

export default createPokemonCard;
