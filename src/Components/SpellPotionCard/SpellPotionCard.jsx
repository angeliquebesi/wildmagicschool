import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import Potion from "../../images/Potion.svg";
import Wand from "../../images/Wand.svg";

function SpellPotionCard({ type, card, house, quizz = false, earnedPotion }) {
  const { userHouse } = useContext(UserContext);

  // const pour récupérer l'id de la carte
  const { setLesson } = useContext(GameContext);

  const handleCard = (myCard) => {
    setLesson(myCard);
  };
  return (
    <div className="col-4 px-4 fs-4">
      <div className="card  card-stretch text-center mx-auto spell">
        <img
          src={type === "potions" ? Potion : Wand}
          alt={card.name}
          className="card-img-top img-fluid"
        />
        {earnedPotion && (
        <div className="card-img-overlay bg-black bg-opacity-50 text-success rounded-2">
          <svg className=" mt-3 w-50 " viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            />
          </svg>
        </div>)}
        <div className="card-body">
          <h2 className="card-title ">{card.name}</h2>
          <div className="card-text text">{card.description}</div>
        </div>
        {/**
         * double condition :
         *- cas 1 : pas de bouton pour les sélectionner => accueil du jeu (pas de userhouse) pour connaitre les sorts & lors du quiz (chemin avec quizz)
         *- cas 2 : présence du bouton =>  dans le jeu on veut pouvoir sélectionner la card pour le quizz
         */}
        {userHouse !== "" && quizz !== true ? (
          <Link to={`/hat/${house}/Marauder/${type}/Quizz`}>
            <button
              className="btn btn-dark buttonspellcard"
              type="button"
              onClick={() => handleCard(card)}
            >
              Select
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default SpellPotionCard;
