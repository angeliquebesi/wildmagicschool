import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import CardHouse from "../CardHouse/CardHouse";
import SearchBar from "../SearchBar/Search";

export default function CardDeck({ personnages }) {
  const { userHouse } = useContext(UserContext);
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
      {userHouse === "" ? <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} /> : ""}
      {/**
       *Filtre + map du fecth de l'api pour retourner toutes les cartes des personnages
       */}
      {personnages && (
        <div className="card-group">
          {personnages
            .filter((pers) => pers.name.toLowerCase().includes(filtervalue))
            .map((pers) => (
              <CardHouse pers={pers} key={pers.id} />
            ))}
        </div>
      )}
    </div>
  );
}
