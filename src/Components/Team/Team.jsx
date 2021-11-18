import React from "react";
import Homme from "../../images/homme.png";
import Femme from "../../images/femme.png";
import "./Team.css";

const Team = ({ name, alias, nickname, type }) => (
  <div className="person-item">
    <div>
      <h3 className="name">{name}</h3>
      <h4 className="alias">{alias}</h4>
      <input type="image" className={type === "femme" ? "img-femme" : "img-homme"} src={type === "femme" ? Femme : Homme} alt="Homme" onClick={() => window.open(`https://github.com/${nickname}`)} />
    </div>
  </div>
);

export default Team;
