import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";
import UserContext from "../../Context/UserContext";
import MonsterCard from "./MonsterCard";

const MonsterChoice = ({ Monsters }) => {
  const { setIdMonster, potions, spells, defeatedMonster } = useContext(UserContext);
  const handleMonster = (monster) => {
    if (potions.includes(monster.id) && spells.includes(monster.id)) setIdMonster(monster.id);
  };
  return (
    <div>
      <div className="textmarauder ">
        <p className="heropresentation text-center">
          TEXT POUR LE CHOIX DU COMBAT????
        </p>
      </div>
      <div className="monstercontainer">
        {Monsters && (
          <div className="monster card-group">
            {Monsters
              /* creation des monsters avec le fetch api */
              // TODO mettre l id du monstre battu dans defeatedMonster
              .map((monster) => (
                <MonsterCard
                  monster={monster}
                  canFight={
                    potions.includes(monster.id) && spells.includes(monster.id)
                  }
                  onStartFight={() => handleMonster(monster)}
                  availableMonster={
                    defeatedMonster.includes(monster.id)
                  }
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterChoice;
