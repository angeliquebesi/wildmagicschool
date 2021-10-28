import React from "react";
import CardDeck from "../../Components/CardDeck";
import "./Houses.css";
import logo from "./Blason_de_Gryffondor.png";

export default function Houses() {
  return (
    <div>
      <body>
        <nav className="navbar" />
        <div className="description text-center  ">
          <h1 className="welcomeHouse">WELCOME TO GRYFFONDOR</h1>
        </div>
        <div className="hero">
          <section className="Embleme-president">
            <div className="col-2 ">
              <div id="">
                <div className="card  card-stretch text-center mx-auto">
                  <img
                    src="http://hp-api.herokuapp.com/images/mcgonagall.jpg"
                    alt="president"
                    className="card-img-top img-fluid "
                  />
                  <div className="card-body">
                    <h2 className="card-title ">president</h2>
                    <div className="card-text ">
                      <strong>Patronus: </strong>
                      ***********
                      <br />
                      <strong>birth: </strong>
                      **********
                      <br />
                      <strong>House: </strong>
                      *************
                    </div>
                    <a className="btn btn-dark" target="_blank" href="">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2   ">
              <div>
                <img className="embleme" src={logo} alt="logo" />
              </div>
            </div>
          </section>
          <p className="PresentationHouse text-center fs-2 fw-bold w-50  ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            recusandae fugiat. Commodi, ipsum deserunt earum a dolorum
            consequuntur
            <br />
            incidunt minima eum dolorem. Assumenda optio aliquid dolorem
            repudiandae vero voluptas obcaecati!
          </p>
        </div>
        <h1 className="text-center m-2 text-dark"> Houses Personnages</h1>
        <input
          key="random1"
          value=""
          placeholder=""
          onChange={(e) => "setAction"(e.target.value)}
        />
        <CardDeck />
      </body>
    </div>
  );
}
