import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";
import SpellPotion from "./Container/SpellPotion/SpellPotion";
import Houses from "./Container/Pages/Houses";
import Home from "./Container/Pages/Home";
import Hat from "./Container/Pages/Hat/Hat";
import Contact from "./Container/Pages/Contact/Contact";
import "./fonts/Harryp/HARRYP__.ttf";
import "./fonts/Dumbledor/dum1.ttf";
import House from "./Components/House/House";
import Marauder from "./Container/Pages/Marauder";
import Spell from "./Components/Spell/Spell";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/houses" component={Houses} />
        <Route exact path="/spellpotion" component={SpellPotion} />
        <Route exact path="/hat" component={Hat} />
        {/* Routes for from the hat to the house */}
        <Route exact path="/hat/Hufflepuff">
          <House house="hufflepuff" />
        </Route>
        <Route exact path="/hat/Gryffindor">
          <House house="gryffindor" />
        </Route>
        <Route exact path="/hat/Ravenclaw">
          <House house="ravenclaw" />
        </Route>
        <Route exact path="/hat/Slytherin">
          <House house="slytherin" />
        </Route>
        {/* Routes for go from house to marauder */}
        <Route exact path="/hat/Gryffindor/Marauder" component={Marauder} />
        <Route exact path="/hat/Ravenclaw/Marauder" component={Marauder} />
        <Route exact path="/hat/Hufflepuff/Marauder" component={Marauder} />
        <Route exact path="/hat/Slytherin/Marauder" component={Marauder} />

        {/* Routes for go to Spell Lesson */}
        <Route exact path="/hat/Gryffindor/Marauder/Spell" component={Spell} />
        <Route exact path="/hat/Ravenclaw/Marauder/Spell" component={Spell} />
        <Route exact path="/hat/Hufflepuff/Marauder/Spell" component={Spell} />
        <Route exact path="/hat/Slytherin/Marauder/Spell" component={Spell} />

        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
