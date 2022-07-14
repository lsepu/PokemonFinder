import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { logout } from "../state/user/userSlice";

//TODO: CHANGE ANY TYPE
const Navbar = ({ logged }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div>
      soy navbar
      {logged && <button onClick={logoutUser}>Logout</button>}
    </div>
  );
};

export default Navbar;
