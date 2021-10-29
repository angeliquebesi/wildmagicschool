import React from "react";
import CardHouse from "./CardHouse";
import SearchBar from "./Search";

export default function CardDeck() {
  const [personnages, setPersonnages] = React.useState(null);
  const [filtervalue, setFiltervalue] = React.useState("");
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  React.useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setPersonnages(data);
      });
    // const filteredPersonnages = personnages.filter((pers) => pers.name.includes(filtervalue));
  }, [filtervalue]);
  console.log(personnages);
  return (
    <div className="container">
      <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      {personnages && (
        <div className="card-group">
          {personnages.filter((pers) => pers.name.toLowerCase().includes(filtervalue))
            .map((pers, index) => (
              <CardHouse pers={pers} id={index + 1} />
            ))}
        </div>
      )}
    </div>
  );
}
