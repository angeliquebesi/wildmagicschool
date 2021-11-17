import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import Potion from "../../images/Potion.svg";
import Wand from "../../images/Wand.svg";

function SpellPotionCard({ type, card, house, quizz = false }) {
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
        <div className="card-body">
          <h2 className="card-title ">{card.name}</h2>
          <div className="card-text text">
            {card.description}
          </div>
        </div>
        {/**
        * double condition :
         *- cas 1 : pas de bouton pour les sélectionner => accueil du jeu (pas de userhouse) pour connaitre les sorts & lors du quiz (chemin avec quizz)
         *- cas 2 : présence du bouton =>  dans le jeu on veut pouvoir sélectionner la card pour le quizz
        */}
        {userHouse !== "" && quizz !== true ? (
          <Link to={`/hat/${house}/Marauder/${type}/Quizz`}>
            <button
              className="btn btn-dark"
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
