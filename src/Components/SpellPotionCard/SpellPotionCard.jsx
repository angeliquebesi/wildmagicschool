/* eslint-disable max-len */
import React from "react";
import "./SpellPotionCard.css";
import sort from "../../DATA/sort";
import SpellPotionImage from "../SpellPotionImage/SpellPotionImage";

export default function SpellPotionCard() {
  return (
    <div>
      <div>
        <div className="potionbackground">
          <div className="spell-card">
            <div className="spell-card__inner">
              <div className="spell-card__shape">
                <div className="spell-card__trace" />
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

      <div className="spell-card">
        <div className="spell-card__inner">
          <div className="spell-card__shape">
            <div className="spell-card__trace" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/aguamenti.svg')" }} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 117.05">
              <clipPath id="clip-aguamenti">
                <path d="M21,139s-1,24,30,32c28.83,7.44,58.34-38.49,61.63-45.22.29-.61,29.53-47,51.19-54.41.65-.22,43.46-16.21,58.18,31.63,0,0-.25-.69-.78-1.87-9.33-20.51-34.05-28.73-54.07-18.36A53.11,53.11,0,0,0,154,92c-11.69,11.69-48.35,63.55-48.76,64.14C101.44,161.61,83.84,185,60,185c0,0-19,5-31-12C29,173,21,164,21,139Z" />
              </clipPath>
              <path clipPath="url(#clip-aguamenti)" className="trace-motion" fill="none" stroke="#ddfffb" strokeMiterlimit="10" strokeWidth="14" d="M21.14,141.53S25,181,60,181c0,0,15,1,32-17s36-46,39-54c0,0,25-34,40-34,0,0,29-15,48,21" transform="translate(-21 -68.63)" />
            </svg>
          </div>
          <div className="spell-card__name">
            <h5>Aguamenti</h5>
            <p>Produces a clean, drinkable jet of water from the wand tip</p>
          </div>
        </div>
      </div>
    </div>
  );
}
