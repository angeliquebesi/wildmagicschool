import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import MonsterChoice from "../MonsterChoice/MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";
import Monsters from "../../DATA/Monsters";

export default function ContainerGame({ type }) {
  const { idMonster } = useContext(UserContext);
  /**
   * Fitre des monstres avec l'Id du monstre selectionné
   */
  const monster = Monsters.filter((item) => item.id === parseInt(idMonster, 36));
  return (
    <div>
      {type === "Fight" && (
        <>
          {/* Affichage du Quiz si Monstre selectionné */}
          {idMonster === "" && <MonsterChoice Monsters={Monsters} />}
          {idMonster !== "" && (
            <div>
              <MonsterChoice Monsters={monster} />
              <Quiz />
            </div>
          )}
        </>
      )}
      <ButtonReturnMap />
    </div>
  );
}
