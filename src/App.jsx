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
import SpellPotionCard from "./Components/SpellPotionCard/SpellPotionCard";

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

        {/* Route to go from house to Marauder */}
        <Route exact path="/hat/Gryffindor/Marauder" component={Marauder} />
        <Route exact path="/hat/Ravenclaw/Marauder" component={Marauder} />
        <Route exact path="/hat/Hufflepuff/Marauder" component={Marauder} />
        <Route exact path="/hat/Slytherin/Marauder" component={Marauder} />

        {/* Route to go from marauder to Spell Lesson */}
        <Route exact path="/hat/Gryffindor/Marauder/Spell">
          <SpellPotionCard type="spells" />
        </Route>
        <Route exact path="/hat/Ravenclaw/Marauder/Spell">
          <SpellPotionCard type="spells" />
        </Route>
        <Route exact path="/hat/Hufflepuff/Marauder/Spell">
          <SpellPotionCard type="spells" />
        </Route>
        <Route exact path="/hat/Slytherin/Marauder/Spell">
          <SpellPotionCard type="spells" />
        </Route>

        {/* Route to go from marauder to Potion Lesson */}
        <Route exact path="/hat/Gryffindor/Marauder/Potion">
          <SpellPotionCard type="potions" />
        </Route>
        <Route exact path="/hat/Ravenclaw/Marauder/Potion">
          <SpellPotionCard type="potions" />
        </Route>
        <Route exact path="/hat/Hufflepuff/Marauder/Potion">
          <SpellPotionCard type="potions" />
        </Route>
        <Route exact path="/hat/Slytherin/Marauder/Potion">
          <SpellPotionCard type="potions" />
        </Route>

        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
