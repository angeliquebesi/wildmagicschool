import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function ButtonReturnMap() {
  const { userHouse, setIdMonster } = useContext(UserContext);

  const resetID = () => {
    setIdMonster("");
  };

  return (
    <div>
      <Link to={`/hat/${userHouse}/Marauder`}>
        <button type="button" className="buttonstart" onClick={resetID}>
          Return to map
        </button>
      </Link>
    </div>
  );
}
