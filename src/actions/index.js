import { randomNumber } from "../utils/utils";

// Thunk functions - retrieve API data
export const getPokemon = () => {
  return dispatch => {
    (async () => {
      const bulbasaurPromise = await fetch(
        `https://pokeapi.co/api/v2/pokemon/1/`
      );
      const bulbasaur = await bulbasaurPromise.json();
      const charmanderPromise = await fetch(
        `https://pokeapi.co/api/v2/pokemon/4/`
      );
      const charmander = await charmanderPromise.json();
      const squirtlePromise = await fetch(
        `https://pokeapi.co/api/v2/pokemon/7/`
      );
      const squirtle = await squirtlePromise.json();

      dispatch(getPokemonSuccess([bulbasaur, charmander, squirtle]));
    })();
  };
};
export const getRandomPokemon = () => {
  return dispatch => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`)
      .then(result => result.json())
      .then(data => {
        dispatch(getRandomPokemonSuccess(data));
      })
      .catch(error => console.error(error));
  };
};

// Action creators
export const getPokemonSuccess = pokemons => ({
  type: "GET_POKEMONS",
  payload: pokemons
});
export const getRandomPokemonSuccess = random => ({
  type: "GET_RANDOM_POKEMON",
  payload: random
});
