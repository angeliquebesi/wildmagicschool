/* eslint-disable max-len */
import React from "react";
import "./Potion.css";
import Potion1 from "../../images/Potion1.svg";
import Potion2 from "../../images/Potion2.svg";
import Potion3 from "../../images/Potion3.svg";
import Potion4 from "../../images/Potion4.svg";
import Potion5 from "../../images/Potion5.svg";
import Potion6 from "../../images/Potion6.svg";

export default function Potion() {
  return (
    <div>
      <div className="potionbackground">

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion1})` }} />
            <div className="spell-card__name">
              <h5>Ageing Potion</h5>
              <p>A potion that, depending on the amount taken, ages the drinker to various ages.</p>
            </div>
          </div>
        </div>

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion2})` }} />
            <div className="spell-card__name">
              <h5>Alihotsy Draught</h5>
              <p>Produces a clean, drinkable jet of water from the wand tip</p>
            </div>
          </div>
        </div>

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion3})` }} />
            <div className="spell-card__name">
              <h5>Arresto Momentum</h5>
              <p>A potion from the Alihotsy plant; causes hysterical laughter.</p>
            </div>
          </div>
        </div>

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion4})` }} />
            <div className="spell-card__name">
              <h5>Amortentia</h5>
              <p>Love Potion; does not create real love, just powerful obsession.</p>
            </div>
          </div>
        </div>

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion5})` }} />
            <div className="spell-card__name">
              <h5>Babbling Beverage</h5>
              <p>The only known defence against Dementors</p>
            </div>
          </div>
        </div>

        <div className="spell-card">
          <div className="spell-card__inner">
            <div className="spell-card__shape" />
            <div className="spell-card__trace" style={{ backgroundImage: `url(${Potion6})` }} />
            <div className="spell-card__name">
              <h5>Riddikkulus</h5>
              <p>A potion that causes uncontrollable speaking of nonsense.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
