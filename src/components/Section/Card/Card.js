import React from "react";
import "./Card.css";
//this is the target for the movie data and it will be an object containing the movie data and title from the api (called movieObject)
export default function Card({ movie }) {
  // console.log(movie.image);
  return (
    <article
      className="Card"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      {movie.title}
    </article>
  );
}
