import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { login } from "../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import { ILogged } from "../routes/PokemonRoutes";
import { getPokemons } from "../state/pokemon/actions";
import pikachuImage from "../assets/pikachu.png";

const Login : React.FC<ILogged> = ({ logged }) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const loginUser = () => {
    dispatch(login());
    dispatch(getPokemons());
    navigate("/list");
  };

  useEffect(() => {
    logged && navigate("/list");
  }, []);

  return (
    <Container style={{ marginTop: "35px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Please login to see the pokemon list
      </h2>
      <img
        width="220"
        height="220"
        src={pikachuImage}
        alt=""
        style={{ marginBottom: "20px" }}
      />
      <br />
      <Button style={{ width: "150px" }} variant="primary" onClick={loginUser}>
        Enter
      </Button>
    </Container>
  );
};

export default Login;
