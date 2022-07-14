import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import pokemonReducer from "./pokemon/pokemonSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['pokemon']
};

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});


export default store;
export const persistor = persistStore(store);
type AppDispatch = typeof store.dispatch;
type stateType = ReturnType<typeof store.getState>;
export type { stateType, AppDispatch };
