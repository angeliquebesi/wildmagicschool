import "./App.css";
import React from "react";
import Home from "./Container/Pages/Home";
import Houses from "./Container/Pages/Houses";
import SpellPotion from "./Container/SpellPotion/SpellPotion";

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
