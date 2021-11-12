/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./SpellPotionCard.css";
import Potion from "../../images/Potion.svg";
import Wand from "../../images/Wand.svg";
import UserContext from "../../Context/UserContext";
import SearchBar from "../Search";

export default function SpellPotionCard({ type }) {
  const [cards, setCards] = useState([]);
  const { item } = useContext(UserContext);
  function handleClick() {}
  // redirection vers quizz de cette carte
  const [filtervalue, setFiltervalue] = useState("");
  // Fonction pour filtrer les cartes des personnages grace à la search bar
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  useEffect(() => {
    axios
      .get(`https://the-harry-potter-database.herokuapp.com/api/1/${type}/all`)
      .then((response) => {
        setCards(response.data);
      });
  }, [type]);
  return (
    <div className="potionbackground">
      <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      {cards && (
        <div className="card-group">
          {cards
            .filter((card) => card.name.toLowerCase().includes(filtervalue))
            .map((card) => (
              <div className="col-4 px-4 fs-4">

                <div className="card  card-stretch text-center mx-auto spell">
                  <img
                    src={type === "potions" ? Potion : Wand}
                    alt={card.name}
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <h2 className="card-title ">{card.name}</h2>
                    <div className="card-text text">
                      {card.description}
                    </div>
                    {item !== "" ? (
                      <button
                        className="btn btn-dark"
                        type="button"
                        onClick={handleClick}
                      >
                        Select
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>

            ))}
        </div>
      )}
    </div>
  );
}
