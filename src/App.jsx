import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import SpellPotion from "./Components/SpellPotion/SpellPotion";
import Houses from "./Container/Houses/Houses";
import Home from "./Container/Home/Home";
import Hat from "./Container/Hat/Hat";
import Contact from "./Container/Contact/Contact";
import "./fonts/Harryp/HARRYP__.ttf";
import "./fonts/Dumbledor/dum1.ttf";
import House from "./Components/House/House";
import Marauder from "./Container/Marauder/Marauder";
import { UserContextProvider } from "./Context/UserContext";
import SpellPotionCard from "./Components/SpellPotionCard/SpellPotionCard";
import ContainerGame from "./Container/ContainerGame/ContainerGame";

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

        {/* Route to go from hat to house */}
        <Route exact path="/hat/:house">
          <House />
        </Route>

        {/* Route to go from house to Marauder */}
        <Route exact path="/hat/:house/Marauder" component={Marauder} />

        {/* Route to go from marauder to Spell Lesson */}
        <Route exact path="/hat/:house/Marauder/:type">
          <SpellPotionCard />
        </Route>

        {/* Routes pour aller du choix de la potion au quizz pour l'acquérir */}
        <Route exact path="/hat/:house/Marauder/:type/Quizz">
          <ContainerGame />
        </Route>

        {/* Route pour accéder à la zone de combat */}
        <Route exact path="/hat/Gryffindor/Marauder/Fight" component={ContainerGame} />
        <Route exact path="/hat/Ravenclaw/Marauder/Fight" component={ContainerGame} />
        <Route exact path="/hat/Hufflepuff/Marauder/Fight" component={ContainerGame} />
        <Route exact path="/hat/Slytherin/Marauder/Fight" component={ContainerGame} />

        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
