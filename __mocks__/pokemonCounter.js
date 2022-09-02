export default (pokemonData) => {
  let count = 0;
  if (pokemonData && pokemonData.length > 0) {
    count = pokemonData.length;
  }
  return count;
};
