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
import { UserContextProvider } from "./Context/UserContext";
import ContainerGame from "./Container/Pages/ContainerGame";

function App() {
  return (
    <UserContextProvider>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/houses" component={Houses} />
        <Route exact path="/spellpotion" component={SpellPotion} />
        <Route exact path="/hat" component={Hat} />
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
        <Route exact path="/hat/Gryffindor/Marauder" component={Marauder} />
        <Route exact path="/hat/Ravenclaw/Marauder" component={Marauder} />
        <Route exact path="/hat/Hufflepuff/Marauder" component={Marauder} />
        <Route exact path="/hat/Slytherin/Marauder" component={Marauder} />
        <Route exact path="/hat/Marauder/fight" component={ContainerGame} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
