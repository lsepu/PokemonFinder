import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async () => {
    const pokemons: any = [];
    const pokemonInfo = await getAllPokemons();

    await Promise.all(
      pokemonInfo.map(async (pokeInfo: any) => {
        const response = await fetch(pokeInfo.url);
        const formattedResponse = await response.json();
        const pokemon = {
          name: formattedResponse.name,
          types: getTypes(formattedResponse.types),
          img: formattedResponse.sprites.front_default,
        };
        pokemons.push(pokemon);
      })
    );

    return pokemons;
  }
);

const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
  const formattedResponse = await response.json();
  return formattedResponse.results;
};

export const getTypes = (typesObject: any) => {
  const types: any = [];
  typesObject.forEach((typeObj: any) => {
    types.push(typeObj.type.name);
  });
  return types;
};
