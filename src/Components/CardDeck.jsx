import React from "react";
// import axios from "axios";
import CardHouse from "./CardHouse";
import SearchBar from "./Search";

export default function CardDeck({ personnages, filtervalue, setFiltervalue }) {
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  console.log(personnages);
  return (
    <div className="container body">
      <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
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
