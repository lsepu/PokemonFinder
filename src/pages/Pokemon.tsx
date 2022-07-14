import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getTypes } from "../state/pokemon/actions";


const Pokemon = () => {

  const navigate = useNavigate();

  const { pokemon } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState({
    name: "",
    types: [],
    img: "",
  });

  useEffect(() => {
    const searchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const formattedResponse = await response.json();
      const pokemonData = {
        name: formattedResponse.name,
        types: getTypes(formattedResponse.types),
        img: formattedResponse.sprites.front_default,
      };
      setPokemonInfo(pokemonData);
    };

    searchPokemon();
  }, []);

  return (
    <Container style={{ textAlign: "center", marginTop: "60px" }}>
      <Row className="justify-content-md-center">
        <Col sm style={{ display: "flex", justifyContent: "center" }}>
          <Card
            className="card-styles"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <Card.Img height="240" variant="top" src={pokemonInfo.img} />
            <Card.Body>
              <Card.Title style={{ marginBottom: "20px" }}>
                {pokemonInfo.name}
              </Card.Title>
              {pokemonInfo.types.map((type, index) => (
                <Badge
                  key={index}
                  pill
                  bg="primary"
                  style={{ marginRight: "10px" }}
                >
                  {type}
                </Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button onClick={() => navigate("/list")} style={{marginTop: "25px"}} variant="primary" >Go back to list</Button>

    </Container>
  );
};

export default Pokemon;
