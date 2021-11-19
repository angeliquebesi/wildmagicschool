import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import CardDeck from "../CardDeck/CardDeck";
import "./House.css";
import HouseData from "../../DATA/HouseData";

export default function Gryffindor() {
  const [personnages, setPersonnages] = useState([]);
  const { house } = useParams();
  /*
   *Fetch de l'api en fonction du choix de lahouse
   */
  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((response) => {
        setPersonnages(response.data);
      });
  }, [house]);
  /**
   *filtre du fichierhouseData pour reécupérer les information en fonction dehouse
   */
  const filteredHouse = HouseData.filter((i) => i.name === house);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div>
        <div
          className={`description ${filteredHouse[0].name} text-center text-light fs-3 fw-bold`}
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
                <h2 className="card-title mt-2 text-center text-light fs-2 fw-bold text-uppercase ">
                  Director
                </h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src={filteredHouse[0].directorimg}
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-title ">
                      {filteredHouse[0].Directorname}
                    </div>
                    <div className="card-text ">
                      <strong>Birth: </strong>
                      {filteredHouse[0].birth}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img
                  className="embleme"
                  src={filteredHouse[0].logo}
                  alt="logo"
                />
                <h4 className="PresentationHouse text-uppercase text-center text-light fs-2 fw-bold border border-white  ">
                  Most important traits:
                </h4>
                <p className="PresentationHouse text-center text-light fs-2    ">
                  {filteredHouse[0].traits}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="selectPersonnage">
          <CardDeck personnages={personnages} />
        </div>
      </div>
    </motion.div>
  );
}
