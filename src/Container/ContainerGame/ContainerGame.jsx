import React from "react";
// import CardDeck from "../../Components/CardDeck";
import MonsterChoice from "../MonsterChoice/MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";
import Monsters from "../../DATA/Monsters";

export default function ContainerGame({ type }) {
  const combat1 = true;
  console.log(type);
  return (
    <div>
      <Quiz />
      {type === "Fight" && combat1 === null ? <MonsterChoice Monsters={Monsters} /> : null}
      {type === "Fight" && combat1 === true ? (
        <div>
          <MonsterChoice Monsters={Monsters} id={1} />
          <Quiz />
        </div>
      ) : null}
      <ButtonReturnMap />
    </div>
  );
}
