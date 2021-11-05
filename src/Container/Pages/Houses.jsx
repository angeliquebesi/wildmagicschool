import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Houses.css";
import Gryffindor from "../../Components/gryffondor/gryffindor";
import Ravenclaw from "../../Components/Ravenclaw/Ravenclaw";
import Hufflepuff from "../../Components/Hufflepuff/Hufflepuff";
import Slytherin from "../../Components/Slytherin/Slytherin";

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
          <Route path="/Houses/Gryffindor">
            <Gryffindor />
          </Route>
          <Route path="/Houses/Hufflepuff">
            <Hufflepuff />
          </Route>
          <Route path="/Houses/Ravenclaw">
            <Ravenclaw />
          </Route>
          <Route path="/Houses/Slytherin">
            <Slytherin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
