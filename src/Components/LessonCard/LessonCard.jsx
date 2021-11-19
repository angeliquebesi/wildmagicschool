import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import "./LessonCard.css";

export default function LessonCard() {
  const { spells, potions } = useContext(GameContext);
  return (
    <div className="LessonCardstyle">
      <h3> Inventory </h3>
      <h4> Spells </h4>
      <p>
        {spells.map((spell) => spell.name).join(", ")}
      </p>
      <h4> Potions </h4>
      <p>
        {potions.map((potion) => potion.name).join(", ")}
      </p>
    </div>
  );
}
