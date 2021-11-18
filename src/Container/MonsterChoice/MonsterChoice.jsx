import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";
import UserContext from "../../Context/UserContext";
import MonsterCard from "./MonsterCard";
import GameContext from "../../Context/GameContext";

const MonsterChoice = ({ Monsters }) => {
  const { setIdMonster } = useContext(UserContext);
  const { potions, spells } = useContext(GameContext);
  const handleMonster = (monster) => {
    if (potions.some((potion) => potion.id === monster.id)
    && spells.some((spell) => spell.id === monster.id)) { setIdMonster(monster.id); }
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
              .map((monster) => (
                <MonsterCard
                  monster={monster}
                  canFight={
                    potions.some((potion) => potion.id === monster.id)
                    && spells.some((spell) => spell.id === monster.id)
                  }
                  onStartFight={() => handleMonster(monster)}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterChoice;
