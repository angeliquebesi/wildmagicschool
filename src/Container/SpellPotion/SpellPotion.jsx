import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Spell from "../../Components/Spell/Spell";
import Potion from "../../Components/Potion/Potion";
import "./SpellPotion.css";
import SearchBar from "../../Components/Search";

export default function SpellPotion() {
  return (
    <Router>
      <div>
        <body className="spellPotionbackground">
          <div className="buttonDiv">
            <button type="button" className="spellpotionbutton">
              <Link to="/spell" className="linkStyle">SPELL</Link>
            </button>
            <button type="button" className="spellpotionbutton">
              <Link to="/potion" className="linkStyle">POTION</Link>
            </button>
          </div>
          <div>
            <SearchBar />
          </div>


          <Switch>
            <Route path="/spell">
              <Spell />
            </Route>
            <Route path="/potion">
              <Potion />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}
