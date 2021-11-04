/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import "./Hat.css";
import "../../../fonts/Harryp/HARRYP__.ttf";
import "../../../fonts/Dumbledor/dum1.ttf";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

export default function Hat() {
  const [visibility, setVisibility] = useState(true);
  const [item, setItem] = useState("");

  /**
   * Recherche alétoire d'une maison
   * SetVisibility (Boolean)
   */
  function handleClick() {
    setItem(houses[Math.floor(Math.random() * houses.length)]);
    setVisibility(false);
  }

  return (
    <div className="sortingHat">
      <div className={`hatchoice ${item}`}>
        <div>
          {visibility ? (
            <div>
              <p className="main-title"> The Sorting Hat </p>
              <img
                className="hat"
                src="https://cdn2.hubspot.net/hubfs/678613/Projects/CodePen/Harry%20Potter%20Sorting%20Hat/Sorting%20Hat.png"
                alt="Sorting Hat"
              />
              <button className="sortButton" type="button" onClick={handleClick}>
                Click to Get Sorted Into Your House
              </button>
            </div>
          ) : (
            <div className="messageHouse">
              <p>
                You belong to
              </p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
