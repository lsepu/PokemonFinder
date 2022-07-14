import { Navigate, Outlet } from "react-router-dom";

//TODO: CHANGE ANY TYPE
const PrivateRoute = ({ logged, redirectPath = "/login" } : any) => {
  if (!logged) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
