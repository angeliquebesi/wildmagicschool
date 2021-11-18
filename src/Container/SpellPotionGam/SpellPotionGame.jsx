import React, { useContext } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <div className="quizcard">
        <SpellPotionCard type={type} card={lesson} quizz={quizz} />
      </div>
      <Quiz />
      <ButtonReturnMap />
    </div>
  );
}
