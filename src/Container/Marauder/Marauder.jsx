import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Marauder.css";

export default function Marauder() {
  const { house } = useParams();

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
          <Link to={`/hat/${house}/Marauder/potions`}>
            <button type="button" className="buttonspell">
              POTION
            </button>
          </Link>

          <Link to={`/hat/${house}/Marauder/Fight`}>
            FIGHT
          </Link>

          <Link to={`/hat/${house}/Marauder/spells`}>
            <button type="button" className="buttonspell">
              SPELL
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
