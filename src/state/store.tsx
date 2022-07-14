import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import pokemonReducer from "./pokemon/pokemonSlice";
import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});


export default store;
export const persistor = persistStore(store);
type AppDispatch = typeof store.dispatch;
type stateType = ReturnType<typeof store.getState>;
export type { stateType, AppDispatch };
