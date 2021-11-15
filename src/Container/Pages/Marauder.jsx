import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Marauder.css";
import { useHistory } from "react-router-dom";

export default function Marauder() {
<<<<<<< HEAD
  const { item } = useContext(UserContext);
=======
  const history = useHistory();
  function handleClick() {
    setTimeout(() => {
      history.push("/hat/Marauder/fight");
    });
  }
>>>>>>> dev
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
<<<<<<< HEAD
          <Link to={`/hat/${item}/Marauder/Potion`}>
            <button type="button" className="buttonspell">
              POTION
            </button>
          </Link>
          {/* Ajouter le lien vers la page combat */}
          <button type="button" className="buttonfight">
=======
          <button type="button" className="buttonspell">
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
            POTION
          </button>
          <button type="button" className="buttonfight" onClick={handleClick}>
            {/* Ajouter le lien vers la page de choix du chapeau en utilisant href */}
>>>>>>> dev
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
