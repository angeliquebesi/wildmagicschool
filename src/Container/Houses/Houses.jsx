import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import House from "../../Components/House/House";
import "./Houses.css";

export default function Houses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Router>
        <div>
          <section className="housechoice">
            <Link
              to="/Houses/Gryffindor"
              className="linkStyle house link-light  "
            >
              <div className="house" id="Gryffindor">
                Gryffindor
              </div>
            </Link>
            <Link
              to="/Houses/Hufflepuff"
              className="linkStyle house link-light"
            >
              <div className="house" id="Hufflepuff">
                Hufflepuff
              </div>
            </Link>
            <Link to="/Houses/Ravenclaw" className="linkStyle house link-light">
              <div className="house" id="Ravenclaw">
                Ravenclaw
              </div>
            </Link>
            <Link to="/Houses/Slytherin" className="linkStyle house link-light">
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
    </motion.div>
  );
}
