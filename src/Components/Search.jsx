import React from "react";
import "./Search.css";

export default function SearchBar({ filtervalue, onChangefilter }) {
  console.log();
  return (
    <div>
      <div className="flexbox">
        <div className="search">
          <h4>Click on search icon, then type your keyword.</h4>
          <div>
            <input
              type="search"
              value={filtervalue}
              onChange={onChangefilter}
              className="inputfilter"
              placeholder="Filter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
