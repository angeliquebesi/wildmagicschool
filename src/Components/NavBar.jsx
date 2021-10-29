import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SpellPotion from "../Container/SpellPotion/SpellPotion";
import Houses from "../Container/Pages/Houses";
import Home from "../Container/Pages/Home";
import Logo from "../logo-final.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Router>
      <header>
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
            Start the Game
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/houses">
          <Houses />
        </Route>
        <Route exact path="/spellpotion">
          <SpellPotion />
        </Route>

      </Switch>

    </Router>
  );
}
