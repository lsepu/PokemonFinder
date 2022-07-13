import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";

const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default store;

type AppDispatch = typeof store.dispatch;

type stateType = ReturnType<typeof store.getState>;

export type { stateType, AppDispatch };