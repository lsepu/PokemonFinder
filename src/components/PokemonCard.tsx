import React from "react";
import { Badge, Card } from "react-bootstrap";
import { pokemonState } from "../state/pokemon/pokemonSlice";

interface IPokemonCard {
  pokemon: pokemonState;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon }) => {
  return (
    <Card className="card-styles" style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img height="240" variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Title style={{ marginBottom: "20px" }}>{pokemon.name}</Card.Title>
        {pokemon.types.map((type, index) => (
          <Badge key={index} pill bg="primary" style={{ marginRight: "10px" }}>
            {type}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
