/* eslint-disable max-len */
import React from "react";
import "./SpellPotionCard.css";
import sort from "../../DATA/sort";
import SpellPotionImage from "../SpellPotionImage/SpellPotionImage";

export default function SpellPotionCard() {
  return (
    <div>
      <div className="potionbackground">
        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape">
              {sort[0].baguetteWay ? <SpellPotionImage value={sort[0].baguetteWay} /> : <img src="https://i.pinimg.com/564x/ae/75/18/ae7518db580785c328a5332ec585ab37.jpg" alt="default wand" />}
              <div className="spell-card__name">
                <h5>{sort[0].name}</h5>
                <p>{sort[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
