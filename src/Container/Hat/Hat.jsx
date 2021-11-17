/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState, useEffect } from "react";
import "./Hat.css";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

export default function Hat() {
  const [visibility, setVisibility] = useState(true);
  const { userHouse, setUserHouse } = useContext(UserContext);
  // const [count, setCount] = useState("");
  const history = useHistory();
  /**
   * Recherche alétoire d'une house
   * SetVisibility (Boolean)
   */
  useEffect(() => {
    setUserHouse("");
  }, []);

  function handleClick() {
    const myHouse = houses[Math.floor(Math.random() * houses.length)];
    setUserHouse(myHouse);
    history.push(`/hat/${myHouse}`);
    setVisibility(false);
    /*
     *Timeout pour change de page automatiquement après le choix du chapeau
     */
  }
  return (
    <div className="sortingHat">
      <div className={`hatchoice ${userHouse}`}>
        <div>
          {visibility ? (
            <div>
              <p className="main-title"> The Sorting Hat </p>
              <img
                className="hat"
                src="https://cdn2.hubspot.net/hubfs/678613/Projects/CodePen/Harry%20Potter%20Sorting%20Hat/Sorting%20Hat.png"
                alt="Sorting Hat"
              />
              <button
                className="sortButton"
                type="button"
                onClick={handleClick}
              >
                Click to Get Sorted Into Your House
              </button>
            </div>
          ) : (
            <div className="messageHouse">
              <p>You belong to</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
