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
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default App;
