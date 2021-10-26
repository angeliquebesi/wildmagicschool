import "./App.css";
import React from "react";
import Home from "./Container/Pages/Home.js";
import Houses from "./Container/Pages/Houses.js";
import SpellPotion from "./Container/Pages/SpellPotion.js";

function App() {
  return (
    <div>
      <Home />
      <Houses />
      <SpellPotion />
    </div>
  );
}

export default App;
