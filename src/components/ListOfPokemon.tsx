import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { stateType } from "../state/store";
import PokemonCard from "./PokemonCard";

const ListOfPokemon = () => {
  const { pokemons } = useSelector((state: stateType) => state.pokemon);

  return (
    <Row className="justify-content-md-center">
      {pokemons.map((pokemon, index) => (
        <Col  key={index} sm style={{ display: "flex", justifyContent: "center" }}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
};

export default ListOfPokemon;
