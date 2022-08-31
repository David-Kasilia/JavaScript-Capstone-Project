// populating the html container for the pokemon

const createPokemonCard = (pokemon) => {
  const pokeContainer = document.getElementById('poke-container');
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
  <div class="img-container">
  <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png">
  </div>
<div class="info">
<h3 class="poke-name">${name} <span class="material-symbols-outlined">
favorite
</span> </h3>
<button id="comments" class="comments-btn">Comments</buttons>
</div>
  `;

  pokemonEl.innerHTML = pokeInnerHTML;

  pokeContainer.appendChild(pokemonEl);
};

export default createPokemonCard;