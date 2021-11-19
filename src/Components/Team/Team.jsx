import React, { useState } from "react";
import Homme from "../../images/homme.png";
import AfterHomme from "../../images/after-homme.png";
import Femme from "../../images/femme.png";
import AfterFemme from "../../images/after-femme.png";
import "./Team.css";

const Team = ({ name, alias, nickname }) => {
  const [isHomme, setIsHomme] = useState(Homme);
  const [isFemme, setIsFemme] = useState(Femme);
  return (
    <div className="person-item">
      <h3 className="name">{name}</h3>
      <h4 className="alias">{alias}</h4>
      {name !== "Angélique" ? <input type="image" src={isHomme} onMouseEnter={() => setIsHomme(AfterHomme)} onMouseLeave={() => setIsHomme(Homme)} onClick={() => window.open(`https://github.com/${nickname}`)} alt="Homme" /> : <input type="image" src={isFemme} onMouseEnter={() => setIsFemme(AfterFemme)} onMouseLeave={() => setIsFemme(Femme)} onClick={() => window.open(`https://github.com/${nickname}`)} alt="Femme" />}
    </div>
  );
};

export default Team;
