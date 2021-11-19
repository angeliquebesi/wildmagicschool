import React from "react";
import { Link } from "react-router-dom";
import "./VictoryPage.css";
import BabyYoda from "../../images/BabyYoda.svg";

export default function VictoryPage() {
  return (
    <div className="VictoryPage">
      <div className="VictoryP">
        <p>
          Victory !
          <br />
          You defeated Lord Voldemort !
        </p>
      </div>
      <div className="VictoryGif">
        <img src="https://c.tenor.com/qNu2IB0eDUEAAAAd/voldemort-death.gif" alt="gif of lord voldermort's death" />
      </div>
      <div className="VictoryButton">
        <Link to="/">
          <button type="button" className="buttonstart">
            Go back Home
          </button>
        </Link>
      </div>
      <div className="Babyyoda">
        <Link to="/hat/:house/marauder/Fight/Victory/Bonus">
          <img className="img-fluid" src={BabyYoda} alt="baby yoda" />
        </Link>

      </div>
    </div>

  );
}
