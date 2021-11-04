import React from "react";
import axios from "axios";
import CardDeck from "../CardDeck";
import "./Hufflepuff.css";
import logo from "./pngwing.com.png";
import imagePomona from "./imagePomona.jpeg";
// import SearchBar from "../../Components/Search";

export default function Hufflepuff() {
  const [personnages, setPersonnages] = React.useState(null);
  const [filtervalue, setFiltervalue] = React.useState("");
  React.useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters/house/hufflepuff")
      .then((response) => {
        setPersonnages(response.data);
      });
  }, [filtervalue]);
  return (
    <div>
      <div>
        <div className="description hufflepuff text-center text-light fs-1 fw-bold  ">
          <h1 className="welcomeHouse">WELCOME TO HUFFLEPUFF</h1>
        </div>
        <div className="hero hufflepuff">
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <h2 className="card-title mt-2 text-center text-light fs-1 fw-bold text-uppercase ">Director</h2>
                <div className=" card  text-center mx-auto">
                  <img
                    src={imagePomona}
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <div className="card-text ">
                      <strong>Name: </strong>
                      Pomona Sprout
                      <br />
                      <strong>Patronus: </strong>
                      tabby cat
                      <br />
                      <strong>birth: </strong>
                      04-10-1925
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img className="embleme" src={logo} alt="logo" />
                <h4 className="PresentationHouse text-center text-light fs-1 fw-bold text-uppercase border border-white ">
                  Most important traits:
                </h4>
                <p className="PresentationHouse text-center text-light fs-1    ">
                  Loyalty, Kindness, Honesty  and Friendship.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="selectPersonnage">
          <CardDeck
            personnages={personnages}
            filtervalue={filtervalue}
            setFiltervalue={setFiltervalue}
          />
        </div>
      </div>
    </div>
  );
}
