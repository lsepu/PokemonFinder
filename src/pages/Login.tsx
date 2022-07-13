import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { login } from "../state/user/userSlice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loginUser = () => {
    dispatch(login());
  };

  return (
    <div>
      <button onClick={loginUser}>Enter</button>
    </div>
  );
};

export default Login;
