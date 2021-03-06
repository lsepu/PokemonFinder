import { createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./actions";

interface pokemonState {
  name: string;
  types: string[];
  img: string;
}

interface IPokemon {
  pokemons: pokemonState[];
}

const initialState: IPokemon = {
  pokemons: [
    {
      name: "",
      types: [""],
      img: "",
    },
  ],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    clearPokemons: (state) => {
      state.pokemons = [...initialState.pokemons]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      });
  }
});

export const { clearPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export type { IPokemon, pokemonState};
