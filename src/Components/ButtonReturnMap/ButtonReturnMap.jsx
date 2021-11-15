import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function ButtonReturnMap() {
  const { userHouse } = useContext(UserContext);

  return (
    <div>
      <Link to={`/hat/${userHouse}/Marauder`}>
        <button type="button" className="buttonstart">
          Return to map
        </button>
      </Link>
    </div>
  );
}
