import { Navigate, Outlet } from "react-router-dom";
import { ILogged } from "./PokemonRoutes";

const PrivateRoute : React.FC<ILogged> = ({ logged }) => {
  if (!logged) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
