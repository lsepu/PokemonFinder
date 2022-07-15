import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { stateType } from "../state/store";
import PokemonCard from "./PokemonCard";

const ListOfPokemon = () => {
  const { pokemons } = useSelector((state: stateType) => state.pokemon);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemons.length > 1) {
      setLoading(false);
    }
  }, [pokemons]);

  return (
    <Row className="justify-content-md-center">
      {!loading ? (
        pokemons.map((pokemon, index) => (
          <Col
            key={index}
            sm
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Row>
  );
};

export default ListOfPokemon;
