import React from "react";
import "./Search.css";

export default function SearchBar() {
  return (
    <div>
      <div className="flexbox">
        <div className="search">
          <h4>Click on search icon, then type your keyword.</h4>
          <div>
            <input
              type="text"
              placeholder="Search"
              value=""
              onChange=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
