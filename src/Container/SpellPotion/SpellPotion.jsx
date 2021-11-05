import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SpellPotionCard from "../../Components/SpellPotionCard/SpellPotionCard";
// import Potion from "../../Components/Potion/Potion";
import "./SpellPotion.css";
import SearchBar from "../../Components/Search";

export default function SpellPotion() {
  return (
    <Router>
      <div className="buttonBox">
        <div className="buttonDiv">

          <Link to="/SpellPotion/spell" className="linkStyle">
            <button type="button" className="spellpotionbutton" label="bouton spell">SPELL </button>
          </Link>

          <Link to="/SpellPotion/potion" className="linkStyle">
            <button type="button" className="spellpotionbutton" label="bouton potion">POTION</button>
          </Link>

        </div>
        <div>
          <SearchBar />
        </div>

        <Switch>
          <Route path="/SpellPotion/:type">
            <SpellPotionCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
