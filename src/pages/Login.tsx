import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { login } from "../state/user/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loginUser = () => {
    dispatch(login());
    navigate("/list");
  };

  return (
    <div>
      <button onClick={loginUser}>Enter</button>
    </div>
  );
};

export default Login;
