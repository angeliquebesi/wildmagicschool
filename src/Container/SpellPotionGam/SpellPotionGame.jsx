import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./SpellPotionGame.css";
import GameContext from "../../Context/GameContext";
import SpellPotionCard from "../../Components/SpellPotionCard/SpellPotionCard";
import Quiz from "../../Components/Quiz/Quiz";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";

export default function SpellPotionGame() {
  const { lesson } = useContext(GameContext);
  const { type } = useParams();
  const quizz = true;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="quizcard">
        <SpellPotionCard type={type} card={lesson} quizz={quizz} />
      </div>
      <Quiz />
      <ButtonReturnMap />
    </motion.div>
  );
}
