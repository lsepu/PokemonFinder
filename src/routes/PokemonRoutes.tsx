import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PokemonList from "../pages/PokemonList";
import PokemonSearch from "../pages/PokemonSearch";

const PokemonRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/search" element={<PokemonSearch />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PokemonRoutes;
