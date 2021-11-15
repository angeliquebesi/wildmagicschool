import React from "react";
// import CardDeck from "../../Components/CardDeck";
import MonsterChoice from "../MonsterChoice/MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";

export default function ContainerGame({ type }) {
  console.log(type);
  return (
    <div>
      <Quiz />
      {type === "Fight" ? <MonsterChoice /> : null}
      <ButtonReturnMap />
    </div>
  );
}
