import React from "react";
import Popup from "reactjs-popup";

export default function MonsterCard({ monster, handleid }) {
  return (
    <div className="col-5 px-4">
      <div id={monster.id}>
        <div className="monster card card-stretch text-center mx-auto">
          <img
            src={monster.img}
            alt="monster1"
            className="card-img-top img-fluid "
          />
          <div className="card-body">
            <h2 className="card-title ">{monster.name}</h2>
            <div className="card-text ">
              <strong>Description: </strong>
              {monster.description}
            </div>
            <Popup
              trigger={
                <button className="button btn btn-dark mx-2" type="button">
                  {" "}
                  Show information
                  {" "}
                </button>
              }
              modal
            >
              <span>
                {" "}
                You need the {monster.potion} and the {monster.spell} to fight against the
                monster X !!
                {" "}
                <button
                  className="button btn btn-dark mx-2"
                  type="button"
                  value={monster.id}
                  onClick={handleid}
                >
                  {"  "}
                  Fight
                  {" "}
                </button>
              </span>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
