import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <div className="hometext">
      <div className="texthero">
        <p className="heropresentation text-center">
          Welcome on the website of The Wild Magic School, we propose you an
          epic aventure which you will not regret ! Just press the start button
          and the hat will chose your house. When your house is finally chosen,
          you will have to make multiple choices to stay in the aventure.
        </p>
        <Link to="/hat">
          <button type="button" className="buttonstart">
            Start game
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
