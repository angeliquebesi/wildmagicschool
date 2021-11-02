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
          <div className="house" id="Gryffindor">
            <Link to="/Gryffindor" className="linkStyle">
              Gryffindor
            </Link>
          </div>
          <div className="house" id="Hufflepuff">
            <Link to="/Hufflepuff" className="linkStyle">
              Hufflepuff
            </Link>
          </div>
          <div className="house" id="Ravenclaw">
            <Link to="/Ravenclaw" className="linkStyle">
              Ravenclaw
            </Link>
          </div>
          <div className="house" id="Slytherin">
            <Link to="/Slytherin" className="linkStyle">
              Slytherin
            </Link>
          </div>
        </section>
        <Switch>
          <Route path="/Gryffindor">
            <Gryffindor />
          </Route>
          <Route path="/Hufflepuff">
            <Hufflepuff />
          </Route>
          <Route path="/Ravenclaw">
            <Ravenclaw />
          </Route>
          <Route path="/Slytherin">
            <Slytherin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
