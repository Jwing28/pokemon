import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const PokemonCard = ({ pokemon }) => (
  <Card style={{ width: "200px", padding: "10px" }}>
    <img src={pokemon.sprites && pokemon.sprites.front_default} alt="pokemon" />
    <Typography variant="h4">{pokemon.name}</Typography>
    <Typography variant="h6">Height: {pokemon.height}</Typography>
    <Typography variant="h6">Weight: {pokemon.weight}</Typography>
    <Typography variant="h6">Experience: {pokemon.base_experience}</Typography>
  </Card>
);

export default PokemonCard;
