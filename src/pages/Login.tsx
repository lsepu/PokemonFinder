import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { login } from "../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loginUser = () => {
    dispatch(login());
    navigate("/list");
  };

  return (
    <Container style={{ marginTop: "35px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Please login to see the pokemon list
      </h2>
      <img
        width="220"
        height="220"
        src="https://www.megaidea.net/wp-content/uploads/2022/01/Pikachu-3-1024x1024.png"
        alt=""
        style={{ marginBottom: "20px"}}
      />
      <br />
      <Button style={{width:"150px"}} variant="primary" onClick={loginUser}>
        Enter
      </Button>
    </Container>
  );
};

export default Login;
