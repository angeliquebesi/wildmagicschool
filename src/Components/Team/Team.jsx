import React from "react";
import Homme from "../../images/homme.png";
import Femme from "../../images/femme.png";
import "./Team.css";

const Team = ({ name, alias, nickname }) => (
  <div className="person-item">
    <div>
      <h3 className="name">{name}</h3>
      <h4 className="alias">{alias}</h4>
      {name !== "Angélique" ? <input type="image" className="img-homme" src={Homme} alt="Homme" onClick={() => window.open(`https://github.com/${nickname}`)} /> : <input type="image" className="img-femme" src={Femme} alt="Homme" onClick={() => window.open(`https://github.com/${nickname}`)} />}
    </div>
  </div>
);

export default Team;
