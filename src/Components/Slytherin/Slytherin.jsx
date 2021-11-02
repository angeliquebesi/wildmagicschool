import React from "react";
import CardDeck from "../CardDeck";
import "./Slytherin.css";
import logo from "./pngegg.png";
// import SearchBar from "../../Components/Search";

export default function Slytherin() {
  return (
    <div>
      <div>
        <div className="description slytherin text-center text-light fs-1 fw-bold ">
          <h1 className="welcomeHouse">WELCOME TO SLYTHERIN</h1>
        </div>
        <div className="hero slytherin">
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <h2 className="card-title mt-2 text-center text-black fs-1 fw-bold ">Director</h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src="http://hp-api.herokuapp.com/images/slughorn.JPG"
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-text ">
                      <strong>Name: </strong>
                      Horace Slughorn
                      <br />
                      <strong>Patronus: </strong>
                      *******
                      <br />
                      <strong>birth: </strong>
                      ******
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img className="embleme" src={logo} alt="logo" />
                <h4 className="PresentationHouse text-center text-light fs-1 fw-bold   ">
                  Most important traits:
                </h4>
                <p className="PresentationHouse text-center text-light fs-1 fw-bold   ">
                  Cunning, Ambitious, Determined and Leadership.
                </p>
              </div>
            </div>
          </section>
        </div>
        <CardDeck />
      </div>
    </div>
  );
}
