import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";

import MonsterCard from "./MonsterCard";
import GameContext from "../../Context/GameContext";

const MonsterChoice = ({ Monsters }) => {
  const { setIdMonster, potions, spells, defeatedMonster } = useContext(GameContext);
  const handleMonster = (monster) => {
    for (let i = 0; i < potions.lenght; i += 1) {
      if (potions.id.includes(monster.id) && spells.id.includes(monster.id)) {
        setIdMonster(monster.id);
      }
    }
  };

  console.log(handleMonster());
  return (
    <div>
      <div className="monstercontainer">
        {Monsters && (
          <div className="monster card-group">
            {Monsters
              /* creation des monsters avec le fetch api */
              .map((monster) => (
                <MonsterCard
                  monster={monster}
                  canFight={
                    potions.includes(monster.id) && spells.includes(monster.id)
                  }
                  onStartFight={() => handleMonster(monster)}
                  availableMonster={defeatedMonster.includes(monster.id)}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterChoice;
