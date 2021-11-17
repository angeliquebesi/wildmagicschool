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
import { GameContextProvider } from "./Context/GameContext";
import SpellPotionDeck from "./Components/SpellPotionDeck/SpellPotionDeck";
import ContainerGame from "./Container/ContainerGame/ContainerGame";
import SpellPotionGame from "./Container/SpellPotionGam/SpellPotionGame";

function App() {
  return (
    <UserContextProvider>
      <GameContextProvider>
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
            <House house="Gryffindor" />
          </Route>

          {/* Route to go from house to Marauder */}
          <Route exact path="/hat/:house/Marauder">
            <Marauder />
          </Route>

          <Route exact path="/hat/:house/Marauder/Fight">
            <ContainerGame />
          </Route>

          {/* Route to go from marauder to Spell & Potions */}
          <Route exact path="/hat/:house/Marauder/:type">
            <SpellPotionDeck />
          </Route>

          {/* Routes pour aller du choix de la potion au quizz pour l'acquérir */}
          <Route exact path="/hat/:house/Marauder/:type/Quizz">
            <SpellPotionGame />
          </Route>

          <Route exact path="/contact" component={Contact} />
        </Switch>
        <div>
          <Footer />
        </div>
      </GameContextProvider>
    </UserContextProvider>
  );
}

export default App;
