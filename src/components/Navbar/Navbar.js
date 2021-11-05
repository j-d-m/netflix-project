import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <Link to="/"> Logo </Link>
      </div>
      <ul className="NavList">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/tv-shows">Tv Shows </Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
