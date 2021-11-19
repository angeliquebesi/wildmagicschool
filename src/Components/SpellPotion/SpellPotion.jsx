import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./SpellPotion.css";
import SpellPotionDeck from "../SpellPotionDeck/SpellPotionDeck";

export default function SpellPotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Router>
        <div className="buttonBox">
          <div className="buttonDiv">
            <Link to="/SpellPotion/spells" className="linkStyle">
              <button
                type="button"
                className="spellpotionbutton"
                label="bouton spell"
              >
                SPELL
              </button>
            </Link>

            <Link to="/SpellPotion/potions" className="linkStyle">
              <button
                type="button"
                className="spellpotionbutton"
                label="bouton potion"
              >
                POTION
              </button>
            </Link>
          </div>

          <Switch>
            <Route path="/SpellPotion/:type">
              <SpellPotionDeck />
            </Route>
          </Switch>
        </div>
      </Router>
    </motion.div>
  );
}
