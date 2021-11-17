import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import Potion from "../../images/Potion.svg";
import Wand from "../../images/Wand.svg";

function SpellPotionCard({ type, card, house }) {
  const { userHouse } = useContext(UserContext);
  // const pour récupérer l'id de la carte
  const { setIdLesson } = useContext(UserContext);
  const handleidLesson = (e) => {
    setIdLesson(e.target.value);
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
        {userHouse !== "" ? (
          <Link to={`/hat/${house}/Marauder/${type}/Quizz`}>
            <button
              className="btn btn-dark"
              type="button"
              value={card.id}
              onClick={handleidLesson}
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
