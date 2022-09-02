import pokemonCounter from '../__mocks__/pokemonCounter.js';
import pokemonData from '../__mocks__/pokemonData.js';

describe('Testing pokemonCounterFunction', () => {
  it('should return the correct number of pokemon', () => {
    const count = pokemonCounter(pokemonData);
    expect(count).toBe(8);
  });

  it('should have a length of greater than 0', () => {
    const value = 0;

    const count = pokemonCounter(pokemonData);

    expect(count).toBeGreaterThan(value);
  });
});
