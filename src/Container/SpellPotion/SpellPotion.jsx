import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Spell from "../../Components/Spell/Spell";
import Potion from "../../Components/Potion/Potion";
import "./SpellPotion.css";

export default function SpellPotion() {
  return (
    <Router>
      <div>
        <div className="buttonDiv">
          <button type="button">
            <Link to="/spell" className="linkStyle">SPELL</Link>
          </button>
          <button type="button">
            <Link to="/potion" className="linkStyle">POTION</Link>
          </button>
        </div>

        <Switch>
          <Route path="/spell">
            <Spell />
          </Route>
          <Route path="/potion">
            <Potion />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
