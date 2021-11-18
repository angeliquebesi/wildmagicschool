import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./CardHouse.css";
import defautAvatar from "../../images/defautAvatar.png";
import UserContext from "../../Context/UserContext";

const CardHouse = ({ pers, id }) => {
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (userHouse)
   */
  const { userHouse } = useContext(UserContext);
  const history = useHistory();
  function handleClick() {
    setTimeout(() => {
      history.push(`/hat/${userHouse}/Marauder`);
    });
  }
  return (
    <div className="col-4 px-4">
      <div id={`pers-${id}`}>
        <div className="card  card-stretch text-center mx-auto">
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
            {userHouse !== "" ? (
              <button
                className="btn btn-dark"
                type="button"
                onClick={handleClick}
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
