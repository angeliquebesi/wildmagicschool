import React from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <p className="heropresentation text-center">
        Welcome on the website of The Wild Magic School, we propose you an epic
        aventure which you will not regret ! Just press the start button and the
        hat will chose your house.When your house is finally chosen, you will
        have to make multiple choices to stay in the aventure.
      </p>
      <button type="button" className="buttonstart" href="">
        Start game
      </button>
      <Footer />
    </div>
  );
}
