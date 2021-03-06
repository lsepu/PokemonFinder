import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Pokemon from "../pages/Pokemon";
import PokemonList from "../pages/PokemonList";
import PokemonSearch from "../pages/PokemonSearch";
import { stateType } from "../state/store";
import PrivateRoute from "./PrivateRoute";

const PokemonRoutes = () => {
  const { logged } = useSelector((state: stateType) => state.user);

  return (
    <>
      <BrowserRouter>
        <NavBar logged={logged} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={logged ? "/list" : "/login"} replace />}
          />
          <Route element={<PrivateRoute logged={logged} />}>
            <Route path="/list" element={<PokemonList />} />
            <Route path="/search" element={<PokemonSearch />} />
            <Route path="/list/:pokemon" element={<Pokemon />} />
          </Route>
          <Route path="/login" element={<Login logged={logged}/>} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export interface ILogged {
  logged: boolean;
}

export default PokemonRoutes;
