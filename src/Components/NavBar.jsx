import React from "react";
import Logo from "../logo-final.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <ul className="list">
        <li>START THE GAME</li>
        <li>THE HOUSES</li>
        <li>CHARACTERS</li>
        <li>CONTACT</li>
      </ul>
    </header>
  );
}
