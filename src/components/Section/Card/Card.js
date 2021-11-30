import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
//this is the target for the movie data and it will be an object containing the movie data and title from the api (called movieObject)
export default function Card({ movie, content }) {
  // console.log(movie.image);

  return (
    <Link className="Card-Wrapper" to={`/${content}/${movie.id}`}>
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h4>{movie.title}</h4>
      </article>
    </Link>
  );
}

//reciving params = {key:value}
// ==> key from Route
// value from Link

// Link to ={`/${content}/${movie.id}`}
