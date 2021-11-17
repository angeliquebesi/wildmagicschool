import React from "react";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";
import SpellPotionCard from "../../Components/SpellPotionCard/SpellPotionCard";

export default function SpellPotionGame() {
  return (
    <div>
      <SpellPotionCard />
      <Quiz />
      <ButtonReturnMap />
    </div>
  );
}
