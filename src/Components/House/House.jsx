import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDeck from "../CardDeck";
import "./House.css";
import HouseData from "../../DATA/HouseData";

export default function Gryffindor({ house }) {
  const [personnages, setPersonnages] = useState(null);
  /*
  *Fetch de l'api en fonction du choix de la maison
  */
  useEffect(() => {
    axios
      .get(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => {
        setPersonnages(response.data);
      });
  }, [house]);
  /**
   *filtre du fichier HouseData pour reécupérer les information en fonction de House
   */
  const filteredHouse = HouseData.filter((i) => i.name === house);
  return (
    <div>
      <div>
        <div
          className={`description ${filteredHouse[0].name} text-center text-light fs-1 fw-bold`}
        >
          <h1 className="welcomeHouse text-uppercase">
            {`WELCOME TO  ${filteredHouse[0].name}`}
          </h1>
        </div>
        <div
          className={`hero ${filteredHouse[0].name} text-center text-light fs-1 fw-bold`}
        >
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <h2 className="card-title mt-2 text-center text-light fs-1 fw-bold text-uppercase ">
                  Director
                </h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src={filteredHouse[0].directorimg}
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-text ">
                      <strong>Name : </strong>
                      {filteredHouse[0].Directorname}
                      <br />
                      <strong>Patronus : </strong>
                      {filteredHouse[0].patronus}
                      <br />
                      <strong>birth : </strong>
                      {filteredHouse[0].birth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img className="embleme" src={filteredHouse[0].logo} alt="logo" />
                <h4 className="PresentationHouse text-uppercase text-center text-light fs-1 fw-bold border border-white  ">
                  Most important traits:
                </h4>
                <p className="PresentationHouse text-center text-light fs-1    ">
                  {filteredHouse[0].traits}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="selectPersonnage">
          <CardDeck
            personnages={personnages}
          />
        </div>
      </div>
    </div>
  );
}
