import { createSlice } from '@reduxjs/toolkit';

interface IPokemon {
    name: string;
}

const initialState : IPokemon = {
    name: "",
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
    }
})


export default pokemonSlice.reducer;

export type { IPokemon };