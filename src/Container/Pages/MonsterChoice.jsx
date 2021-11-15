import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./MonsterChoice.css";
import UserContext from "../../Context/UserContext";
import defautAvatar from "../../Components/Image/defautAvatar.png";

const MonsterChoice = ({ id }) => {
  /**
   *redirection vers la page du marauder en fonction du choix du chapeau (item)
   */
  const { item } = useContext(UserContext);
  const history = useHistory();
  function handleClick() {
    setTimeout(() => {
      history.push(`/hat/${item}/Marauder`);
    });
  }
  return (
    <div className="monstercontainer">
      <div className="card-group">
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

                <button
                  className="btn btn-dark mt-1"
                  type="button"
                  onClick={handleClick}
                >
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

                <button
                  className="btn btn-dark mt-1"
                  type="button"
                  onClick={handleClick}
                >
                  Fight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterChoice;
