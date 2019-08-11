const initialState = {
  pokemons: [],
  random: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload
      };
    case "GET_RANDOM_POKEMON":
      return {
        ...state,
        random: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
