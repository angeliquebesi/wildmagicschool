import React from "react";
import Equipe from "../../DATA/Equipe";
import Team from "../../Components/Team/Team";
import "../../Components/Team/Team.css";

export default function Teams() {
  return (
    <div className="aboutTeam">
      {Equipe.map((person, index) => (
        <Team
          index={index}
          name={person.name}
          alias={person.alias}
          nickname={person.nickname}
          type={person.type}
        />
      ))}
    </div>
  );
}
