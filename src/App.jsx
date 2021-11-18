import "./App.css";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const appRef = React.useRef();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <div>
      <div ref={appRef}>
        <UserContextProvider>
          <GameContextProvider>
            <div>
              <NavBar />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/houses" component={Houses} />
              <Route exact path="/SpellPotion/:type" component={SpellPotion} />

              <Route exact path="/hat" component={Hat} />

              {/* Route to go from hat to house */}
              <Route exact path="/hat/:house">
                <House />
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
            <div className="FooterStyle">
              <Footer />
            </div>
          </GameContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
