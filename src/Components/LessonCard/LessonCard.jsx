import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import "./LessonCard.css";

export default function LessonCard() {
  const { spells, potions } = useContext(GameContext);
  return (
    <div className="LessonCardstyle">
      <h4> Spells obtained </h4>
      <p>
        {spells.map((spell) => spell.name)}
      </p>
      <h4> Potions obtained </h4>
      <p>
        {potions.map((potion) => potion.name)}
      </p>
    </div>
  );
}
