import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";
import UserContext from "../../Context/UserContext";
import MonsterCard from "./MonsterCard";

const MonsterChoice = ({ Monsters }) => {
  const { idMonster, setIdMonster, potions, spells } = useContext(UserContext);
  console.log(spells);
  console.log(potions);
  console.log(idMonster);
  const handleid = (e) => {
    // if (potions.includes(idMonster) && spells.includes(idMonster)) {
    setIdMonster(e.target.value);
    // afficher c'est mort
  };
  return (
    <div>
      <div className="textmarauder">
        <p className="heropresentation text-center">
          TEXT POUR LE CHOIX DU COMBAT????
        </p>
      </div>
      <div className="monstercontainer">
        {Monsters && (
        <div className="monster card-group">
          {Monsters
            /* creation des monsters avec le fetch api */
            .map((monster) => (
              <MonsterCard monster={monster} handleid={handleid} />
            ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default MonsterChoice;
