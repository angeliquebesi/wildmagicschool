/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SpellPotionCard.css";
import Potion from "../../images/Potion.svg";
import Wand from "../../images/Wand.svg";
import UserContext from "../../Context/UserContext";
import SearchBar from "../Search";
import SpellPotion from "../SpellPotion/SpellPotion";

export default function SpellPotionCard({ type, type2 }) {
  const [cards, setCards] = useState([]);
  const { item } = useContext(UserContext);

  const [filtervalue, setFiltervalue] = useState("");
  // Fonction pour filtrer les cartes des personnages grace à la search bar
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  // Fonction pour fetch API
  useEffect(() => {
    axios
      .get(`https://the-harry-potter-database.herokuapp.com/api/1/${type}/all`)
      .then((response) => {
        setCards(response.data);
      });
  }, [type]);
  return (
    <div>
      <SpellPotion />
      <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      <div className="potionbackground">
        {cards && (
          <div className="card-group">
            {cards
              .filter((card) => card.name.toLowerCase().includes(filtervalue))
            /* creation des cards avec le fetch api */
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
                    </div>
                    {item !== "" ? (
                      <Link to={`/hat/${item}/Marauder/${type2}/Quizz`}>
                        <button
                          className="btn btn-dark"
                          type="button"
                        >
                          Select
                        </button>
                      </Link>

                    ) : null}
                  </div>
                </div>

              ))}
          </div>
        )}
      </div>
    </div>
  );
}
