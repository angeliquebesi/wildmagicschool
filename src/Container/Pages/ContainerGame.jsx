import React from "react";
// import CardDeck from "../../Components/CardDeck";
import MonsterChoice from "./MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";

export default function ContainerGame() {
  return (
    <div>
      <Quiz />
      <MonsterChoice />
      <ButtonReturnMap />
    </div>
  );
}
