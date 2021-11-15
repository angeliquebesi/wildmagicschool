import React, { useState } from "react";
import CardHouse from "../CardHouse/CardHouse";
import SearchBar from "../SearchBar/Search";

export default function CardDeck({ personnages }) {
  const [filtervalue, setFiltervalue] = useState("");
  /**
   *Fonction pour filtrer les carttes des personnages grace à la search bar
   */
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  return (
    <div className="container body">
      <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      {/**
       *Filtre + map du fecth de l'api pour retourner toutes les cartes des personnages
       */}
      {personnages && (
        <div className="card-group">
          {personnages
            .filter((pers) => pers.name.toLowerCase().includes(filtervalue))
            .map((pers, index) => (
              <CardHouse pers={pers} id={index + 1} />
            ))}
        </div>
      )}
    </div>
  );
}
