import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SpellPotionCard from "../../Components/SpellPotionCard/SpellPotionCard";
// import Potion from "../../Components/Potion/Potion";
import "./SpellPotion.css";

export default function SpellPotion() {
  return (
    <Router>
      <div className="buttonBox">
        <div className="buttonDiv">

          <Link to="/SpellPotion/spells" className="linkStyle">
            <button type="button" className="spellpotionbutton" label="bouton spell">SPELL </button>
          </Link>

          <Link to="/SpellPotion/potions" className="linkStyle">
            <button type="button" className="spellpotionbutton" label="bouton potion">POTION</button>
          </Link>

        </div>

        <Switch>
          <Route path="/SpellPotion/potions">
            <SpellPotionCard type="potions" />
          </Route>
          <Route path="/SpellPotion/spells">
            <SpellPotionCard type="spells" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
