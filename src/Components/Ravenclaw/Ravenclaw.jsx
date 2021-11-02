import React from "react";
import CardDeck from "../CardDeck";
import "./Ravenclaw.css";
import logo from "./ravenclow.png";
// import SearchBar from "../../Components/Search";

export default function Ravenclaw() {
  return (
    <div>
      <div>
        <div className=" ravenclaw description text-center text-light fs-1 fw-bold ">
          <h1 className="welcomeHouse">WELCOME TO RAVENCLAW</h1>
        </div>
        <div className="hero ravenclaw">
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <h2 className="card-title mt-2 text-center text-light fs-1 fw-bold ">Director</h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src="http://hp-api.herokuapp.com/images/mcgonagall.jpg"
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-text ">
                      <strong>Name: </strong>
                      Filius Flitwick
                      <br />
                      <strong>Patronus: </strong>
                      tabby cat
                      <br />
                      <strong>birth: </strong>
                      17-10-1958
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
                <p className="PresentationHouse text-center text-black fs-1 fw-bold   ">
                  Intelligence, Wisdom, Creativity and Originality.
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
