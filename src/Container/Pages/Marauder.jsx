import React from "react";
import "./Marauder.css";
import { useHistory } from "react-router-dom";

export default function Marauder() {
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
          <button type="button" className="buttonspell">
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
            POTION
          </button>
          <button type="button" className="buttonfight" onClick={handleClick}>
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
            FIGHT
          </button>
          <button type="button" className="buttonspell">
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
            SPELL
          </button>
        </div>
      </section>
    </div>
  );
}
