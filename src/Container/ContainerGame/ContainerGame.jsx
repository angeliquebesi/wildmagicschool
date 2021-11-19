import React, { useContext } from "react";
import { motion } from "framer-motion";
import UserContext from "../../Context/UserContext";
import MonsterChoice from "../MonsterChoice/MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";
import Monsters from "../../DATA/Monsters";

export default function ContainerGame() {
  const { idMonster } = useContext(UserContext);
  /**
   * Fitre des monstres avec l'Id du monstre selectionné
   */
  const monster = Monsters.filter(
    (item) => item.id === idMonster
  );
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <>
        {/* Affichage du Quiz si Monstre selectionné */}
        {idMonster === "" && <MonsterChoice Monsters={Monsters} />}
        {idMonster !== "" && (
          <div>
            <MonsterChoice Monsters={monster} />
            <Quiz Monsters={monster} />
          </div>
        )}
      </>
      <ButtonReturnMap />
    </motion.div>
  );
}
