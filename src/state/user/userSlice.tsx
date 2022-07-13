
import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    name: string;
    logged: boolean;
}

const initialState : IUser = {
    name: "Luis",
    logged: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.logged = true;
        },
        logout: (state) => {
            state.logged = false;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export type { IUser };