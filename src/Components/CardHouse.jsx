import React from "react";
import { useHistory } from "react-router-dom";
import "./CardHouse.css";
import defautAvatar from "./Image/defautAvatar.png";

const CardHouse = ({ pers, id }) => {
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (item)
   */
  const item = "gryffindor";
  const history = useHistory();
  function handleClick() {
    setTimeout(() => {
      history.push(`/hat/${item}/Marauder`);
    },);
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
              <strong>Patronus: </strong>
              {pers.patronus}
              <br />
              <strong>birth: </strong>
              {pers.dateOfBirth}
              <br />
              <strong>Ancestry: </strong>
              {pers.ancestry}
            </div>
            {item !== "" ? (
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
