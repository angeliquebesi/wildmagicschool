import React from "react";
import CardDeck from "../CardDeck";
import "./gryffindor.css";
import logo from "./Blason_de_Gryffondor.png";
// import SearchBar from "../../Components/Search";

export default function Gryffindor() {
  return (
    <div>
      <div>
        <div className="description gryffindor text-center text-light fs-1 fw-bold ">
          <h1 className="welcomeHouse">WELCOME TO GRYFFINDOR</h1>
        </div>
        <div className="hero gryffindor">
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
                      Minerva McGonagall
                      <br />
                      <strong>Patronus: </strong>
                      tabby cat
                      <br />
                      <strong>birth: </strong>
                      04-10-1925
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
        <CardDeck />
      </div>
    </div>
  );
}