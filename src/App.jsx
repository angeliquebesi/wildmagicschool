import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SpellPotion from "./Container/SpellPotion/SpellPotion";
import Houses from "./Container/Pages/Houses";
import Home from "./Container/Pages/Home";
import Hat from "./Container/Pages/Hat/Hat";
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
      </Switch>

    </>
  );
}

export default App;
