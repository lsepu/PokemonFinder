import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTypes } from "../state/pokemon/actions";

const PokemonSearch = () => {
  const [name, setName] = useState("");
  const [found, setFound] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({
    name: "",
    types: [],
    img: "",
  });

  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pokemonData = await searchPokemon();
    if (pokemonData) {
      setPokemonInfo(pokemonData);
      setFound(true);
    } else {
      alert("not found");
      clearPokemonInfo();
      setFound(false);
    }
  };

  const clearPokemonInfo = () => {
    setPokemonInfo({
      name: "",
      types: [],
      img: "",
    });
  };

  const searchPokemon = async () => {
    if (name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (response.status == 200) {
        const formattedResponse = await response.json();
        const pokemonData = {
          name: formattedResponse.name,
          types: getTypes(formattedResponse.types),
          img: formattedResponse.sprites.front_default,
        };
        return pokemonData;
      }
    }
    return null;
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "60px" }}>
      <Form onSubmit={handleSearch}>
        <Form.Control
          style={{ maxWidth: "500px", margin: "auto" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter pokemon name"
        />
        <Button style={{ margin: "30px 0px" }} variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {found && (
        <Row className="justify-content-md-center">
          <Col
            sm
            style={{ display: "flex", justifyContent: "center" }}
            onClick={() => navigate(`/list/${name}`)}
          >
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
      )}
    </Container>
  );
};

export default PokemonSearch;
