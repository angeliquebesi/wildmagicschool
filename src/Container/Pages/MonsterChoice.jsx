import React, { useContext } from "react";
import "./MonsterChoice.css";
import UserContext from "../../Context/UserContext";
import defautAvatar from "../../Components/Image/defautAvatar.png";

const MonsterChoice = ({ id }) => {
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (item)
   */
  const { item } = useContext(UserContext);
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
                {item ? "" : null}
                <button className="btn btn-dark mt-1" type="button">
                  Fight
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 px-4">
          <div id={`pers-${id}`}>
            <div className="card  card-stretch text-center mx-auto">
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
                <button type="button" className="btn btn-dark mt-1" data-bs-placement="bottom" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Fight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterChoice;
