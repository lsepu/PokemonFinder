import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRoute {
  logged: boolean;
}

const PrivateRoute = ({ logged }: IPrivateRoute) => {
  if (!logged) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
