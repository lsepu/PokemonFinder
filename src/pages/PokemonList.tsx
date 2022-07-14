import {Container} from "react-bootstrap";
import ListOfPokemon from "../components/ListOfPokemon";

const PokemonList = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "60px" }}>
      <ListOfPokemon/>
    </Container>
  );
};

export default PokemonList;
