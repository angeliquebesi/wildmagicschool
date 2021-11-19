/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpellPotionDeck.css";
import UserContext from "../../Context/UserContext";
import GameContext from "../../Context/GameContext";
import SearchBar from "../SearchBar/Search";
import ButtonReturnMap from "../ButtonReturnMap/ButtonReturnMap";
import SpellPotionCard from "../SpellPotionCard/SpellPotionCard";

export default function SpellPotionDeck() {
  const { type } = useParams();
  const { userHouse } = useContext(UserContext);
  const { potions, spells } = useContext(GameContext);
  const { house } = useParams();
  const [cards, setCards] = useState([]);

  const [filtervalue, setFiltervalue] = useState("");
  // Fonction pour filtrer les cartes des personnages grace à la search bar
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };

  // Fonction de filtre pour les 6 premieres card
  const onSetCard = (data) => {
    if (userHouse === "") {
      setCards(data);
    } else {
      setCards(data.slice(0, 6));
    }
  };
  // Fonction pour fetch API
  useEffect(() => {
    axios
      .get(`https://the-harry-potter-database.herokuapp.com/api/1/${type}/all`)
      .then((response) => {
        onSetCard(response.data);
      });
  }, [type]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        {userHouse === "" ? (
          <SearchBar
            filtervalue={filtervalue}
            onChangefilter={onChangefilter}
          />
        ) : (
          ""
        )}
        <div className="potionbackground">
          {cards && (
            <div className="card-group">
              {cards
                .filter((card) => card.name.toLowerCase().includes(filtervalue))
                /* creation des cards avec le fetch api */
                .map((card) => (
                  <SpellPotionCard
                    key={card.id}
                    card={card}
                    type={type}
                    house={house}
                    earnedPotion={
                      type === "potions"
                        ? potions.some((potion) => potion.id === card.id)
                        : spells.some((spell) => spell.id === card.id)
                    }
                  />
                ))}
            </div>
          )}
        </div>
        {userHouse !== "" ? <ButtonReturnMap /> : ""}
      </div>
    </motion.div>
  );
}
