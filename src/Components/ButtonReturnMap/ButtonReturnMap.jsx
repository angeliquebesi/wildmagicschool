import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function ButtonReturnMap() {
  const { item } = useContext(UserContext);

  return (
    <div>
      <Link to={`/hat/${item}/Marauder`}>
        <button type="button" className="buttonstart">
          Return to map
        </button>
      </Link>
    </div>
  );
}
