import React from "react";
import "../../Components/Team/Team.css";
import Team from "../../Components/Team/Team";
import Equipe from "../../DATA/Equipe";

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
