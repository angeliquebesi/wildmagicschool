import React from "react";
import { Link } from "react-router-dom";
import "./SpellPotion.css";

export default function SpellPotion() {
  return (

    <div className="buttonBox">
      <div className="buttonDiv">

        <Link to="/SpellPotion/spells" className="linkStyle">
          <button type="button" className="spellpotionbutton" label="bouton spell">SPELL </button>
        </Link>

        <Link to="/SpellPotion/potions" className="linkStyle">
          <button type="button" className="spellpotionbutton" label="bouton potion">POTION</button>
        </Link>

      </div>
    </div>

  );
}
