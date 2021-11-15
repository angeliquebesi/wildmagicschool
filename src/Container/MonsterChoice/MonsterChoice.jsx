import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./MonsterChoice.css";
// import UserContext from "../../Context/UserContext";
import Monsters from "../../DATA/Monsters";

const MonsterChoice = () => {
  console.log();
  return (
    <div>
      <div className="textmarauder">
        <p className="heropresentation text-center">
          TEXT POUR LE CHOIX DU COMBAT????
        </p>
      </div>
      <div className="monstercontainer">
        {Monsters && (
        <div className="monster card-group">
          {Monsters
            /* creation des monsters avec le fetch api */
            .map((monster) => (
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
                          <button
                            className="button btn btn-dark mt-1"
                            type="button"
                          >
                            {" "}
                            Fight
                            {" "}
                          </button>
                        }
                        modal
                      >
                        <span>
                          {" "}
                          You need the Spell x and the potion X to fight against
                          the monster X !!
                          {" "}
                        </span>
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default MonsterChoice;
