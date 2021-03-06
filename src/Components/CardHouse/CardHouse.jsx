import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import defautAvatar from "../../images/defautAvatar.png";
import "./CardHouse.css";

const CardHouse = ({ pers, marauder = false }) => {
  const { userHouse } = useContext(UserContext);

  // const pour récupérer la carte personnage
  const { setUserPersonnage } = useContext(GameContext);
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (userHouse)
   * récupérer le personange
   */
  const history = useHistory();
  const handleClick = (myPers) => {
    setTimeout(() => {
      history.push(`/hat/${userHouse}/Marauder`);
    });
    setUserPersonnage(myPers);
  };
  return (
    <div className="col-4 px-4">
      <div className="character">
        <div className="card rounded-2 card-stretch text-center mx-auto">
          <img
            src={pers.image || defautAvatar}
            alt={pers.name}
            className="card-img-top img-fluid "
          />
          <div className="card-body">
            <h2 className="card-title ">{pers.name}</h2>
            <div className="card-text ">
              <strong>Birth: </strong>
              {pers.dateOfBirth}
              <br />
            </div>
            {userHouse !== "" && marauder !== true ? (
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => handleClick(pers)}
              >
                Select
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardHouse;
