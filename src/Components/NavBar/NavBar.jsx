import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-final.png";
import "./NavBar.css";
// import Marauder from "../Container/Pages/Marauder";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <ul className="list">
        <li>
          <Link to="/" className="NavLink">Home</Link>
        </li>
        <li>
          <Link to="/houses" className="NavLink">Houses</Link>
        </li>
        <li>
          <Link to="/spellpotion" className="NavLink">Spell and Potion</Link>
        </li>
        <li>
          <Link to="/hat" className="NavLink">Start the Game</Link>
        </li>
      </ul>
    </div>
  );
}
