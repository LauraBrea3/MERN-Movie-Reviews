import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function MovieList({ movie }) {
  return (
    <Card className="movieCard" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle
          style={{ borderBottom: "1px solid black", padding: "2px" }}
        >
          {movie.year}
        </Card.Subtitle>
        <Card.Subtitle style={{ padding: "10px" }}>{movie.genre}</Card.Subtitle>
        <Card.Text>
          <div>{movie.description}</div>
          <div>Rated: {movie.rating}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieList;

