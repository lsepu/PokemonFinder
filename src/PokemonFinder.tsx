import PokemonRoutes from "./routes/PokemonRoutes";
import { Provider } from "react-redux";
import store, { persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

function PokemonFinder() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PokemonRoutes />
      </PersistGate>
    </Provider>
  );
}

export default PokemonFinder;
