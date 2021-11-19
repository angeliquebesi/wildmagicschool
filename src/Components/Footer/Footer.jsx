import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-distributed">

      <div className="footer-left">

        <p className="footer-links">
          <Link to="/" className="text-decoration-none link-light">Home - </Link>
          <Link to="/houses" className="text-decoration-none link-light">Houses - </Link>
          <Link to="/SpellPotion/:type" className="text-decoration-none link-light">Spell Potion - </Link>
          <Link to="/contact" className="text-decoration-none link-light">Contact - </Link>
          <Link to="/about-us" className="text-decoration-none link-light">About Us</Link>
        </p>

        <p>Wild Magic School &copy; 2021</p>
      </div>

    </div>
  );
}
