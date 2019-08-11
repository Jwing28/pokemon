import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

import { getRandomPokemon } from "../actions";
import PokemonCard from "../components/PokemonCard";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const PokemonPage = () => {
  const { pokemons, random } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Got 2 catch em all...Pokemon!</Typography>
        </Toolbar>
      </AppBar>

      {pokemons.length ? (
        <Grid
          justify="center"
          alignItems="center"
          style={{ margin: "150px 0 10px 0" }}
          container
        >
          {pokemons.map((pokemon, idx) => (
            <PokemonCard pokemon={pokemon} key={idx} />
          ))}
          <PokemonCard pokemon={random} />
        </Grid>
      ) : (
        <h1>Loading Pokemons...</h1>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(getRandomPokemon())}
      >
        Random Pokemon
      </Button>
    </div>
  );
};

export default PokemonPage;
