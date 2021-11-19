/* eslint-disable jsx-a11y/media-has-caption */
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="hometext">
        <div className="hp-hero__img-wrapper">
          <video
            id="autovideo"
            autoPlay
            loop
            muted
            src="https://static.warnerbros.fr/static/version1634738923/frontend/Warner/wizardingworld/fr_FR/images/home/header_background.mp4"
          />
        </div>
        <div className="texthero">
          <p className="heropresentation text-center">
            Welcome to the Wild Magic School !
            <br />
            Be ready to live an epic aventure inside the wonderful Harry
            Potter&apos;s world. Press the START GAME button
            <br />
            The Sorting Hat choose your house.
            <br />
            You now have to choose your character and begin your journey...
          </p>
          <Link to="/hat">
            <button type="button" className="buttonstart">
              Start game
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
