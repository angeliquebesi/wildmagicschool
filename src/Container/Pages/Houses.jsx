import React from "react";
import CardDeck from "../../Components/CardDeck";
import "./Houses.css";
import logo from "./Blason_de_Gryffondor.png";
import SearchBar from "../../Components/Search";

export default function Houses() {
  return (
    <div>
      <body>
        <section className="housechoice">
          <div className="house" id="Gryffindor">
            Gryffindor
          </div>
          <div className="house" id="Hufflepuff">
            Hufflepuff
          </div>
          <div className="house" id="Ravenclaw">
            Ravenclaw
          </div>
          <div className="house" id="Slytherin">
            Slytherin
          </div>
        </section>
        <div className="description gryffindor text-center  ">
          <h1 className="welcomeHouse">WELCOME TO GRYFFONDOR</h1>
        </div>
        <div className="hero">
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <h2 className="card-title ">President</h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src="http://hp-api.herokuapp.com/images/mcgonagall.jpg"
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-text ">
                      <strong>Name: </strong>
                      ***********
                      <br />
                      <strong>Patronus: </strong>
                      ***********
                      <br />
                      <strong>birth: </strong>
                      **********
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
                  Bravery, Nerve, Chivalry, Courage and Daring.
                </p>
              </div>
            </div>
          </section>
        </div>
        <SearchBar />
        <CardDeck />
      </body>
    </div>
  );
}
