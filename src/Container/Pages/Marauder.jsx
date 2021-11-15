import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Marauder.css";

export default function Marauder() {
  const { item } = useContext(UserContext);
  const history = useHistory();
  function handleClick() {
    setTimeout(() => {
      history.push("/hat/Marauder/fight");
    });
  }
  return (
    <div>
      <section className="Maraudercontainer ">
        <div className="textmarauder">
          <p className="heropresentation text-center">
            welcome avec le nom et la maison chosi précédement + Text pour
            décrire le principe du jeu avec le quiz et les combats Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugit in asperiores
            quaerat ipsam repudiandae consequatur architecto delectus, nihil,
            impedit quis molestiae laborum debitis deleniti nemo illum unde
            mollitia praesentium. Reiciendis.
          </p>
        </div>
        <div className="MarauderButton ">
          <Link to={`/hat/${item}/Marauder/Potion`}>
            <button type="button" className="buttonspell">
              POTION
            </button>
          </Link>

          <button type="button" className="buttonfight" onClick={handleClick}>
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
            FIGHT
          </button>

          <Link to={`/hat/${item}/Marauder/Spell`}>
            <button type="button" className="buttonspell">
              SPELL
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
