import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";
// import UserContext from "../../Context/UserContext";
import defautAvatar from "../../Components/Image/defautAvatar.png";

const MonsterChoice = ({ id }) => {
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (item)
   */
  console.log(id);
  return (
    <div className="monstercontainer">
      <div className="monster card-group">
        <div className="col-5 px-4">
          <div id={`pers-${id}`}>
            <div className="monster card card-stretch text-center mx-auto">
              <img
                src={defautAvatar}
                alt="monster1"
                className="card-img-top img-fluid "
              />
              <div className="card-body">
                <h2 className="card-title ">Name</h2>
                <div className="card-text ">
                  <strong>Patronus: </strong>
                  **********
                  <br />
                  <strong>birth: </strong>
                  ***********
                  <br />
                  <strong>Ancestry: </strong>
                  **************
                </div>
                <Popup
                  trigger={
                    <button className="button btn btn-dark mt-1" type="button">
                      {" "}
                      Fight
                      {" "}
                    </button>
                  }
                  modal
                >
                  <span> You need the Spell x and the potion X to fight against the monster x !! </span>
                </Popup>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 px-4">
          <div id={`pers-${id}`}>
            <div className="monster card  card-stretch text-center mx-auto">
              <img
                src={defautAvatar}
                alt="monster1"
                className="card-img-top img-fluid "
              />
              <div className="card-body">
                <h2 className="card-title ">Name</h2>
                <div className="card-text ">
                  <strong>Patronus: </strong>
                  **********
                  <br />
                  <strong>birth: </strong>
                  ***********
                  <br />
                  <strong>Ancestry: </strong>
                  **************
                </div>
                <Popup
                  trigger={
                    <button className="button btn btn-dark mt-1" type="button">
                      {" "}
                      Fight
                      {" "}
                    </button>
                  }
                  modal
                >
                  <span> You need the Spell X and the potion X to fight against the monster X !! </span>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterChoice;
