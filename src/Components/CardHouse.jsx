import React from "react";
import "./CardHouse.css";

const CardHouse = ({ pers, id }) => {
  console.log(pers);
  return (
    <div className="col-4 px-4">
      <div id={`harry-${id}`}>
        <div className="card  card-stretch text-center mx-auto">
          <img
            src={pers.image}
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
            <a className="btn btn-dark" target="_blank" href="">
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHouse;
