import React from "react";
import CardHouse from "./CardHouse";

export default function CardDeck() {
  const [personnages, setPersonnages] = React.useState(null);

  React.useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setPersonnages(data);

        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      {personnages && (
        <div className="card-group">
          {personnages.map((pers, index) => (
            <CardHouse pers={pers} id={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
