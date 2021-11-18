import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";

import MonsterCard from "./MonsterCard";
import GameContext from "../../Context/GameContext";

const MonsterChoice = ({ Monsters }) => {
  const { potions, spells, setIdMonster, defeatedMonster } = useContext(GameContext);
  const handleMonster = (monster) => {
    if (potions.some((potion) => potion.id === monster.id)
    && spells.some((spell) => spell.id === monster.id)) { setIdMonster(monster.id); }
    // afficher c'est mort
    console.log(potions, spells, monster.id);
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
                    potions.some((potion) => potion.id === monster.id)
                    && spells.some((spell) => spell.id === monster.id)
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
