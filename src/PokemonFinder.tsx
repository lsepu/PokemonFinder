import PokemonRoutes from "./routes/PokemonRoutes";
import { Provider } from "react-redux";
import store from "./state/store";

function PokemonFinder() {
  return (
    <Provider store={store}>
      <PokemonRoutes />
    </Provider>
  );
}

export default PokemonFinder;
