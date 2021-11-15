import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function ButtonReturnLesson({ type2 }) {
  const { userHouse } = useContext(UserContext);

  return (
    <div>
      <Link to={`/hat/${userHouse}/Marauder/${type2}`}>
        <button type="button" className="buttonstart">
          Back to choose your lesson
        </button>
      </Link>
    </div>
  );
}
