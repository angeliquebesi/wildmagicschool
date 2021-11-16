import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Houses.css";
import House from "../../Components/House/House";

export default function Houses() {
  return (
    <Router>
      <div>
        <section className="housechoice">
          <Link to="/Houses/Gryffindor" className="linkStyle  link-light  ">
            <div className="house" id="Gryffindor">
              Gryffindor
            </div>
          </Link>
          <Link to="/Houses/Hufflepuff" className="linkStyle link-light">
            <div className="house" id="Hufflepuff">
              Hufflepuff
            </div>
          </Link>
          <Link to="/Houses/Ravenclaw" className="linkStyle link-light">
            <div className="house" id="Ravenclaw">
              Ravenclaw
            </div>
          </Link>
          <Link to="/Houses/Slytherin" className="linkStyle link-light">
            <div className="house" id="Slytherin">
              Slytherin
            </div>
          </Link>
        </section>
        <Switch>
          <Route path="/Houses/:house">
            <House />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
