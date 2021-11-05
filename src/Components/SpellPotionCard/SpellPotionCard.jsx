/* eslint-disable max-len */
import React from "react";
import "./SpellPotionCard.css";

export default function SpellPotionCard() {
  return (
    <div>
      <div className="potionbackground">
        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" />
            <div className="spell-card__name">
              <h5>Ageing Potion</h5>
              <p>A potion that, depending on the amount taken, ages the drinker to various ages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
