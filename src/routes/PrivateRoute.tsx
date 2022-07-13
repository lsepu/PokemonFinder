import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user, redirectPath = "/login" } : any) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
