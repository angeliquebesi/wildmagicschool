import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Marauder.css";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import CardHouse from "../../Components/CardHouse/CardHouse";
import LessonCard from "../../Components/LessonCard/LessonCard";

export default function Marauder() {
  const { userHouse } = useContext(UserContext);
  const { userPersonnage } = useContext(GameContext);
  const marauder = true;

  return (
    <div>
      <section className="Maraudercontainer ">
        <div className="RecapCard">
          <CardHouse pers={userPersonnage} marauder={marauder} />
          <LessonCard />
        </div>
        <div className="MarauderButton ">
          <Link to={`/hat/${userHouse}/Marauder/potions`}>
            <button type="button" className="buttonspell">
              POTION
            </button>
          </Link>

          <Link to={`/hat/${userHouse}/Marauder/Fight`}>
            <button type="button" className="buttonspell">
              FIGHT
            </button>
          </Link>

          <Link to={`/hat/${userHouse}/Marauder/spells`}>
            <button type="button" className="buttonspell">
              SPELL
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
